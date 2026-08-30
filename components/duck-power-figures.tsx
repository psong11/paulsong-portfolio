"use client";

import { useState } from "react";

/**
 * Four figures from the 2026-08-30 power investigation on the Open Duck Mini v2.
 *
 * Every number here is measured, not modelled. Voltages are read from the servo
 * bus (Feetech STS3215 present-voltage register, tenths of a volt); the death
 * timing comes from a 20 Hz fsynced recorder on the Pi. The two line charts
 * share one y-domain on purpose -- the whole finding is that one experiment is
 * flat and the other is not, and separate scales would hide it.
 */

const DATA = "#2a78d6";
const CRIT = "#b3532f";

// -- measured data ---------------------------------------------------------

/** Gain ramp: goals parked at present position, so position error was ~0. */
const KP_RAMP = [
  { kp: 4, v: 7.6 }, { kp: 8, v: 7.6 }, { kp: 12, v: 7.7 }, { kp: 16, v: 7.6 },
  { kp: 20, v: 7.6 }, { kp: 24, v: 7.6 }, { kp: 28, v: 7.6 }, { kp: 32, v: 7.6 },
];

/** Slew into the init crouch at Kp 8, sampled 20x/s. Every 5th sample. */
const SLEW = [
  [0.6, 7.6], [3.7, 7.6], [6.9, 7.6], [10.0, 7.6], [13.1, 7.6], [16.3, 7.6],
  [19.4, 7.6], [22.5, 7.6], [25.6, 7.6], [28.7, 7.6], [31.9, 7.5], [35.0, 7.5],
  [38.1, 7.5], [41.2, 7.4], [44.4, 7.4], [47.5, 7.4], [50.6, 7.3], [53.7, 7.3],
  [56.9, 7.3], [60.0, 7.2], [63.1, 7.2], [66.2, 7.1], [69.4, 7.1], [72.5, 7.1],
  [75.6, 7.0], [78.7, 6.9], [81.9, 6.9], [85.0, 6.8], [88.1, 6.8], [91.2, 6.7],
  [94.4, 6.7], [97.5, 6.6], [100, 6.5],
].map(([pct, v]) => ({ pct, v }));

/**
 * Present-load while holding the crouch. The register is sign-magnitude: bit 10
 * is direction, so the magnitude is value & 0x3FF. Raw units, 0-1000,
 * uncalibrated -- proportional to torque, not amps.
 */
const LOADS = [
  { joint: "right hip pitch", id: 12, load: 470 },
  { joint: "left hip pitch", id: 22, load: 392 },
  { joint: "right hip roll", id: 11, load: 24 },
  { joint: "right hip yaw", id: 10, load: 22 },
  { joint: "left ankle", id: 24, load: 22 },
  { joint: "head pitch", id: 31, load: 22 },
  { joint: "left knee", id: 23, load: 20 },
  { joint: "neck pitch", id: 30, load: 18 },
  { joint: "right knee", id: 13, load: 0 },
  { joint: "right ankle", id: 14, load: 0 },
  { joint: "left hip yaw", id: 20, load: 0 },
  { joint: "left hip roll", id: 21, load: 0 },
  { joint: "head yaw", id: 32, load: 0 },
  { joint: "head roll", id: 33, load: 0 },
];

const V_MIN = 6.4;
const V_MAX = 7.8;

// -- small pieces ----------------------------------------------------------

function Caption({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <figcaption className="mt-3 font-serif text-sm leading-relaxed text-ink-muted">
      <span className="font-mono text-xs uppercase tracking-[0.18em] text-ink-faint">
        Fig. {n}
      </span>
      <span className="mt-1 block font-medium text-ink-soft">{title}</span>
      <span className="mt-1 block">{children}</span>
    </figcaption>
  );
}

function TableToggle({ label, children }: { label: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-3">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-faint underline decoration-dotted underline-offset-4 hover:text-ink-soft"
      >
        {open ? "Hide" : "Show"} {label}
      </button>
      {open && <div className="mt-3 overflow-x-auto">{children}</div>}
    </div>
  );
}

function DataTable({ head, rows }: { head: string[]; rows: (string | number)[][] }) {
  return (
    <table className="w-full border-collapse font-mono text-xs tabular-nums">
      <thead>
        <tr>
          {head.map((h) => (
            <th
              key={h}
              scope="col"
              className="border-b border-line px-2 py-1.5 text-left font-normal uppercase tracking-[0.12em] text-ink-faint"
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i}>
            {r.map((c, j) => (
              <td key={j} className="border-b border-line-soft px-2 py-1 text-ink-soft">
                {c}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function ChartFrame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div
      className="-mx-6 overflow-x-auto px-6 sm:mx-0 sm:px-0"
      tabIndex={0}
      role="group"
      aria-label={label}
    >
      <div className="min-w-[560px]">{children}</div>
    </div>
  );
}

// -- line figure with crosshair -------------------------------------------

type Pt = { x: number; y: number; label: string };

function VoltageLine({
  points,
  xTicks,
  xLabel,
  stroke,
  endLabel,
}: {
  points: Pt[];
  xTicks: { at: number; text: string }[];
  xLabel: string;
  stroke: string;
  endLabel: string;
}) {
  const [hover, setHover] = useState<number | null>(null);

  const W = 720, H = 250;
  const ML = 52, MR = 76, MT = 18, MB = 42;
  const pw = W - ML - MR;
  const ph = H - MT - MB;

  const xs = points.map((p) => p.x);
  const x0 = Math.min(...xs);
  const x1 = Math.max(...xs);
  const px = (x: number) => ML + ((x - x0) / (x1 - x0)) * pw;
  const py = (v: number) => MT + (1 - (v - V_MIN) / (V_MAX - V_MIN)) * ph;

  const d = points.map((p, i) => `${i ? "L" : "M"}${px(p.x).toFixed(1)},${py(p.y).toFixed(1)}`).join(" ");
  const yTicks = [6.4, 6.8, 7.2, 7.6];
  const active = hover === null ? null : points[hover];

  function onMove(e: React.PointerEvent<SVGSVGElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    const sx = ((e.clientX - r.left) / r.width) * W;
    let best = 0;
    let bestD = Infinity;
    points.forEach((p, i) => {
      const dd = Math.abs(px(p.x) - sx);
      if (dd < bestD) { bestD = dd; best = i; }
    });
    setHover(best);
  }

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full touch-none"
      role="img"
      aria-label={`Pack voltage against ${xLabel}`}
      onPointerMove={onMove}
      onPointerLeave={() => setHover(null)}
    >
      {yTicks.map((v) => (
        <g key={v}>
          <line
            x1={ML} x2={W - MR} y1={py(v)} y2={py(v)}
            stroke="var(--color-line-soft)" strokeWidth={1}
          />
          <text
            x={ML - 10} y={py(v)} dy="0.32em" textAnchor="end"
            className="fill-[var(--color-ink-faint)] font-mono text-[11px] tabular-nums"
          >
            {v.toFixed(1)}
          </text>
        </g>
      ))}

      {xTicks.map((t) => (
        <text
          key={t.text} x={px(t.at)} y={H - MB + 20} textAnchor="middle"
          className="fill-[var(--color-ink-faint)] font-mono text-[11px] tabular-nums"
        >
          {t.text}
        </text>
      ))}
      <text
        x={ML + pw / 2} y={H - 6} textAnchor="middle"
        className="fill-[var(--color-ink-faint)] font-mono text-[10px] uppercase tracking-[0.15em]"
      >
        {xLabel}
      </text>
      <text
        x={14} y={MT + ph / 2} textAnchor="middle"
        transform={`rotate(-90 14 ${MT + ph / 2})`}
        className="fill-[var(--color-ink-faint)] font-mono text-[10px] uppercase tracking-[0.15em]"
      >
        pack volts
      </text>

      <path d={d} fill="none" stroke={stroke} strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />

      {/* endpoint marker + direct label: the extreme is the story */}
      <circle cx={px(points[points.length - 1].x)} cy={py(points[points.length - 1].y)} r={4.5} fill={stroke} />
      <text
        x={px(points[points.length - 1].x) + 10}
        y={py(points[points.length - 1].y)} dy="0.32em"
        className="fill-[var(--color-ink-soft)] font-mono text-[11px] tabular-nums"
      >
        {endLabel}
      </text>

      {active && (
        <g pointerEvents="none">
          <line
            x1={px(active.x)} x2={px(active.x)} y1={MT} y2={MT + ph}
            stroke="var(--color-line)" strokeWidth={1}
          />
          <circle cx={px(active.x)} cy={py(active.y)} r={5} fill={stroke} stroke="var(--color-paper)" strokeWidth={2} />
          <g transform={`translate(${Math.min(px(active.x) + 12, W - MR - 40)},${Math.max(py(active.y) - 34, MT)})`}>
            <rect width={128} height={30} rx={3} fill="var(--color-card)" stroke="var(--color-line)" strokeWidth={1} />
            <text x={8} y={13} className="fill-[var(--color-ink)] font-mono text-[12px] font-medium tabular-nums">
              {active.y.toFixed(1)} V
            </text>
            <text x={8} y={24} className="fill-[var(--color-ink-faint)] font-mono text-[10px] tabular-nums">
              {active.label}
            </text>
          </g>
        </g>
      )}
    </svg>
  );
}

// -- bar figure ------------------------------------------------------------

function LoadBars() {
  const [hover, setHover] = useState<number | null>(null);
  const W = 720;
  const ROW = 22;
  const ML = 132, MR = 60, MT = 10;
  // Room for the tick row AND the axis title beneath it; sizing to the plot
  // alone clips the title at the viewBox edge.
  const H = MT + LOADS.length * ROW + 48;
  const pw = W - ML - MR;
  const max = 500;
  const bw = (v: number) => (v / max) * pw;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label="Present load by joint while holding the crouch">
      {[0, 100, 200, 300, 400, 500].map((t) => (
        <g key={t}>
          <line x1={ML + bw(t)} x2={ML + bw(t)} y1={MT} y2={MT + LOADS.length * ROW}
            stroke="var(--color-line-soft)" strokeWidth={1} />
          <text x={ML + bw(t)} y={MT + LOADS.length * ROW + 16} textAnchor="middle"
            className="fill-[var(--color-ink-faint)] font-mono text-[11px] tabular-nums">
            {t}
          </text>
        </g>
      ))}
      <text x={ML + pw / 2} y={H - 10} textAnchor="middle"
        className="fill-[var(--color-ink-faint)] font-mono text-[10px] uppercase tracking-[0.15em]">
        present load (raw, 0–1000)
      </text>

      {LOADS.map((j, i) => {
        const y = MT + i * ROW;
        const big = j.load > 100;
        const w = Math.max(bw(j.load), j.load > 0 ? 2 : 0);
        return (
          <g key={j.id}
            onPointerEnter={() => setHover(i)}
            onPointerLeave={() => setHover(null)}
          >
            {/* hit target spans the whole row, not just the painted bar */}
            <rect x={0} y={y} width={W} height={ROW} fill="transparent" />
            <text x={ML - 10} y={y + ROW / 2} dy="0.32em" textAnchor="end"
              className={`font-mono text-[11px] ${big ? "fill-[var(--color-ink)]" : "fill-[var(--color-ink-faint)]"}`}>
              {j.joint}
            </text>
            <rect
              x={ML} y={y + 4} width={w} height={ROW - 8} rx={3}
              fill={big ? CRIT : DATA}
              opacity={hover === null || hover === i ? 1 : 0.55}
            />
            {big && (
              <text x={ML + w + 8} y={y + ROW / 2} dy="0.32em"
                className="fill-[var(--color-ink-soft)] font-mono text-[11px] tabular-nums">
                {j.load}
              </text>
            )}
            {hover === i && !big && (
              <text x={ML + w + 8} y={y + ROW / 2} dy="0.32em"
                className="fill-[var(--color-ink-soft)] font-mono text-[11px] tabular-nums">
                {j.load}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

// -- the section -----------------------------------------------------------

export default function DuckPowerFigures() {
  return (
    <div className="mt-10 border-y border-line bg-card/40 py-10">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">
        Figures — the power investigation
      </p>
      <h3 className="mt-2 font-serif text-xl text-ink">
        Why the duck kept dying four seconds in
      </h3>

      {/* Fig 1 — a hero number, because the data is one fact */}
      <figure className="mt-8">
        <div className="rounded-sm border border-line bg-card p-6">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <span className="font-serif text-5xl leading-none text-ink">4.808</span>
            <span className="font-mono text-sm uppercase tracking-[0.15em] text-ink-muted">
              seconds to death
            </span>
          </div>
          <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
            {[
              ["97", "samples, 20 Hz"],
              ["0", "undervoltage flags"],
              ["0x0", "throttle word"],
              ["none", "END marker"],
            ].map(([v, k]) => (
              <div key={k}>
                <div className="font-mono text-lg text-ink tabular-nums">{v}</div>
                <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-faint">
                  {k}
                </div>
              </div>
            ))}
          </dl>
        </div>
        <Caption n="1" title="The recorder stops mid-sentence.">
          Every sample is forced to disk the instant it is taken, and a clean
          shutdown writes an <code>END</code> marker. This file has none — so the
          process did not exit, it was killed with the machine. Note the two
          zeros: the Pi&rsquo;s own undervoltage flag never tripped and the
          throttle word stayed clean. That is not evidence the power was fine.
          The chip has to survive at a degraded voltage long enough to notice,
          and a fast enough collapse leaves nothing behind.
        </Caption>
      </figure>

      {/* Fig 2 */}
      <figure className="mt-14">
        <ChartFrame label="Pack voltage against proportional gain">
          <VoltageLine
            points={KP_RAMP.map((d) => ({ x: d.kp, y: d.v, label: `Kp ${d.kp}` }))}
            xTicks={[4, 12, 20, 28, 32].map((k) => ({ at: k, text: String(k) }))}
            xLabel="proportional gain (Kp)"
            stroke={DATA}
            endLabel="7.6 V"
          />
        </ChartFrame>
        <Caption n="2" title="Stiffness alone is not the culprit — a null result.">
          Torque was enabled on all fourteen joints and the gain stepped from 4 to
          32, the runtime&rsquo;s full value, holding three seconds at each step.
          The pack never moved more than a tenth of a volt. This looks like an
          exoneration and is really a design flaw in the experiment: every
          joint&rsquo;s goal was parked at its present position, so position error
          was zero, and gain is a multiplier on error. It proves that energising
          the servos is cheap. It says nothing about holding a load.
        </Caption>
        <TableToggle label="the numbers">
          <DataTable
            head={["Kp", "min pack (V)"]}
            rows={KP_RAMP.map((d) => [d.kp, d.v.toFixed(1)])}
          />
        </TableToggle>
      </figure>

      {/* Fig 3 */}
      <figure className="mt-14">
        <ChartFrame label="Pack voltage against progress into the crouch">
          <VoltageLine
            points={SLEW.map((d) => ({ x: d.pct, y: d.v, label: `${d.pct.toFixed(0)}% into the crouch` }))}
            xTicks={[0, 25, 50, 75, 100].map((p) => ({ at: p, text: `${p}%` }))}
            xLabel="progress into the init crouch"
            stroke={CRIT}
            endLabel="6.5 V"
          />
        </ChartFrame>
        <Caption n="3" title="The same pack, asked to hold the robot up.">
          The runtime&rsquo;s start-up writes an init pose to all fourteen servos
          in a single command — a crouch, knees near 78°, hips 36°, ankles 45°.
          Here that move is stretched over ten seconds at a quarter of the
          runtime&rsquo;s stiffness, with the pack read twenty times a second.
          It falls about a tenth of a volt for every ten percent deeper the duck
          squats: 7.6 V at rest to 6.5 V at the bottom. Not a cliff — a slope,
          and a load-proportional one. Note the shared vertical scale with Fig. 2:
          the same axis that showed a flat line there falls off the grid here.
        </Caption>
        <TableToggle label="the numbers">
          <DataTable
            head={["% into crouch", "pack (V)"]}
            rows={SLEW.map((d) => [d.pct.toFixed(1), d.v.toFixed(1)])}
          />
        </TableToggle>
      </figure>

      {/* Fig 4 */}
      <figure className="mt-14">
        <ChartFrame label="Present load by joint">
          <LoadBars />
        </ChartFrame>
        <Caption n="4" title="Two joints out of fourteen are doing the work.">
          Present load while holding the crouch. The hip pitches pull 470 and 392
          against a whole-body median of 21, and they are also the two joints that
          failed to reach their targets — stalled roughly twenty degrees short,
          which is a motor&rsquo;s maximum-current condition. Twelve servos are
          idling while two carry the robot and heat up. Register values are
          sign-magnitude (bit 10 is direction, magnitude is <code>value &amp; 0x3FF</code>),
          raw and uncalibrated: proportional to torque, not amps.
        </Caption>
        <TableToggle label="all fourteen joints">
          <DataTable
            head={["joint", "id", "load"]}
            rows={LOADS.map((j) => [j.joint, j.id, j.load])}
          />
        </TableToggle>
      </figure>

      <div className="mt-14 border-t border-line pt-6">
        <p className="prose-article max-w-[60ch] font-serif text-ink-soft">
          Taken together: at low gain the duck survives but cannot hold itself up,
          and at the gain that would hold it up the current drags the pack below
          what the Pi&rsquo;s regulator needs. There is no setting that both
          stands and keeps the brain alive. That gap is not a software bug —
          it is a battery that cannot pay for standing.
        </p>
        <p className="mt-4 font-mono text-[11px] leading-relaxed text-ink-faint">
          Method: voltages from the Feetech STS3215 present-voltage register over
          the servo bus, tenths of a volt. Timing from a 20 Hz recorder writing to
          an fsynced file so each sample survives a power cut. Pack resting
          voltage drifted 7.8 → 7.6 V across the session, so absolute values are
          not comparable between figures; the shapes are.
        </p>
      </div>
    </div>
  );
}

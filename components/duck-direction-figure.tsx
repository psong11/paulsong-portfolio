"use client";

import { useState } from "react";

/**
 * The measurement that overturned the power diagnosis, 31 Aug 2026.
 *
 * One joint, two runs, identical apart from which way it was asked to go. The
 * commanded angle is stepped two degrees at a time and the joint's actual
 * travel and load recorded after each step. Both panels share an x-axis, so a
 * reader can drop a vertical line through them and see cause beside effect.
 */

const FREE = "#2a78d6";
const BLOCKED = "#b3532f";

/** [commanded travel, actual travel, load] — right hip pitch, Kp 8. */
const TOWARD_TARGET: [number, number, number][] = [
  [2, 0.4, 50], [4, 0.7, 90], [6, 0.8, 130], [8, 1.2, 168], [10, 1.5, 206],
  [12, 1.6, 250], [14, 2.0, 286], [16, 2.0, 332], [18, 2.3, 370],
  [20, 2.3, 416], [22, 2.3, 460], [24, 2.6, 500], [26, 2.6, 546], [28, 2.6, 592],
];
const OPPOSITE: [number, number, number][] = [
  [2, 1.7, 20], [4, 3.8, 18], [6, 5.7, 20], [8, 7.7, 20], [10, 9.6, 24],
  [12, 11.3, 28], [14, 13.3, 30], [16, 15.3, 30], [18, 17.2, 32], [20, 19.0, 36],
  [22, 20.8, 40], [24, 22.7, 42], [26, 24.8, 42], [28, 26.5, 46], [30, 28.5, 48],
  [32, 30.3, 52], [34, 32.3, 52], [36, 34.2, 54], [38, 36.1, 56],
];

const SERIES = [
  { key: "blocked", label: "as the runtime commands it", color: BLOCKED, data: TOWARD_TARGET },
  { key: "free", label: "the same joint, opposite direction", color: FREE, data: OPPOSITE },
];

const W = 720, H = 250, ML = 56, MR = 24, MT = 16, MB = 44;
const PW = W - ML - MR, PH = H - MT - MB;
const XMAX = 40;

function Panel({
  yIndex, yMax, yTicks, yLabel, unit,
}: {
  yIndex: 1 | 2; yMax: number; yTicks: number[]; yLabel: string; unit: string;
}) {
  const [hover, setHover] = useState<number | null>(null);
  const px = (x: number) => ML + (x / XMAX) * PW;
  const py = (v: number) => MT + (1 - v / yMax) * PH;

  function onMove(e: React.PointerEvent<SVGSVGElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    const x = (((e.clientX - r.left) / r.width) * W - ML) / PW * XMAX;
    setHover(Math.max(0, Math.min(XMAX, Math.round(x / 2) * 2)));
  }

  const at = (d: [number, number, number][], x: number) => d.find((p) => p[0] === x);

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`} className="w-full touch-none" role="img"
      aria-label={`${yLabel} against commanded travel`}
      onPointerMove={onMove} onPointerLeave={() => setHover(null)}
    >
      {yTicks.map((v) => (
        <g key={v}>
          <line x1={ML} x2={W - MR} y1={py(v)} y2={py(v)}
            stroke="var(--color-line-soft)" strokeWidth={1} />
          <text x={ML - 10} y={py(v)} dy="0.32em" textAnchor="end"
            className="fill-[var(--color-ink-faint)] font-mono text-[11px] tabular-nums">{v}</text>
        </g>
      ))}
      {[0, 10, 20, 30, 40].map((t) => (
        <text key={t} x={px(t)} y={H - MB + 20} textAnchor="middle"
          className="fill-[var(--color-ink-faint)] font-mono text-[11px] tabular-nums">{t}</text>
      ))}
      <text x={ML + PW / 2} y={H - 6} textAnchor="middle"
        className="fill-[var(--color-ink-faint)] font-mono text-[10px] uppercase tracking-[0.15em]">
        degrees commanded away from where it started
      </text>
      <text x={14} y={MT + PH / 2} textAnchor="middle"
        transform={`rotate(-90 14 ${MT + PH / 2})`}
        className="fill-[var(--color-ink-faint)] font-mono text-[10px] uppercase tracking-[0.15em]">
        {yLabel}
      </text>

      {/* On the travel panel, perfect obedience is the diagonal. */}
      {yIndex === 1 && (
        <>
          <line x1={px(0)} y1={py(0)} x2={px(XMAX)} y2={py(Math.min(XMAX, yMax))}
            stroke="var(--color-line)" strokeWidth={1} />
          <text x={px(34)} y={py(34) - 8}
            className="fill-[var(--color-ink-faint)] font-mono text-[10px]">
            perfect tracking
          </text>
        </>
      )}

      {SERIES.map((s) => (
        <g key={s.key}>
          <path
            d={s.data.map((p, i) => `${i ? "L" : "M"}${px(p[0]).toFixed(1)},${py(p[yIndex]).toFixed(1)}`).join(" ")}
            fill="none" stroke={s.color} strokeWidth={2}
            strokeLinejoin="round" strokeLinecap="round"
          />
          <circle cx={px(s.data[s.data.length - 1][0])}
            cy={py(s.data[s.data.length - 1][yIndex])} r={4.5} fill={s.color} />
        </g>
      ))}

      {hover !== null && (
        <g pointerEvents="none">
          <line x1={px(hover)} x2={px(hover)} y1={MT} y2={MT + PH}
            stroke="var(--color-line)" strokeWidth={1} />
          {SERIES.map((s) => {
            const p = at(s.data, hover);
            if (!p) return null;
            return <circle key={s.key} cx={px(p[0])} cy={py(p[yIndex])} r={5}
              fill={s.color} stroke="var(--color-paper)" strokeWidth={2} />;
          })}
          <g transform={`translate(${Math.min(px(hover) + 12, W - MR - 190)},${MT + 6})`}>
            <rect width={186} height={46} rx={3} fill="var(--color-card)"
              stroke="var(--color-line)" strokeWidth={1} />
            {SERIES.map((s, i) => {
              const p = at(s.data, hover);
              return (
                <g key={s.key} transform={`translate(8,${16 + i * 16})`}>
                  <line x1={0} x2={12} y1={-4} y2={-4} stroke={s.color} strokeWidth={2} />
                  <text x={18} className="fill-[var(--color-ink)] font-mono text-[11px] tabular-nums">
                    {p ? `${p[yIndex]}${unit}` : "—"}
                  </text>
                  <text x={62} className="fill-[var(--color-ink-faint)] font-mono text-[10px]">
                    {s.key === "free" ? "opposite" : "commanded"}
                  </text>
                </g>
              );
            })}
          </g>
        </g>
      )}
    </svg>
  );
}

export default function DuckDirectionFigure() {
  return (
    <div className="mt-10 border-y border-line bg-card/40 py-10">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">
        Figure — the measurement that overturned it
      </p>
      <h3 className="mt-2 font-serif text-xl text-ink">
        One joint, two runs, opposite directions
      </h3>

      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
        {SERIES.map((s) => (
          <span key={s.key} className="flex items-center gap-2 font-mono text-[11px] text-ink-muted">
            <span className="inline-block h-0.5 w-5" style={{ background: s.color }} aria-hidden />
            {s.label}
          </span>
        ))}
      </div>

      <div className="-mx-6 mt-6 overflow-x-auto px-6 sm:mx-0 sm:px-0" tabIndex={0}
        role="group" aria-label="How far the joint actually moved">
        <div className="min-w-[560px]">
          <Panel yIndex={1} yMax={40} yTicks={[0, 10, 20, 30, 40]}
            yLabel="degrees actually moved" unit="°" />
        </div>
      </div>

      <div className="-mx-6 mt-4 overflow-x-auto px-6 sm:mx-0 sm:px-0" tabIndex={0}
        role="group" aria-label="What it cost">
        <div className="min-w-[560px]">
          <Panel yIndex={2} yMax={600} yTicks={[0, 200, 400, 600]}
            yLabel="load (raw)" unit="" />
        </div>
      </div>

      <figcaption className="mt-4 font-serif text-sm leading-relaxed text-ink-muted">
        The same joint, the same gain, the same afternoon. Asked to go the way
        the runtime commands it, the motor moves two and a half degrees and then
        stops, while the force it applies climbs twelvefold and the battery falls
        a full volt. Asked to go the other way, it follows the command almost
        perfectly for thirty-four degrees at a tenth of the effort, and the
        battery never moves. The panels share an axis: the moment the top line
        goes flat is the moment the bottom one starts to climb.
      </figcaption>
    </div>
  );
}

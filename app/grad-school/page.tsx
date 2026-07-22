import Link from "next/link";
import OfficeHours from "@/components/office-hours";
import {
  MILESTONES,
  ROVER_ZERO,
  BENCH,
  BENCH_TOTAL,
  CANON,
  PRINCIPLES,
  CUTS,
} from "@/content/grad-school";

export const metadata = {
  title: "An Autonomous Grad School — the syllabus",
  description:
    "A two-year, build-first, self-directed master's in autonomous systems: a crop-scouting drone as the thesis, a regenerative microfarm as the lab, and a resident AI professor who knows the whole syllabus.",
};

const STATS = [
  { n: "~1,250", label: "total hours (10–15/wk)" },
  { n: "2", label: "years" },
  { n: "7", label: "dated demos in Year 1" },
  { n: "8", label: "books in the canon" },
  { n: "$0", label: "new gear until a demo demands it" },
  { n: "1", label: "serious robot at a time" },
];

const fmtDue = (iso: string) =>
  new Date(iso + "T12:00:00").toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

export default function GradSchoolPage() {
  return (
    <main className="min-h-screen">
      {/* Top bar */}
      <div className="mx-auto flex max-w-[68ch] items-center justify-between gap-4 px-6 pt-12 pb-2 sm:pt-16">
        <Link
          href="/"
          className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted hover:text-[var(--color-leaf)]"
        >
          ← Portfolio
        </Link>
        <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
          <span
            className="h-2 w-2 rounded-full bg-[var(--color-clay)]"
            aria-hidden
          />
          The Syllabus
        </span>
      </div>

      {/* Hero */}
      <header className="mx-auto max-w-[68ch] px-6 pt-8 pb-4">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-clay)]">
          Aug 2026 → Aug 2028
        </p>
        <h1 className="mt-3 font-serif text-4xl font-medium leading-[1.05] tracking-tight text-ink sm:text-5xl">
          An Autonomous Grad School
        </h1>
        <p className="mt-1 font-serif text-2xl font-medium text-ink-muted">
          designed with Claude
        </p>
        <p className="mt-5 font-serif text-lg leading-relaxed text-ink-soft">
          No campus, no tuition, no transcript. A two-year, build-first
          master&apos;s in autonomous systems — where the thesis is a{" "}
          <strong>crop-scouting drone</strong>, the lab is a{" "}
          <strong>regenerative microfarm</strong>, and every course is
          whatever the next demo forces me to learn.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-md border border-line-soft bg-card px-4 py-3"
            >
              <span className="block font-serif text-2xl font-medium tabular-nums text-ink">
                {s.n}
              </span>
              <span className="font-mono text-[0.65rem] text-ink-faint">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        <OfficeHours />
      </header>

      {/* Operating principles */}
      <section className="mx-auto max-w-[68ch] px-6 pt-12">
        <h2 className="font-serif text-[1.75rem] font-medium text-ink">
          Operating principles.
        </h2>
        <p className="mt-1 font-serif text-sm italic text-ink-faint">
          The rules that keep a self-issued degree from becoming a reading
          list.
        </p>
        <dl className="mt-4">
          {PRINCIPLES.map((p) => (
            <div key={p.title} className="border-t border-line-soft py-4">
              <dt className="font-serif text-lg font-medium text-ink">
                {p.title}
              </dt>
              <dd className="mt-1 font-serif text-[0.95rem] leading-relaxed text-ink-muted">
                {p.body}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Lab bench */}
      <section className="mx-auto max-w-[68ch] px-6 pt-12">
        <h2 className="font-serif text-[1.75rem] font-medium text-ink">
          The lab bench.
        </h2>
        <p className="mt-1 font-serif text-sm italic text-ink-faint">
          Pixhawk + ELRS + MAVLink + QGroundControl — the same stack flying
          research UAVs everywhere. Nearly all of it already on the bench;
          this year&apos;s new-gear budget rounds to zero.
        </p>
        <div className="mt-4">
          {BENCH.map((b) => (
            <div
              key={b.part}
              className="grid grid-cols-[7rem_1fr_auto] items-baseline gap-3 border-t border-line-soft py-3 max-sm:grid-cols-[1fr_auto]"
            >
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-ink-muted max-sm:col-span-2 max-sm:-mb-1">
                {b.part}
              </span>
              <span className="font-serif text-[0.95rem] text-ink-soft">
                {b.what}
              </span>
              <span className="font-mono text-[0.75rem] tabular-nums text-ink-muted">
                {b.cost}
              </span>
            </div>
          ))}
          <div className="grid grid-cols-[7rem_1fr_auto] items-baseline gap-3 border-t border-line py-3 max-sm:grid-cols-[1fr_auto]">
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-[var(--color-clay)]">
              Total
            </span>
            <span className="font-serif text-sm italic text-ink-faint max-sm:hidden">
              the deferred rover bench unlocks in Year 2, item by earned item
            </span>
            <span className="font-mono text-[0.75rem] font-bold tabular-nums text-[var(--color-clay)]">
              {BENCH_TOTAL}
            </span>
          </div>
        </div>
      </section>

      {/* Year 1 milestones */}
      <section className="mx-auto max-w-[68ch] px-6 pt-12">
        <h2 className="font-serif text-[1.75rem] font-medium text-ink">
          Year 1 — the farm UAV.
        </h2>
        <p className="mt-1 font-serif text-sm italic text-ink-faint">
          One aircraft, seven demos, thirteen months, all flown over the
          Treehouse Pantry microfarm. Each milestone names what it ships, what
          it forces me to learn, who in nature solved it first — and when
          it&apos;s due.
        </p>

        <div className="mt-6">
          {MILESTONES.map((m) => (
            <article
              key={m.code}
              className="relative border-l-2 border-[var(--color-clay)] pb-8 pl-6 last:pb-2"
            >
              <span
                className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-[var(--color-clay)] bg-paper"
                aria-hidden
              />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-[var(--color-clay)]">
                  {m.code} · {m.name}
                </span>
                <span className="rounded-full bg-mat px-2.5 py-0.5 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-ink-muted">
                  due {fmtDue(m.due)}
                </span>
              </div>
              <h3 className="mt-1.5 font-serif text-xl font-medium text-ink">
                {m.title}
              </h3>
              <p className="mt-2 font-serif text-[0.95rem] leading-relaxed text-ink-soft">
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-[var(--color-clay)]">
                  Ship&nbsp;&nbsp;
                </span>
                {m.ship}
              </p>
              <p className="mt-1.5 font-serif text-[0.95rem] text-ink-muted">
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-ink-faint">
                  Forces&nbsp;&nbsp;
                </span>
                {m.learn}
              </p>
              <p className="mt-1.5 font-serif text-[0.95rem] italic text-[var(--color-leaf-deep)]">
                <span className="font-mono not-italic text-[0.65rem] uppercase tracking-[0.12em] text-[var(--color-leaf)]">
                  Nature&nbsp;&nbsp;
                </span>
                {m.nature}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Rover Zero — the side quest */}
      <section className="mx-auto max-w-[68ch] px-6 pt-12">
        <h2 className="font-serif text-[1.75rem] font-medium text-ink">
          The side quest — Rover Zero.
        </h2>
        <p className="mt-1 font-serif text-sm italic text-ink-faint">
          Undated, guilt-free, and a toy on purpose. The ground track&apos;s
          perception sandbox.
        </p>
        <div className="mt-4 rounded-md border border-line-soft bg-card px-5 py-4 font-serif text-[0.95rem] leading-relaxed text-ink-soft">
          <p>{ROVER_ZERO.what}</p>
          <p className="mt-3">{ROVER_ZERO.architecture}</p>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-ink-muted">
            {ROVER_ZERO.demos.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ol>
          <p className="mt-3 text-ink-muted">
            <em>Scope, honestly:</em> {ROVER_ZERO.honesty}
          </p>
        </div>
      </section>

      {/* Year 2 */}
      <section className="mx-auto max-w-[68ch] px-6 pt-12">
        <h2 className="font-serif text-[1.75rem] font-medium text-ink">
          Year 2 — to be earned.
        </h2>
        <p className="mt-1 font-serif text-sm italic text-ink-faint">
          Oct 2027 → Aug 2028. Deliberately undecided until the M6 thesis
          defense — a syllabus written before its evidence would be
          guesswork.
        </p>
        <div className="mt-4 rounded-md border border-line-soft bg-card px-5 py-4 font-serif text-[0.95rem] leading-relaxed text-ink-soft">
          <p>
            The standing bet: the <strong>real ground rover</strong> —
            inheriting Rover Zero&apos;s perception stack and the kepler452b
            gas-sensor payload — with the old bench (Jetson, RTK, 3D LiDAR)
            unlocked item by item behind a purchase gate: a demo must demand
            it.
          </p>
          <p className="mt-3">
            The capstone bet stays: an <strong>air–ground team</strong>. The
            UAV spots an anomaly from altitude; the rover drives out to
            investigate. Two robots, one nervous system — soaring scouts and
            ground foragers have run this division of labor forever.
          </p>
          <p className="mt-3 text-ink-muted">
            <em>Dessert track:</em> OpenDuck V2 as a bipedal embodied-AI pet —
            built only if I&apos;m ahead of schedule, skipped guilt-free if
            not.
          </p>
        </div>
      </section>

      {/* Canon */}
      <section className="mx-auto max-w-[68ch] px-6 pt-12">
        <h2 className="font-serif text-[1.75rem] font-medium text-ink">
          The canon.
        </h2>
        <p className="mt-1 font-serif text-sm italic text-ink-faint">
          Eight books, two years. Chosen to shape taste, not to transfer
          syllabus.
        </p>
        <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {CANON.map((c) => (
            <div
              key={c.title}
              className="rounded-md border-l-[3px] border-[var(--color-leaf)] bg-card px-4 py-3"
            >
              <span className="block font-serif text-[1.05rem] font-medium text-ink">
                {c.title}
              </span>
              <span className="font-serif text-sm text-ink-muted">
                {c.note}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* The method */}
      <section className="mx-auto max-w-[68ch] px-6 pt-12">
        <h2 className="font-serif text-[1.75rem] font-medium text-ink">
          The method.
        </h2>
        <p className="mt-1 font-serif text-sm italic text-ink-faint">
          Every concept, four questions. The green one is the thesis of the
          whole school.
        </p>
        <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          {[
            { q: "What?", a: "Name it precisely." },
            { q: "Why?", a: "What breaks without it." },
            { q: "How?", a: "Intuition-deep, not proof-deep." },
          ].map((x) => (
            <div
              key={x.q}
              className="rounded-md border border-line-soft bg-card px-3.5 py-3"
            >
              <span className="block font-serif text-lg font-medium text-ink">
                {x.q}
              </span>
              <span className="font-serif text-sm text-ink-muted">{x.a}</span>
            </div>
          ))}
          <div className="rounded-md border border-[var(--color-leaf)] bg-card px-3.5 py-3">
            <span className="block font-serif text-lg font-medium leading-snug text-[var(--color-leaf-deep)]">
              Where does nature already do this?
            </span>
            <span className="font-serif text-sm text-ink-muted">
              The question MIT doesn&apos;t ask.
            </span>
          </div>
        </div>

        <p className="mt-5 font-serif text-[0.95rem] italic text-ink-muted">
          &ldquo;Nature&rdquo; runs in two registers here, and the program
          studies both:
        </p>
        <div className="mt-3 space-y-2.5">
          <div className="rounded-md border-l-[3px] border-[var(--color-clay)] bg-mat/60 px-4 py-3">
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-[var(--color-clay)]">
              Law — what nature requires
            </span>
            <p className="mt-1 font-serif text-[0.95rem] leading-relaxed text-ink-soft">
              Physics, chemistry, electromagnetics, thermodynamics.
              Newton&apos;s third law is as natural as a nervous system. The
              rover teaches these whether I plan to or not: the motors are an
              electromagnetics course, the battery is thermodynamics, the
              LiDAR is wave optics, the RTK fix is relativity in production.
            </p>
          </div>
          <div className="rounded-md border-l-[3px] border-[var(--color-leaf)] bg-mat/60 px-4 py-3">
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-[var(--color-leaf)]">
              Life — what nature discovered
            </span>
            <p className="mt-1 font-serif text-[0.95rem] leading-relaxed text-ink-soft">
              Biology is a billion years of field-tested engineering{" "}
              <em>within</em>{" "}those laws — the green rows on every
              milestone.
              Ants, place cells, and moth plumes aren&apos;t decoration;
              they&apos;re prior art from the longest-running R&amp;D lab in
              existence.
            </p>
          </div>
        </div>

        <p className="mt-5 font-serif text-[0.95rem] text-ink-muted">
          Progress ledger: every 6–8 weeks, one shipped demo + one journal
          entry. Fourteen entries over two years is the transcript. There is
          no other grade.
        </p>
        <div className="mt-4 rounded-r-md border-l-[3px] border-[var(--color-leaf)] bg-card px-5 py-4">
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-[var(--color-leaf)]">
            Commencement · August 2028
          </span>
          <p className="mt-1 font-serif text-[0.95rem] leading-relaxed text-ink-soft">
            Two robots in the field, fourteen writeups in the journal, and the
            ability to hold my own with a lab PI, a farm director, or a
            robotics CEO — in their language, about their problems.
          </p>
        </div>
      </section>

      {/* Appendix — what got cut */}
      <section className="mx-auto max-w-[68ch] px-6 pb-16 pt-12">
        <details className="group border-t border-line pt-2">
          <summary className="flex cursor-pointer list-none items-baseline gap-3 py-3 [&::-webkit-details-marker]:hidden">
            <span
              className="font-mono text-lg font-bold text-[var(--color-clay)] group-open:hidden"
              aria-hidden
            >
              +
            </span>
            <span
              className="hidden font-mono text-lg font-bold text-[var(--color-clay)] group-open:inline"
              aria-hidden
            >
              −
            </span>
            <span className="font-serif text-xl font-medium text-ink">
              Appendix — what got cut.
            </span>
            <span className="font-serif text-sm italic text-ink-faint">
              a self-issued degree is defined by its rejections
            </span>
          </summary>
          <p className="font-serif text-sm italic text-ink-faint">
            The original AI-drafted plan was a 5,000-hour syllabus sold as a
            1,200-hour one. These didn&apos;t make it.
          </p>
          <div className="mt-4 space-y-2.5 pb-2">
            {CUTS.map((c) => (
              <div
                key={c.title}
                className="rounded-md border border-line-soft bg-card px-4 py-3"
              >
                <span className="block font-serif text-[1.05rem] font-medium text-ink-muted line-through decoration-[var(--color-clay)] decoration-2">
                  {c.title}
                </span>
                <p className="mt-0.5 font-serif text-sm leading-relaxed text-ink-muted">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </details>

        <p className="mt-10 border-t border-line-soft pt-4 font-mono text-[0.7rem] text-ink-faint">
          est. July 2026 · v2, revised July 2026 — resequenced around the
          hardware in hand · designed in conversation with Claude
        </p>
      </section>
    </main>
  );
}

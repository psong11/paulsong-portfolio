import type { PathStop } from "@/content/path";

// One stop per hairline row, mirroring the reading shelf's rhythm: years in
// the mono margin, the stop itself in serif, the lesson set off in moss —
// the timeline reads as a sentence, not a résumé.
function StopRow({ stop }: { stop: PathStop }) {
  const { years, org, role, lesson, detail } = stop;

  return (
    <div className="grid grid-cols-1 gap-1 border-t border-line-soft py-5 last:border-b sm:grid-cols-[7rem_1fr] sm:gap-6">
      <span className="pt-0.5 font-mono text-[0.7rem] tracking-[0.1em] text-ink-faint">
        {years}
      </span>
      <div>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="font-serif text-lg font-semibold text-ink">{org}</span>
          <span className="font-serif text-[0.9rem] italic text-ink-muted">
            {role}
          </span>
          <span className="font-serif text-[0.95rem] font-semibold italic text-leaf sm:ml-auto">
            {lesson}
          </span>
        </div>
        {detail && (
          <p className="mt-1.5 font-mono text-[0.7rem] leading-relaxed text-ink-faint">
            {detail}
          </p>
        )}
      </div>
    </div>
  );
}

export function PathTimeline({ stops }: { stops: PathStop[] }) {
  if (stops.length === 0) return null;

  return (
    <section className="mt-24">
      <header className="max-w-2xl">
        <p className="label">Path</p>
        <h2 className="mt-4 font-serif text-2xl font-medium leading-tight text-ink sm:text-3xl">
          The road so far, and what each stop taught.
        </h2>
      </header>

      <div className="mt-8">
        {stops.map((stop) => (
          <StopRow key={`${stop.years}-${stop.org}`} stop={stop} />
        ))}
      </div>
    </section>
  );
}

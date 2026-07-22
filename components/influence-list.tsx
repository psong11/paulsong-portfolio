import { type Influence } from "@/content/influences";

// Pure typography, like the reading shelf — no posters, no covers. A
// compact grid of title + mono tag; the mix of mediums (films, cartoons,
// games, a card set) is the charm, so each one names its own.
export function InfluenceList({ influences }: { influences: Influence[] }) {
  if (influences.length === 0) return null;

  return (
    <section className="mt-24">
      <header className="max-w-2xl">
        <p className="label">Formative canon</p>
        <h2 className="mt-4 font-serif text-2xl font-medium leading-tight text-ink sm:text-3xl">
          The movies (and shows, and games) that left a mark.
        </h2>
        <p className="mt-3 font-serif text-base leading-relaxed text-ink-muted">
          Kind machines, wild creatures, and tinkerers fixing broken worlds
          with whatever&rsquo;s on hand &mdash; everything I build now was
          rehearsed somewhere in this grid first.
        </p>
      </header>

      <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3">
        {influences.map((influence) => (
          <div key={influence.title}>
            <p className="font-serif text-lg leading-snug text-ink-soft">
              {influence.title}
            </p>
            <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-ink-faint">
              {influence.medium}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

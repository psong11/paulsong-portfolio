/** A day's numbers, before any prose. Facts that were measured, not adjectives. */
export default function EntryStats({ stats }: { stats: [string, string][] }) {
  if (!stats.length) return null;
  return (
    <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 border-y border-line-soft py-5 sm:grid-cols-4">
      {stats.map(([value, label]) => (
        <div key={label}>
          <dt className="font-serif text-xl leading-none text-ink">{value}</dt>
          <dd className="mt-1.5 font-mono text-[10px] uppercase leading-snug tracking-[0.12em] text-ink-faint">
            {label}
          </dd>
        </div>
      ))}
    </dl>
  );
}

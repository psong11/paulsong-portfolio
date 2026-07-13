import type { ToolCluster } from "@/content/toolbox";

// A cluster is a serif name, a mono line of terms, and its receipts. The
// receipts line is the whole point — every claim points back at the work.
function ClusterCard({ cluster }: { cluster: ToolCluster }) {
  const { name, terms, receipts } = cluster;

  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-serif text-lg font-medium text-ink">{name}</h3>
      <p className="font-mono text-[0.72rem] leading-relaxed text-ink-muted">
        {terms.join(" · ")}
      </p>
      <p className="mt-auto pt-1 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-leaf">
        receipts — {receipts.join(" · ")}
      </p>
    </div>
  );
}

export function Toolbox({ clusters }: { clusters: ToolCluster[] }) {
  if (clusters.length === 0) return null;

  return (
    <section className="mt-24">
      <header className="max-w-2xl">
        <p className="label">Toolbox</p>
        <h2 className="mt-4 font-serif text-2xl font-medium leading-tight text-ink sm:text-3xl">
          The tools, with receipts.
        </h2>
        <p className="mt-3 font-serif text-base leading-relaxed text-ink-muted">
          Only what I&rsquo;ve actually shipped with — every cluster points
          back at the work above that proves it.
        </p>
      </header>

      <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {clusters.map((cluster) => (
          <ClusterCard key={cluster.name} cluster={cluster} />
        ))}
      </div>
    </section>
  );
}

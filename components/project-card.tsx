import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";

const STATUS_LABEL: Record<Project["status"], string> = {
  shipped: "Shipped",
  "in progress": "In progress",
  ongoing: "Ongoing",
};

export function ProjectCard({ project }: { project: Project }) {
  const { slug, title, tagline, why, tags, status, accent, journey, liveUrl, linkLabel, thumbnail } =
    project;

  // Where the card points: an internal journey page wins, then an external
  // link (live deployment or repo), otherwise the card isn't yet linked.
  const target = journey
    ? { href: `/${slug}`, label: "Read the build →", external: false }
    : liveUrl
      ? { href: liveUrl, label: linkLabel ?? "View live →", external: true }
      : null;

  const card = (
    <article
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-line-soft bg-card transition-colors duration-300 hover:border-line"
      style={{ ["--accent" as string]: accent }}
    >
      {/* Thumbnail — real image if we have one, else a tinted placeholder */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-mat">
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={`${title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center"
            style={{
              background: `radial-gradient(120% 120% at 30% 20%, ${accent}22, transparent 60%), #f1ecdf`,
            }}
          >
            <span
              className="font-mono text-4xl font-medium lowercase"
              style={{ color: accent }}
            >
              {title.charAt(0)}
            </span>
          </div>
        )}
        <span
          className="absolute left-3 top-3 h-2 w-2 rounded-full"
          style={{ backgroundColor: accent }}
          aria-hidden
        />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h2 className="font-serif text-xl font-medium text-ink">
            {title}
          </h2>
          <span className="label shrink-0">{STATUS_LABEL[status]}</span>
        </div>

        <p className="font-serif text-[0.95rem] leading-snug text-ink-soft">
          {tagline}
        </p>

        <p className="font-serif text-sm leading-relaxed text-ink-muted">
          {why}
        </p>

        <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 pt-2">
          {tags.map((t) => (
            <span key={t} className="font-mono text-[0.7rem] text-ink-faint">
              {t}
            </span>
          ))}
        </div>

        {target && (
          <div className="pt-1">
            <span
              className="font-mono text-[0.72rem] uppercase tracking-[0.15em]"
              style={{ color: accent }}
            >
              {target.label}
            </span>
          </div>
        )}
      </div>
    </article>
  );

  if (!target) return card;

  const className =
    "block h-full rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-leaf";

  return target.external ? (
    <a href={target.href} target="_blank" rel="noopener noreferrer" className={className}>
      {card}
    </a>
  ) : (
    <Link href={target.href} className={className}>
      {card}
    </Link>
  );
}

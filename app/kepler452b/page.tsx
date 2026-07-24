import Link from "next/link";
import Image from "next/image";
import Narrative from "@/content/kepler452b.mdx";
import { KEPLER_GALLERY } from "@/content/kepler452b-gallery";
import { PROJECTS } from "@/content/projects";

const project = PROJECTS.find((p) => p.slug === "kepler452b")!;

export const metadata = {
  title: "kepler452b — the build",
  description:
    "The build journal for kepler452b: solar-powered ESP32 sensor nodes that run cable-free and report their own health — the first hardware layer of a regenerative-farm sensing network.",
};

export default function KeplerJourneyPage() {
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
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: project.accent }}
            aria-hidden
          />
          The Build
        </span>
      </div>

      {/* Build gallery — up front, so the build greets you before the words */}
      <section>
        <div className="mx-auto max-w-[68ch] px-6 pt-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
            Build Gallery
          </p>
          <p className="mt-2 font-serif text-sm text-ink-faint">
            From the farm, the bench, and the balcony — the build, photographed.
          </p>
        </div>

        <div className="mx-auto mt-6 grid max-w-[68ch] grid-cols-1 gap-5 px-6 pb-16 sm:grid-cols-2">
          {KEPLER_GALLERY.map((photo) => (
            <figure key={photo.src} className="flex flex-col">
              <a
                href={photo.src}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-[4/3] overflow-hidden rounded-sm border border-line bg-mat"
              >
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  sizes="(max-width: 640px) 100vw, 320px"
                  className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
              </a>
              <figcaption className="mt-2 font-serif text-sm leading-snug text-ink-muted">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Narrative */}
      <div className="border-t border-line">
        <article className="prose-article mx-auto max-w-[68ch] px-6 pb-24 pt-6">
          <Narrative />
        </article>
      </div>
    </main>
  );
}

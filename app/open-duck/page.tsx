import Link from "next/link";
import Image from "next/image";
import Notes from "@/content/open-duck.mdx";
import { DUCK_GALLERY } from "@/content/open-duck-gallery";
import { PROJECTS } from "@/content/projects";

const project = PROJECTS.find((p) => p.slug === "open-duck")!;

export const metadata = {
  title: "open-duck — the journal",
  description:
    "The operative journal of an Open Duck Mini v2 — fourteen servo joints, a Pi brainstem, a mind trained in simulation: a cyber duck coming to life.",
};

export default function OpenDuckJourneyPage() {
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

      {/* Title + lede */}
      <header className="prose-article mx-auto max-w-[68ch] px-6">
        <h1>open-duck — the journal</h1>
        <p>
          An Open Duck Mini v2 on the operating table: fourteen servo joints
          for anatomy, a Raspberry Pi brainstem in its head, a vascular system
          of solder and heat-shrink — and a mind, trained a few million falls
          at a time in simulation, waiting to be transplanted. The operative
          journal of bringing a cyber duck to life.
        </p>
      </header>

      {/* Build gallery — under the title, before the words */}
      <section>
        <div className="mx-auto max-w-[68ch] px-6 pt-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
            Build Gallery
          </p>
          <p className="mt-2 font-serif text-sm text-ink-faint">
            Phase 1 — giving it a body, photographed as it happens.
          </p>
        </div>

        <div className="mx-auto mt-6 grid max-w-[68ch] grid-cols-1 gap-5 px-6 pb-16 sm:grid-cols-2">
          {DUCK_GALLERY.map((photo) => (
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

      {/* Raw notes */}
      <div className="border-t border-line">
        <article className="prose-article mx-auto max-w-[68ch] px-6 pb-24 pt-6">
          <h2>Raw notes from the bench</h2>
          <Notes />
        </article>
      </div>
    </main>
  );
}

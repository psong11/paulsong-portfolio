import Link from "next/link";
import Image from "next/image";

import Preamble from "@/content/journal/_preamble.mdx";
import Retrospective from "@/content/open-duck-retrospective.mdx";
import Entry0830 from "@/content/journal/2026-08-30.mdx";
import Entry0828 from "@/content/journal/2026-08-28.mdx";
import Entry0815 from "@/content/journal/2026-08-15.mdx";
import Entry0814 from "@/content/journal/2026-08-14.mdx";

import DuckPowerFigures from "@/components/duck-power-figures";
import JournalNav, { type NavSection } from "@/components/journal-nav";
import { JOURNAL, entryLabel } from "@/content/open-duck-journal";
import { photosFor } from "@/content/open-duck-gallery";
import { PROJECTS } from "@/content/projects";

const project = PROJECTS.find((p) => p.slug === "open-duck")!;

const BODIES: Record<string, React.ComponentType> = {
  "2026-08-30": Entry0830,
  "2026-08-28": Entry0828,
  "2026-08-15": Entry0815,
  "2026-08-14": Entry0814,
};

const SECTIONS: NavSection[] = [
  { id: "status", label: "Where it stands" },
  { id: "retrospective", label: "What the build taught me" },
  ...JOURNAL.map((e) => ({
    id: e.date,
    label: entryLabel(e.date),
    sub: e.title,
  })),
];

/** Facts, not adjectives — each one is something that was measured. */
const STATUS = [
  ["Phase 2", "borrowed brain"],
  ["14 / 14", "motors on one bus"],
  ["2 of 14", "joints needed offsets"],
  ["0", "steps taken"],
];

export const metadata = {
  title: "open-duck — the journal",
  description:
    "The operative journal of an Open Duck Mini v2 — fourteen servo joints, a Pi brainstem, a mind trained in simulation: a cyber duck coming to life.",
};

export default function OpenDuckJourneyPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto flex max-w-[92rem] items-center justify-between gap-4 px-6 pt-12 pb-2 sm:pt-16">
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

      <header className="prose-article mx-auto max-w-[68ch] px-6">
        <h1>open-duck — the journal</h1>
        <p>
          An Open Duck Mini v2 on the operating table: fourteen servo joints for
          anatomy, a Raspberry Pi brainstem in its head, a vascular system of
          solder and heat-shrink — and a mind, trained a few million falls at a
          time in simulation, waiting to be transplanted. The operative journal
          of bringing a cyber duck to life.
        </p>
      </header>

      {/* Contents beside the log on wide screens, a rail above it on narrow */}
      <div className="mx-auto mt-10 grid max-w-[92rem] grid-cols-1 gap-x-12 px-6 lg:grid-cols-[13rem_minmax(0,68ch)] lg:justify-center">
        <div className="border-b border-line-soft pb-4 lg:border-b-0 lg:pb-0">
          <JournalNav sections={SECTIONS} />
        </div>

        <div className="min-w-0">
          {/* Where it stands — the first thing a returning reader needs */}
          <section id="status" className="scroll-mt-8 pt-8 lg:pt-0">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
              Where it stands
            </h2>
            <dl className="mt-4 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
              {STATUS.map(([v, k]) => (
                <div key={k}>
                  <dt className="font-serif text-2xl leading-none text-ink">{v}</dt>
                  <dd className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-faint">
                    {k}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="prose-article mt-6">
              <p>
                The body is finished and answers to its name. Every joint is
                calibrated, the IMU is oriented, both hip horns are corrected in
                servo firmware, and the controller is paired. The policy is
                staged and has never run.
              </p>
              <p>
                <strong>Blocking:</strong> power, and now measured rather than
                guessed. Standing costs more current than the pack can deliver —
                at a gain low enough to survive, the duck can&rsquo;t hold itself
                up; at the gain that holds it up, the sag kills the Pi four
                seconds into start-up. Two overnight charges both stopped at
                7.8&nbsp;V against a full-charge 8.4. Next: the charger, then the
                first step.
              </p>
            </div>
          </section>

          <section id="retrospective" className="mt-16 scroll-mt-8 border-t border-line pt-10">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
              What the build taught me
            </h2>
            <div className="prose-article mt-4">
              <Retrospective />
            </div>
          </section>

          {/* The log — newest first */}
          <section className="mt-16 border-t border-line pt-10">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
              The log
            </h2>
            <div className="prose-article mt-3 text-sm">
              <Preamble />
            </div>

            {JOURNAL.map((entry) => {
              const Body = BODIES[entry.date];
              const photos = photosFor(entry.date);
              return (
                <article
                  key={entry.date}
                  id={entry.date}
                  className="mt-14 scroll-mt-8 border-t border-line-soft pt-8 first:border-t-0"
                >
                  <h3 className="font-serif text-xl text-ink">
                    <span className="font-mono text-sm text-ink-faint">
                      {entry.date}
                    </span>
                    <span className="mt-1 block">{entry.title}</span>
                  </h3>

                  {photos.length > 0 && (
                    <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                      {photos.map((photo) => (
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
                  )}

                  <div className="prose-article mt-6">
                    <Body />
                  </div>

                  {entry.figures && <DuckPowerFigures />}
                </article>
              );
            })}
          </section>

          <div className="h-24" />
        </div>
      </div>
    </main>
  );
}

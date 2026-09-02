import Link from "next/link";

import Preamble from "@/content/journal/_preamble.mdx";
import Retrospective from "@/content/open-duck-retrospective.mdx";

import Entry0831 from "@/content/journal/2026-08-31.mdx";
import Entry0830 from "@/content/journal/2026-08-30.mdx";
import Entry0828 from "@/content/journal/2026-08-28.mdx";
import Entry0815 from "@/content/journal/2026-08-15.mdx";
import Entry0814 from "@/content/journal/2026-08-14.mdx";

import Lessons0831 from "@/content/journal/2026-08-31-lessons.mdx";
import Lessons0830 from "@/content/journal/2026-08-30-lessons.mdx";
import Lessons0828 from "@/content/journal/2026-08-28-lessons.mdx";
import Lessons0814 from "@/content/journal/2026-08-14-lessons.mdx";

import DuckPowerFigures from "@/components/duck-power-figures";
import DuckDirectionFigure from "@/components/duck-direction-figure";
import PhotoGallery from "@/components/photo-gallery";
import EntryStats from "@/components/entry-stats";
import JournalNav, { type NavSection } from "@/components/journal-nav";
import { JOURNAL, entryLabel } from "@/content/open-duck-journal";
import { photosFor, DUCK_NOW } from "@/content/open-duck-gallery";
import { PROJECTS } from "@/content/projects";

const project = PROJECTS.find((p) => p.slug === "open-duck")!;

const BODIES: Record<string, React.ComponentType> = {
  "2026-08-31": Entry0831,
  "2026-08-30": Entry0830,
  "2026-08-28": Entry0828,
  "2026-08-15": Entry0815,
  "2026-08-14": Entry0814,
};

const LESSONS: Record<string, React.ComponentType> = {
  "2026-08-31": Lessons0831,
  "2026-08-30": Lessons0830,
  "2026-08-28": Lessons0828,
  "2026-08-14": Lessons0814,
};

const SECTIONS: NavSection[] = [
  { id: "status", label: "Where it stands" },
  { id: "retrospective", label: "What the build taught me" },
  ...JOURNAL.map((e) => ({ id: e.date, label: entryLabel(e.date), sub: e.title })),
];

const STATUS = [
  ["Phase 2", "borrowed brain"],
  ["14 / 14", "motors on one bus"],
  ["62 s", "longest walk so far"],
  ["1", "minus sign"],
];

export const metadata = {
  title: "ezer — an Open Duck Mini v2",
  description:
    "Fourteen servo joints, a Raspberry Pi where a brainstem would be, and a mind trained across thousands of simulated falls. The operative journal of building a cyber duck.",
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
      {children}
    </h2>
  );
}

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

      <header className="mx-auto max-w-[68ch] px-6">
        <h1 className="font-serif text-5xl lowercase tracking-tight text-ink sm:text-6xl">
          ezer
        </h1>
        <div className="prose-article mt-6">
          <p>
            An <strong>Open Duck Mini v2</strong> — an open-source BDX droid,
            about the height of a house cat, built from a kit over a lot of
            nights.
          </p>
          <p>
            Its anatomy is fourteen servo joints, a harness of wires threaded one
            correct path at a time, 3D-printed bone, heat-set inserts soldered
            into plastic, and the silicon in its head. Where a brainstem would
            be, a Raspberry Pi: not thinking, exactly — holding balance, sensing
            which way is down, running the involuntary competences a newborn has
            before it has anything else.
          </p>
          <p>
            And it has a <strong>mind</strong>. Not waiting to be transplanted —
            already inside, already running. A policy whose weights were shaped
            by thousands of simulated falls on a machine far from this room, now
            downloaded into a computer the size of a stick of gum, meeting
            gravity for the first time.
          </p>
        </div>
        {/* Where it is right now, before any of the history */}
        <div className="mt-10">
          <PhotoGallery photos={DUCK_NOW} columns="grid-cols-3" />
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint">
            Tonight, between walk attempts
          </p>
        </div>
      </header>

      <div className="mx-auto mt-12 grid max-w-[92rem] grid-cols-1 gap-x-12 px-6 lg:grid-cols-[13rem_minmax(0,68ch)] lg:justify-center">
        <div className="border-b border-line-soft pb-4 lg:border-b-0 lg:pb-0">
          <JournalNav sections={SECTIONS} />
        </div>

        <div className="min-w-0">
          <section id="status" className="scroll-mt-8 pt-8 lg:pt-0">
            <SectionLabel>Where it stands</SectionLabel>
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
                The body is finished and answers to its name, and as of 31 August
                it walks — wobbling, face-first, for about a minute at a time.
              </p>
              <p>
                It spent four days unable to stand at all. The diagnosis was
                wrong five times, and the answer turned out to be that two joints
                were mounted mirrored, so every command turned them the wrong
                way. A sign, not a setting — which is why nothing that shifted a
                number ever helped.
              </p>
              <p>
                <strong>Now:</strong> tuning rather than repair. Gain, balance
                trim, and a battery that finally has real work to pay for.
              </p>
            </div>
          </section>

          <section id="retrospective" className="mt-16 scroll-mt-8 border-t border-line pt-10">
            <SectionLabel>What the build taught me</SectionLabel>
            <div className="prose-article mt-4">
              <Retrospective />
            </div>
          </section>

          <section className="mt-16 border-t border-line pt-10">
            <SectionLabel>The log</SectionLabel>
            <div className="prose-article mt-3 text-sm">
              <Preamble />
            </div>

            {JOURNAL.map((entry) => {
              const Body = BODIES[entry.date];
              const LessonBody = entry.lessons ? LESSONS[entry.date] : null;
              const photos = photosFor(entry.date);
              return (
                <article
                  key={entry.date}
                  id={entry.date}
                  className="mt-16 scroll-mt-8 border-t border-line-soft pt-8 first:border-t-0"
                >
                  <h3 className="font-serif text-xl text-ink">
                    <span className="font-mono text-sm text-ink-faint">{entry.date}</span>
                    <span className="mt-1 block">{entry.title}</span>
                  </h3>

                  {/* 1. look at it */}
                  {photos.length > 0 && (
                    <div className="mt-6">
                      <PhotoGallery photos={photos} />
                    </div>
                  )}

                  {/* 2. the numbers */}
                  {entry.stats && <EntryStats stats={entry.stats} />}

                  {/* 3. what happened, in my words */}
                  <div className="prose-article mt-6">
                    <Body />
                  </div>

                  {/* 4. what it taught me */}
                  {LessonBody && (
                    <aside className="mt-8 border-l-2 border-[var(--color-leaf)] bg-mat/50 px-5 py-4">
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">
                        Worth keeping
                      </p>
                      <div className="prose-article mt-2 text-sm">
                        <LessonBody />
                      </div>
                    </aside>
                  )}

                  {/* 5. the evidence, for anyone who wants it */}
                  {entry.figures && <DuckPowerFigures />}
                  {entry.direction && <DuckDirectionFigure />}
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

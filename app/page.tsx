import Image from "next/image";
import { PROJECTS } from "@/content/projects";
import { PATH } from "@/content/path";
import { COMMUNITY } from "@/content/community";
import { TOOLBOX } from "@/content/toolbox";
import { ART } from "@/content/art";
import { FILMS } from "@/content/films";
import { BOOKS } from "@/content/books";
import { INFLUENCES } from "@/content/influences";
import { NOW, NOW_READING } from "@/content/now";
import { ProjectCard } from "@/components/project-card";
import { PathTimeline } from "@/components/path-timeline";
import { CommunitySection } from "@/components/community-section";
import { Toolbox } from "@/components/toolbox";
import { ArtGallery } from "@/components/art-gallery";
import { FilmGallery } from "@/components/film-gallery";
import { ReadingShelf } from "@/components/reading-shelf";
import { InfluenceList } from "@/components/influence-list";
import { GradSchoolNote } from "@/components/grad-school-note";

export default function HomePage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 pb-20 pt-10 sm:pb-28 sm:pt-12">
      {/* Masthead — name, thesis, and paragraph stacked left; contact links
          pinned to the photo's bottom edge, per the notebook sketch */}
      <header className="mt-2 flex flex-col-reverse gap-8 sm:mt-4 sm:flex-row sm:items-stretch sm:justify-between sm:gap-10">
        <div className="flex max-w-2xl flex-col sm:justify-between">
          <div>
            <h1 className="font-serif text-4xl font-medium leading-[1.05] tracking-tight text-ink sm:text-5xl">
              <span className="inline-block border-b-[3px] border-ink pb-1.5">
                Paul Song
              </span>
            </h1>
            <p className="mt-6 font-serif text-2xl font-medium tracking-tight text-ink sm:text-[1.75rem]">
              Old systems, made new.
            </p>
            <p className="mt-5 font-serif text-lg leading-relaxed text-ink-muted">
              Farms, gas lines, paper archives, ancient languages, membership
              desks — I take infrastructure people depend on and rebuild it
              with AI, sensors, and whatever tool the problem asks for. Each
              project below started with a real problem and a person it
              mattered to.
            </p>
            {/* The "Now" block — a dated field-note filling the hero's quiet
                middle: where I am, what I'm building, what I'm reading. */}
            <dl className="mt-9 space-y-2.5">
              {(
                [
                  // The trail before Bentonville fades back; where I am now
                  // arrives in full ink — coast to coast to heartland.
                  [
                    "Now",
                    <>
                      <span className="text-ink-faint">
                        {NOW.wayback.map((place) => `${place} → `).join("")}
                      </span>
                      <span className="text-ink">{NOW.now}</span>
                    </>,
                  ],
                  ["Building", NOW.building],
                  ["Reading", NOW_READING],
                ] as [string, React.ReactNode][]
              )
                .filter(([, value]) => value)
                .map(([label, value]) => (
                  <div
                    key={label}
                    className="grid grid-cols-[6.5rem_1fr] items-baseline gap-x-4"
                  >
                    <dt className="label !text-leaf">{label}</dt>
                    <dd className="m-0 font-serif text-[0.98rem] italic text-ink-muted">
                      {value}
                    </dd>
                  </div>
                ))}
            </dl>
          </div>
          <nav
            aria-label="Contact"
            className="mt-8 flex gap-5 font-mono text-[0.7rem] uppercase tracking-[0.15em] sm:mt-0"
          >
            <a
              href="https://github.com/psong11"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-faint transition-colors hover:text-leaf"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/paulsong24/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-faint transition-colors hover:text-leaf"
            >
              LinkedIn
            </a>
            <a
              href="mailto:paulsong24@gmail.com"
              className="text-ink-faint transition-colors hover:text-leaf"
            >
              Email
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-faint transition-colors hover:text-leaf"
            >
              Resume
            </a>
          </nav>
        </div>
        <Image
          src="/paul-grad-portrait.jpg"
          alt="Paul Song at Harvard commencement — smiling in cap and gown in front of a crimson Veritas banner."
          width={1018}
          height={1600}
          priority
          sizes="(max-width: 640px) 90vw, 288px"
          className="w-60 shrink-0 self-start rounded-lg border border-line object-cover sm:w-72 sm:self-auto"
        />
      </header>

      {/* Project grid */}
      <section className="mt-16">
        <p className="label">Selected work</p>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* Path */}
      <PathTimeline stops={PATH} />

      {/* Serving and building community */}
      <CommunitySection entries={COMMUNITY} />

      {/* Toolbox */}
      <Toolbox clusters={TOOLBOX} />

      {/* Away from the screen — the quiet second half */}
      <div className="mt-28 flex items-center gap-4">
        <span className="label">Away from the screen</span>
        <span className="h-px flex-1 bg-line-soft" aria-hidden />
      </div>

      {/* Visual art */}
      <ArtGallery pieces={ART} />

      {/* Stop-motion films */}
      <FilmGallery films={FILMS} />

      {/* Reading */}
      <ReadingShelf books={BOOKS} />

      {/* Formative canon — the fun one */}
      <InfluenceList influences={INFLUENCES} />

      {/* Currently enrolled — a program, not a project */}
      <GradSchoolNote />

      {/* Footer */}
      <footer className="mt-24 border-t border-line-soft pt-6">
        <p className="label">
          {PROJECTS.length} projects · more in the works
        </p>
      </footer>
    </main>
  );
}

import Image from "next/image";
import { PROJECTS } from "@/content/projects";
import { PATH } from "@/content/path";
import { TOOLBOX } from "@/content/toolbox";
import { ART } from "@/content/art";
import { FILMS } from "@/content/films";
import { BOOKS } from "@/content/books";
import { ProjectCard } from "@/components/project-card";
import { PathTimeline } from "@/components/path-timeline";
import { Toolbox } from "@/components/toolbox";
import { ArtGallery } from "@/components/art-gallery";
import { FilmGallery } from "@/components/film-gallery";
import { ReadingShelf } from "@/components/reading-shelf";

export default function HomePage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-20 sm:py-28">
      {/* Name tag — the page's letterhead, a unit of its own */}
      <header>
        <h1 className="font-serif text-4xl font-medium leading-[1.05] tracking-tight text-ink sm:text-5xl">
          <span className="inline-block border-b-[3px] border-ink pb-1.5">
            Paul Song
          </span>
        </h1>
      </header>

      {/* Thesis — the meat: statement and paragraph as one cohesive unit */}
      <section className="mt-12 flex flex-col-reverse gap-8 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
        <div className="max-w-2xl">
          <h2 className="font-serif text-2xl font-medium tracking-tight text-ink sm:text-[1.75rem]">
            Old systems, made new.
          </h2>
          <p className="mt-3 font-serif text-lg leading-relaxed text-ink-muted">
            Farms, gas lines, paper archives, ancient languages, membership
            desks — I take infrastructure people depend on and rebuild it with
            AI, sensors, and whatever tool the problem asks for. Each project
            below started with a real problem and a person it mattered to.
          </p>
        </div>
        <Image
          src="/paul-grad-portrait.jpg"
          alt="Paul Song at Harvard commencement — smiling in cap and gown in front of a crimson Veritas banner."
          width={1018}
          height={1600}
          priority
          sizes="(max-width: 640px) 60vw, 200px"
          className="w-40 shrink-0 self-start rounded-lg border border-line object-cover sm:w-48 sm:self-auto"
        />
      </section>

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

      {/* Footer */}
      <footer className="mt-24 flex flex-wrap items-baseline justify-between gap-4 border-t border-line-soft pt-6">
        <p className="label">
          {PROJECTS.length} projects · more in the works
        </p>
        <p className="flex gap-5 font-mono text-[0.7rem] uppercase tracking-[0.15em]">
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
        </p>
      </footer>
    </main>
  );
}

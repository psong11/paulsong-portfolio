import Image from "next/image";
import { PROJECTS } from "@/content/projects";
import { ART } from "@/content/art";
import { FILMS } from "@/content/films";
import { BOOKS } from "@/content/books";
import { ProjectCard } from "@/components/project-card";
import { ArtGallery } from "@/components/art-gallery";
import { FilmGallery } from "@/components/film-gallery";
import { ReadingShelf } from "@/components/reading-shelf";

export default function HomePage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-20 sm:py-28">
      {/* Masthead */}
      <header className="flex flex-col-reverse gap-8 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
        <div className="max-w-2xl">
          <p className="label">Paul Song · selected work</p>
          <h1 className="mt-4 font-serif text-4xl font-medium leading-[1.05] tracking-tight text-slate-50 sm:text-5xl">
            Building where technology meets the living world.
          </h1>
          <p className="mt-5 font-serif text-lg leading-relaxed text-slate-400">
            I build systems at the seam of software and the physical world —
            farms and sensors, scripture and infrastructure, and the living
            things in between. Each project below started with a real problem
            and a person it mattered to.
          </p>
        </div>
        <Image
          src="/paul-portrait.jpg"
          alt="Paul Song — a motion-blurred portrait in front of white spring blossoms."
          width={1200}
          height={1800}
          priority
          sizes="(max-width: 640px) 60vw, 200px"
          className="w-40 shrink-0 self-start rounded-lg border border-slate-800 object-cover sm:w-48 sm:self-auto"
        />
      </header>

      {/* Project grid */}
      <section className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>

      {/* Visual art */}
      <ArtGallery pieces={ART} />

      {/* Stop-motion films */}
      <FilmGallery films={FILMS} />

      {/* Reading */}
      <ReadingShelf books={BOOKS} />

      {/* Footer */}
      <footer className="mt-24 border-t border-slate-800 pt-6">
        <p className="label">
          {PROJECTS.length} projects · more in the works
        </p>
      </footer>
    </main>
  );
}

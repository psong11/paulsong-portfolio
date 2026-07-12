import type { Film } from "@/content/films";

// Native <video> with a poster and controls — click to play. preload="none"
// so the 8MB clip isn't fetched until wanted. Art films keep their audio.
function FilmCard({ film }: { film: Film }) {
  const { title, src, poster, medium, silent } = film;

  return (
    <figure className="flex flex-col">
      <video
        controls
        preload="none"
        poster={poster}
        aria-label={title}
        className="aspect-video w-full rounded-lg border border-slate-800 bg-black"
      >
        <source src={src} type="video/mp4" />
      </video>

      <figcaption className="mt-3 flex items-baseline justify-between gap-3">
        <span className="font-serif text-[0.95rem] italic text-slate-300">
          {title}
        </span>
        {silent && <span className="label shrink-0">silent</span>}
      </figcaption>
      <p className="mt-1 font-mono text-[0.7rem] text-slate-500">{medium}</p>
    </figure>
  );
}

export function FilmGallery({ films }: { films: Film[] }) {
  if (films.length === 0) return null;

  return (
    <section className="mt-24">
      <header className="max-w-2xl">
        <p className="label">Stop-motion</p>
        <h2 className="mt-4 font-serif text-2xl font-medium leading-tight text-slate-50 sm:text-3xl">
          Frame by frame, by hand.
        </h2>
        <p className="mt-3 font-serif text-base leading-relaxed text-slate-400">
          Two short films from a stop-motion animation class in Harvard&rsquo;s
          Art, Film &amp; Visual Studies department, spring 2023.
        </p>
      </header>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2">
        {films.map((film) => (
          <FilmCard key={film.slug} film={film} />
        ))}
      </div>
    </section>
  );
}

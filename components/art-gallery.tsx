import Image from "next/image";
import type { ArtPiece } from "@/content/art";

// Each piece is matted on a warm off-white ground so its cream paper reads as
// an intentional gallery mat against the night-sky palette, then captioned in
// the site's own type system. Untitled pieces say so, quietly.
function ArtCard({ piece }: { piece: ArtPiece }) {
  const { src, alt, title, medium, year, width, height } = piece;

  return (
    <figure className="flex flex-col">
      <div className="overflow-hidden rounded-lg border border-slate-800 bg-[#f4f1e9] p-3 shadow-[0_1px_2px_rgba(0,0,0,0.4)] sm:p-4">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="h-auto w-full rounded-sm"
        />
      </div>

      <figcaption className="mt-3 flex items-baseline justify-between gap-3">
        <span className="font-serif text-[0.95rem] italic text-slate-300">
          {title ?? "Untitled"}
        </span>
        {year && <span className="label shrink-0">{year}</span>}
      </figcaption>
      <p className="mt-1 font-mono text-[0.7rem] text-slate-500">{medium}</p>
    </figure>
  );
}

export function ArtGallery({ pieces }: { pieces: ArtPiece[] }) {
  if (pieces.length === 0) return null;

  return (
    <section className="mt-24">
      <header className="max-w-2xl">
        <p className="label">Visual art</p>
        <h2 className="mt-4 font-serif text-2xl font-medium leading-tight text-slate-50 sm:text-3xl">
          Made by hand, away from the screen.
        </h2>
        <p className="mt-3 font-serif text-base leading-relaxed text-slate-400">
          Ink and marker on paper — the same restless looking that runs through
          the work above, just with nothing plugged in.
        </p>
      </header>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {pieces.map((piece) => (
          <ArtCard key={piece.id} piece={piece} />
        ))}
      </div>
    </section>
  );
}

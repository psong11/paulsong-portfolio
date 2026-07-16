import Image from "next/image";
import type { ArtPiece } from "@/content/art";
import { ArtStack } from "@/components/art-stack";

// Each piece is matted on a near-white sheet so it reads as an intentional
// gallery mat hung on the paper ground, then captioned in the site's own
// type system. Untitled pieces say so, quietly.
function ArtCard({ piece }: { piece: ArtPiece }) {
  const { src, alt, title, medium, year, width, height, behind } = piece;

  const mat =
    "rounded-lg border border-line bg-[#fffdf8] p-3 shadow-[0_1px_3px_rgba(31,27,22,0.08)] sm:p-4";
  const sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw";

  // Two photos stack like cards: offset at rest, fanning open on hover, and
  // shuffling on click — state lives in the ArtStack client component.
  const image = behind ? (
    <ArtStack
      photos={[
        { src, alt },
        { src: behind.src, alt: behind.alt },
      ]}
      aspectRatio={width / height}
      sizes={sizes}
      matClass={mat}
    />
  ) : (
    // Same fixed-aspect box model as the stacks: the mat spans the box and
    // the image cover-fills inside it, so a row's cards all resolve to
    // exactly columnWidth / aspect — flush, justified rows. Costs a few
    // pixels of cover-crop at the mat's padding, nothing more. The ratio
    // lives on a padding-free box with the mat absolute inside it (like
    // ArtStack's button): WebKit sizes aspect-ratio from the full width even
    // with border-box padding, which would leave padded mats ~34px taller
    // than the stacks and break the flush rows.
    <div className="relative" style={{ aspectRatio: width / height }}>
      <div className={`absolute inset-0 ${mat}`}>
        <div className="relative h-full w-full overflow-hidden rounded-sm">
          <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
        </div>
      </div>
    </div>
  );

  return (
    <figure className="flex flex-col">
      {image}

      <figcaption className="mt-3 flex items-baseline justify-between gap-3">
        <span className="font-serif text-[0.95rem] italic text-ink-soft">
          {title ?? "Untitled"}
        </span>
        {year && <span className="label shrink-0">{year}</span>}
      </figcaption>
      <p className="mt-1 font-mono text-[0.7rem] text-ink-faint">{medium}</p>
    </figure>
  );
}

// How many pieces share a wall row. Order in content/art.ts is the hanging
// order, read left to right, row by row.
const ROW_SIZE = 3;

export function ArtGallery({ pieces }: { pieces: ArtPiece[] }) {
  if (pieces.length === 0) return null;

  // Justified collage: pieces fill rows of three, and each column's width is
  // proportional to its piece's aspect ratio — so every image keeps its true
  // proportions, all images in a row land at exactly the same height, and the
  // row runs flush edge to edge. No crops, no orphan cells, no dead space.
  //
  // Rows are flex, not grid: WebKit sizes aspect-ratio boxes inside fr grid
  // tracks by their intrinsic contributions, breaking the proportional column
  // widths (Safari showed mismatched row heights and a collapsed first card).
  // flex-grow ∝ aspect with basis-0/min-w-0 is the same math, sized
  // deterministically in every engine.
  const rows: ArtPiece[][] = [];
  for (let i = 0; i < pieces.length; i += ROW_SIZE) {
    rows.push(pieces.slice(i, i + ROW_SIZE));
  }

  return (
    <section className="mt-24">
      <header className="max-w-2xl">
        <p className="label">Visual art</p>
        <h2 className="mt-4 font-serif text-2xl font-medium leading-tight text-ink sm:text-3xl">
          Made by hand, away from the screen.
        </h2>
        <p className="mt-3 font-serif text-base leading-relaxed text-ink-muted">
          Ink and marker on paper — the same restless looking that runs through
          the work above, just with nothing plugged in.
        </p>
      </header>

      <div className="mt-10 flex flex-col gap-10">
        {rows.map((row) => (
          <div
            key={row[0].id}
            className="flex flex-col gap-y-10 sm:flex-row sm:items-start sm:gap-x-6"
          >
            {row.map((piece) => (
              <div
                key={piece.id}
                className="sm:min-w-0 sm:basis-0"
                style={{ flexGrow: piece.width / piece.height }}
              >
                <ArtCard piece={piece} />
              </div>
            ))}
            {/* A short final row would stretch its pieces huge; an empty
                spacer keeps them near full-row scale. */}
            {row.length < ROW_SIZE && (
              <div aria-hidden className="hidden grow sm:block sm:basis-0" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

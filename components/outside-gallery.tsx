import Image from "next/image";
import type { OutsidePhoto } from "@/content/outside";

// A loose photo wall — CSS multi-columns so every photo keeps its natural
// proportions and the wall packs itself, like prints taped up in a stairwell.
// No mats, no captions: these are snapshots, not gallery pieces.
export function OutsideGallery({ photos }: { photos: OutsidePhoto[] }) {
  if (photos.length === 0) return null;

  return (
    <section className="mt-24">
      <header className="max-w-2xl">
        <p className="label">Outside</p>
        <h2 className="mt-4 font-serif text-2xl font-medium leading-tight text-ink sm:text-3xl">
          I love exploring new places and learning new systems.
        </h2>
        <p className="mt-3 font-serif text-base leading-relaxed text-ink-muted">
          From hiking Ozark bluffs, catching trout on the White River, and
          foraging morels on the forest floor to learning about supply chain
          logistics and hydroponics, it is incredible how technology has also
          evolved alongside natural systems.
        </p>
      </header>

      <div className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-3">
        {photos.map((photo) => (
          <figure key={photo.id} className="mb-6 break-inside-avoid">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="h-auto w-full rounded-lg border border-line"
            />
            <figcaption className="mt-1.5 font-mono text-[0.68rem] leading-relaxed text-ink-faint">
              {photo.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

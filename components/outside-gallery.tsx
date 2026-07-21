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
          I love being in nature.
        </h2>
        <p className="mt-3 font-serif text-base leading-relaxed text-ink-muted">
          Ozark bluffs, foggy trout water, morels on the forest floor, caves,
          slopes — and the tractors, cranes, and grow towers people plant in
          it. The oldest running system, still the one that teaches me most.
        </p>
      </header>

      <div className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-3">
        {photos.map((photo) => (
          <Image
            key={photo.id}
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="mb-6 h-auto w-full break-inside-avoid rounded-lg border border-line"
          />
        ))}
      </div>
    </section>
  );
}

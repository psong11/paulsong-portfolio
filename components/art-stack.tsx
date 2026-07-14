"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Photo = { src: string; alt: string };

// A small stack of photos behaving like held cards: offset at rest, fanning
// open on hover, and shuffling on click — the front card slides out, tucks
// underneath, and the one behind settles forward. The box keeps one fixed
// aspect (the lead photo's), with every photo cropped to cover it, so
// mismatched orientations still stack cleanly.
export function ArtStack({
  photos,
  aspectRatio,
  sizes,
  matClass,
}: {
  photos: Photo[];
  aspectRatio: number;
  sizes: string;
  matClass: string;
}) {
  const [front, setFront] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const shuffle = () => {
    if (leaving || photos.length < 2) return;
    setLeaving(true);
    // Phase one: the front card slides clear of the stack. Phase two (after
    // the swap below): it glides back in underneath while the next card
    // settles into the front slot.
    timer.current = window.setTimeout(() => {
      setFront((f) => (f + 1) % photos.length);
      setLeaving(false);
    }, 220);
  };

  return (
    <button
      type="button"
      onClick={shuffle}
      aria-label="Shuffle to the photo behind"
      className="group relative block w-full cursor-pointer rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-leaf"
      style={{ aspectRatio }}
    >
      {photos.map((photo, i) => {
        const isFront = i === front;
        const pos = isFront
          ? leaving
            ? "z-10 translate-x-[45%] rotate-6"
            : "z-10 group-hover:-translate-x-1.5 group-hover:-rotate-[1.5deg]"
          : "z-0 translate-x-2.5 translate-y-2 rotate-[1.5deg] group-hover:translate-x-5 group-hover:translate-y-3 group-hover:rotate-[4deg]";
        return (
          <div
            key={photo.src}
            className={`absolute inset-0 transition-transform duration-300 ease-out motion-reduce:transition-none ${matClass} ${pos}`}
          >
            <div className="relative h-full w-full overflow-hidden rounded-sm">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={sizes}
                className="object-cover"
              />
            </div>
          </div>
        );
      })}
    </button>
  );
}

"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import type { GalleryPhoto } from "@/content/open-duck-gallery";

/**
 * Thumbnails that open into a lightbox. Small on the page so a whole day's
 * photographs read as one strip, large when you want to actually look at one.
 */
export default function PhotoGallery({ photos }: { photos: GalleryPhoto[] }) {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (d: number) =>
      setOpen((i) => (i === null ? null : (i + d + photos.length) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    // The page behind must not scroll while the overlay is up.
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close, step]);

  if (photos.length === 0) return null;
  const active = open === null ? null : photos[open];

  return (
    <>
      <ul className="grid grid-cols-3 gap-2 sm:grid-cols-4">
        {photos.map((photo, i) => (
          <li key={photo.src}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`Expand: ${photo.caption}`}
              className="group relative block aspect-square w-full overflow-hidden rounded-sm border border-line bg-mat"
            >
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                sizes="(max-width: 640px) 33vw, 160px"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
              />
            </button>
          </li>
        ))}
      </ul>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          onClick={close}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[rgba(20,17,12,0.88)] p-4 sm:p-10"
        >
          <div
            className="relative flex max-h-full w-full max-w-4xl flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative mx-auto max-h-[75vh] w-full">
              <Image
                src={active.src}
                alt={active.caption}
                width={1600}
                height={1200}
                sizes="(max-width: 900px) 100vw, 900px"
                className="mx-auto h-auto max-h-[75vh] w-auto rounded-sm object-contain"
              />
            </div>
            <div className="mt-4 flex items-start justify-between gap-6">
              <p className="font-serif text-sm leading-snug text-[#efe9dc]">
                {active.caption}
              </p>
              <span className="shrink-0 font-mono text-[11px] tabular-nums text-[#b9b1a0]">
                {open! + 1} / {photos.length}
              </span>
            </div>
            {photos.length > 1 && (
              <div className="mt-3 flex gap-2">
                <button type="button" onClick={() => step(-1)} aria-label="Previous photo"
                  className="rounded-sm border border-[#5a5346] px-3 py-1 font-mono text-[11px] text-[#efe9dc] hover:border-[#8d8574]">
                  ←
                </button>
                <button type="button" onClick={() => step(1)} aria-label="Next photo"
                  className="rounded-sm border border-[#5a5346] px-3 py-1 font-mono text-[11px] text-[#efe9dc] hover:border-[#8d8574]">
                  →
                </button>
              </div>
            )}
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 rounded-sm border border-[#5a5346] px-3 py-1 font-mono text-[11px] text-[#efe9dc] hover:border-[#8d8574]"
          >
            Esc
          </button>
        </div>
      )}
    </>
  );
}

// Single source of truth for the stop-motion films. Same idea as art.ts —
// add an entry and a film appears. Each renders as a poster + native player
// (click to play); art films keep their sound, so no autoplay.

export type Film = {
  slug: string;
  title: string;
  /** Path under /public. */
  src: string;
  /** Poster frame under /public, shown before play. */
  poster: string;
  /** Materials / running time, e.g. "Clay puppets · 1:18". */
  medium: string;
  /** True if the piece has no soundtrack. */
  silent?: boolean;
  /** Optional behind-the-scenes still, shown small beneath the player. */
  bts?: { src: string; alt: string; width: number; height: number };
  /** Intrinsic pixel dimensions of the encoded file. */
  width: number;
  height: number;
};

export const FILMS: Film[] = [
  {
    slug: "letter-to-my-family",
    title: "Letter to my Family",
    src: "/films/letter-to-my-family.mp4",
    poster: "/films/letter-to-my-family-poster.jpg",
    medium: "Mixed media · 1:18",
    bts: {
      src: "/films/letter-to-my-family-bts.jpg",
      alt: "Behind the scenes: a DSLR on a rig aimed at the miniature set — handmade puppets on a hand-painted backdrop in the Visual Arts Center studio.",
      width: 1600,
      height: 1200,
    },
    width: 1280,
    height: 720,
  },
  {
    slug: "thoughts-in-color",
    title: "Thoughts in Color",
    src: "/films/thoughts-in-color.mp4",
    poster: "/films/thoughts-in-color-poster.jpg",
    medium: "Cut paper & thread · 0:15",
    silent: true,
    width: 1280,
    height: 720,
  },
];

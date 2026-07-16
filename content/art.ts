// Single source of truth for the Visual Art section — same idea as
// projects.ts: add an entry here and a piece appears in the gallery, no
// component edits needed. Keep it spare; let the work carry itself.

export type ArtPiece = {
  id: string;
  /** Path under /public. */
  src: string;
  /** Honest alt text describing the work, for screen readers. */
  alt: string;
  /** Displayed title, or null for an untitled piece. */
  title: string | null;
  /** Materials, e.g. "Zebra Clickart marker, 0.6mm, on paper". */
  medium: string;
  /** Year made, if known. */
  year?: number;
  /** Intrinsic pixel dimensions of the file at `src` (for layout).
   *  For a stacked piece (see `behind`) these define the CARD BOX instead —
   *  every photo in the stack is cropped to cover this ratio — and they
   *  also decide which row group the piece lands in (portrait vs landscape). */
  width: number;
  height: number;
  /** A second photo tucked behind this one like a card in a stack —
   *  slightly offset so it peeks out, fanning open on hover/press.
   *  It is cropped to the front photo's aspect, so any orientation works. */
  behind?: {
    src: string;
    alt: string;
  };
};

export const ART: ArtPiece[] = [
  {
    id: "scarf",
    src: "/art/scarf-finished.jpg",
    alt: "A hand-knit cable scarf in variegated blue-green yarn, folded loosely in a zigzag on a couch.",
    title: "A scarf for my Mom",
    medium: "Malabrigo Rios #138 Ivy, reversible cable",
    year: 2025,
    // Portrait card box — the knitting shot's full ratio; the finished
    // photo center-crops into it.
    width: 1200,
    height: 1600,
    behind: {
      src: "/art/scarf-knitting.jpg",
      alt: "The same scarf in progress — held mid-row on bamboo needles, cables just taking shape.",
    },
  },
  {
    id: "problem-solving",
    src: "/art/problem-solving.jpg",
    alt: "Problem Solving — eight small abstract oil canvases hung in a two-column grid on a white wall, each a different color study of tangled, searching forms.",
    title: "Problem Solving",
    medium: "Oil on canvas",
    year: 2024,
    width: 910,
    height: 1600,
  },
  {
    id: "my-kid-drew-this",
    src: "/art/my-kid-drew-this.jpg",
    alt: "MY KID DREW THIS — a riotous oil scene: four cartoonish figures in hot pink, chartreuse, ochre, and violet tangled around a ship's wheel, under a full moon with a face, against a swirling dark-teal night.",
    title: "MY KID DREW THIS",
    medium: "Oil on canvas",
    year: 2024,
    width: 1600,
    height: 1166,
  },
  // Benched for now, per Paul — uncomment to rehang.
  // {
  //   id: "discombobulated",
  //   src: "/art/discombobulated.jpg",
  //   alt: "Discombobulated — a fragmented, surreal portrait of a face coming apart, drawn in teal and orange colored pencil with graphite hatching on cream paper.",
  //   title: "Discombobulated",
  //   medium: "Graphite & Caran d'Ache colored pencil",
  //   year: 2024,
  //   width: 1200,
  //   height: 1600,
  // },
  {
    id: "art-01",
    src: "/art/art-01.jpg",
    alt: "Abstract ink drawing: small colorful outlined shapes and a tiny quadruped figure drifting like fragments across cream paper.",
    title: null,
    medium: "Zebra Clickart marker, 0.6mm, on paper",
    year: 2024,
    width: 1200,
    height: 1600,
  },
];

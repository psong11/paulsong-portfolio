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
  /** Intrinsic pixel dimensions of the file at `src` (for layout). */
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
    title: null,
    medium: "Hand-knit cable scarf",
    width: 1600,
    height: 1200,
    behind: {
      src: "/art/scarf-knitting.jpg",
      alt: "The same scarf in progress — held mid-row on bamboo needles, cables just taking shape.",
    },
  },
  {
    id: "discombobulated",
    src: "/art/discombobulated.jpg",
    alt: "Discombobulated — a fragmented, surreal portrait of a face coming apart, drawn in teal and orange colored pencil with graphite hatching on cream paper.",
    title: "Discombobulated",
    medium: "Graphite & Caran d'Ache colored pencil",
    year: 2024,
    width: 1200,
    height: 1600,
  },
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

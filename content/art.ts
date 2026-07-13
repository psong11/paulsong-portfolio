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
};

export const ART: ArtPiece[] = [
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

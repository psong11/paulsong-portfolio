// Single source of truth for the formative-canon section — the movies,
// shows, and games that left a permanent mark, childhood through now.
// Same idea as art.ts / films.ts: add an entry and it appears. Order is
// deliberate (Paul's list order), not chronological.

export type Influence = {
  title: string;
  /** Mono tag line, e.g. "Film · 1999". CSS uppercases it. */
  medium: string;
};

export const INFLUENCES: Influence[] = [
  { title: "The Iron Giant", medium: "Film · 1999" },
  { title: "Big Hero 6", medium: "Film · 2014" },
  { title: "Wild Kratts", medium: "Series · 2011" },
  { title: "Ben 10", medium: "Series · 2005" },
  { title: "Stranger Things", medium: "Series · 2016" },
  { title: "The Martian", medium: "Film · 2015" },
  { title: "Project Hail Mary", medium: "Andy Weir · 2021" },
  { title: "Cyberchase", medium: "Series · 2002" },
  { title: "Lilo & Stitch", medium: "Film · 2002" },
  { title: "Ratchet & Clank", medium: "Games · 2002 –" },
  {
    title: "Kaladesh / Aether Revolt",
    medium: "Magic: The Gathering · 2016 – 17",
  },
  { title: "Outer Banks", medium: "Series · 2020" },
  { title: "Overwatch", medium: "Game · 2016" },
  { title: "WALL·E", medium: "Film · 2008" },
  { title: "Surf's Up", medium: "Film · 2007" },
  { title: "Monsters University", medium: "Film · 2013" },
  { title: "The Maze Runner", medium: "Film · 2014" },
  { title: "Real Steel", medium: "Film · 2011" },
];

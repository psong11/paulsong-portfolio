// The journal's spine. Newest first — the page renders in this order, and the
// sidebar contents is built from it, so adding an entry means adding one row
// here plus the MDX files in content/journal/.

export type JournalEntry = {
  date: string;   // also the MDX filename and the anchor id
  title: string;
  /** A day's measured numbers, shown before any prose. [value, label] */
  stats?: [string, string][];
  /** True when content/journal/<date>-lessons.mdx exists. */
  lessons?: boolean;
  /** Renders the power-investigation figures inside this entry. */
  figures?: boolean;
  /** Renders the direction-discovery figure inside this entry. */
  direction?: boolean;
};

export const JOURNAL: JournalEntry[] = [
  {
    date: "2026-08-31",
    title: "four days, and it was a minus sign",
    stats: [
      ["5", "wrong diagnoses"],
      ["12×", "the torque, for 2.2° of travel"],
      ["62 s", "the first walk"],
      ["1", "minus sign"],
    ],
    lessons: true,
    direction: true,
  },
  {
    date: "2026-08-30",
    title: "the instrument is cheaper than the guessing",
    stats: [
      ["4.808 s", "to the brain's death"],
      ["20 Hz", "recorder that outlived it"],
      ["0", "undervoltage flags raised"],
      ["1.1 V", "sag, under load"],
    ],
    lessons: true,
    figures: true,
  },
  {
    date: "2026-08-28",
    title: "the body answers, and then runs out of breath",
    stats: [
      ["14 / 14", "motors answered"],
      ["9°", "of tilt that was never real"],
      ["+180°", "written into two servos' firmware"],
      ["3", "brownouts in one evening"],
    ],
    lessons: true,
  },
  {
    date: "2026-08-15",
    title: "heft",
    stats: [
      ["L³ vs L²", "mass against torque"],
      ["8× / 4×", "heavier / stronger, at double height"],
      ["42 cm", "the scale that makes it possible"],
    ],
  },
  {
    date: "2026-08-14",
    title: "day zero",
    stats: [
      ["14", "servos given addresses"],
      ["1", "silent bus, hours lost to it"],
      ["50", "the register that refused to change"],
    ],
    lessons: true,
  },
];

export function entryLabel(date: string): string {
  const [y, m, d] = date.split("-").map(Number);
  const month = new Date(Date.UTC(y, m - 1, d)).toLocaleString("en-US", {
    month: "short",
    timeZone: "UTC",
  });
  return `${month} ${d}`;
}

// The journal's spine. Newest first — the page renders in this order, and the
// sidebar contents is built from it, so adding an entry means adding one row
// here and one MDX file in content/journal/.

export type JournalEntry = {
  date: string;   // also the MDX filename and the anchor id
  title: string;
  /** Renders the power-investigation figures inside this entry. */
  figures?: boolean;
};

export const JOURNAL: JournalEntry[] = [
  { date: "2026-08-30", title: "the instrument is cheaper than the guessing", figures: true },
  { date: "2026-08-28", title: "the body answers, and then runs out of breath" },
  { date: "2026-08-15", title: "heft" },
  { date: "2026-08-14", title: "day zero" },
];

export function entryLabel(date: string): string {
  const [y, m, d] = date.split("-").map(Number);
  const month = new Date(Date.UTC(y, m - 1, d)).toLocaleString("en-US", {
    month: "short",
    timeZone: "UTC",
  });
  return `${month} ${d}`;
}

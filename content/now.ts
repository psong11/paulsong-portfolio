import { BOOKS } from "./books";

// The masthead's field-note status block — three present-tense lines that
// keep the hero feeling dated like a journal entry. Update as life moves;
// the reading line follows a slug from books.ts so it never drifts from
// the shelf.
export const NOW = {
  now: "Bentonville, Arkansas",
  building: "solar-powered sensor nodes for a regenerative farm",
  readingSlug: "the-grid",
};

const book = BOOKS.find((b) => b.slug === NOW.readingSlug);

export const NOW_READING = book ? `${book.title} · ${book.author}` : null;

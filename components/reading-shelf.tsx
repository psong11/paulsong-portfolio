import { SHELVES, type Book, type Marginalia } from "@/content/books";
import { showBookThoughts } from "@/lib/flags";

// A quote carries the sage left-border — the same motif as the project
// journals. A thought sits in the margin under a small mono label. Keeping
// them visually distinct is the whole point: one voice is the author's, the
// other is yours.
function Note({ note }: { note: Marginalia }) {
  if (note.kind === "quote") {
    return (
      <div className="border-l-[3px] border-leaf pl-4">
        <p className="font-serif text-[1.02rem] italic leading-relaxed text-ink-soft">
          {note.text}
        </p>
        {note.page != null && (
          <p className="mt-1 font-mono text-[0.65rem] tracking-[0.1em] text-ink-faint">
            p. {note.page}
          </p>
        )}
      </div>
    );
  }
  return (
    <div className="pl-4">
      <p className="mb-1 font-mono text-[0.6rem] uppercase tracking-[0.15em] text-leaf">
        thought{note.page != null && ` · p. ${note.page}`}
      </p>
      <p className="font-serif text-[0.92rem] leading-relaxed text-ink-muted">
        {note.text}
      </p>
    </div>
  );
}

function RowHeader({
  book,
  expandable,
}: {
  book: Book;
  expandable: boolean;
}) {
  const { title, author, yearRead, reading } = book;
  const meta = yearRead ? String(yearRead) : reading ? "reading" : null;

  return (
    <>
      <span className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
        <span className="font-serif text-lg text-ink-soft">{title}</span>
        {author && (
          <span className="font-serif text-[0.9rem] italic text-ink-faint">
            {author}
          </span>
        )}
      </span>
      <span className="flex flex-shrink-0 items-center gap-3">
        {meta && (
          <span className="font-mono text-[0.7rem] tracking-[0.1em] text-ink-faint">
            {meta}
          </span>
        )}
        {expandable && (
          <span
            className="text-[0.7rem] text-leaf transition-transform duration-200 group-open:rotate-90"
            aria-hidden
          >
            ▸
          </span>
        )}
      </span>
    </>
  );
}

function BookRow({ book }: { book: Book }) {
  // A book with no notes is just a titled row — nothing to open.
  if (book.notes.length === 0) {
    return (
      <div className="flex items-baseline justify-between gap-4 border-t border-line-soft py-4 last:border-b">
        <RowHeader book={book} expandable={false} />
      </div>
    );
  }

  return (
    <details className="group border-t border-line-soft last:border-b">
      <summary className="flex cursor-pointer list-none items-baseline justify-between gap-4 py-4 [&::-webkit-details-marker]:hidden">
        <RowHeader book={book} expandable />
      </summary>

      <div className="flex flex-col gap-4 pb-6">
        {book.notes.map((note, i) => (
          <Note key={i} note={note} />
        ))}
      </div>
    </details>
  );
}

export function ReadingShelf({ books }: { books: Book[] }) {
  // Kill-switch: when thoughts are off, strip them from each book's notes.
  // A book left with no notes falls back to a plain, non-expandable row.
  const shelf = showBookThoughts()
    ? books
    : books.map((book) => ({
        ...book,
        notes: book.notes.filter((note) => note.kind !== "thought"),
      }));

  if (shelf.length === 0) return null;

  return (
    <section className="mt-24">
      <header className="max-w-2xl">
        <p className="label">Reading</p>
        <h2 className="mt-4 font-serif text-2xl font-medium leading-tight text-ink sm:text-3xl">
          What I&rsquo;m reading, and the lines that stuck.
        </h2>
        <p className="mt-3 font-serif text-base leading-relaxed text-ink-muted">
          A running shelf, a few shelves deep — open a book to read the
          margins.
        </p>
      </header>

      {SHELVES.map(({ key, title }) => {
        const group = shelf.filter((book) => book.shelf === key);
        if (group.length === 0) return null;
        return (
          <div key={key} className="mt-10">
            <h3 className="font-serif text-lg italic text-ink-muted">
              {title}
            </h3>
            <div className="mt-3">
              {group.map((book) => (
                <BookRow key={book.slug} book={book} />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}

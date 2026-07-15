import type { CommunityEntry } from "@/content/community";
import { ArtStack } from "@/components/art-stack";

const MAT =
  "rounded-lg border border-line bg-[#fffdf8] p-3 shadow-[0_1px_3px_rgba(31,27,22,0.08)]";

// Entries with photos get a full row: a shuffleable card stack (same
// interaction as the art gallery) beside the story. Entries without photos
// fall back to the Path's hairline-row rhythm below.
function PhotoRow({ entry }: { entry: CommunityEntry }) {
  const { org, role, years, story, detail, photos, box } = entry;

  return (
    <div className="grid grid-cols-1 gap-6 border-t border-line-soft py-8 sm:grid-cols-[19rem_1fr] sm:gap-10">
      <div className="self-start">
        <ArtStack
          photos={photos!}
          aspectRatio={box ? box.width / box.height : 4 / 3}
          sizes="(max-width: 640px) 100vw, 304px"
          matClass={MAT}
        />
      </div>
      <div>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="font-serif text-lg font-semibold text-ink">
            {org}
          </span>
          <span className="font-serif text-[0.9rem] font-semibold italic text-ink-muted">
            {role}
          </span>
          <span className="font-mono text-[0.7rem] tracking-[0.1em] text-ink-faint sm:ml-auto">
            {years}
          </span>
        </div>
        <p className="mt-3 font-serif text-base leading-relaxed text-ink-muted">
          {story}
        </p>
        {detail && (
          <p className="mt-3 font-mono text-[0.7rem] leading-relaxed text-ink-faint">
            {detail}
          </p>
        )}
      </div>
    </div>
  );
}

function QuietRow({ entry }: { entry: CommunityEntry }) {
  const { org, role, years, story } = entry;

  return (
    <div className="grid grid-cols-1 gap-1 border-t border-line-soft py-5 sm:grid-cols-[7rem_1fr] sm:gap-6">
      <span className="pt-0.5 font-mono text-[0.7rem] tracking-[0.1em] text-ink-faint">
        {years}
      </span>
      <div>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="font-serif text-lg font-semibold text-ink">
            {org}
          </span>
          <span className="font-serif text-[0.9rem] font-semibold italic text-ink-muted">
            {role}
          </span>
        </div>
        <p className="mt-1.5 font-serif text-[0.95rem] leading-relaxed text-ink-muted">
          {story}
        </p>
      </div>
    </div>
  );
}

export function CommunitySection({ entries }: { entries: CommunityEntry[] }) {
  if (entries.length === 0) return null;

  const withPhotos = entries.filter((e) => e.photos && e.photos.length > 0);
  const quiet = entries.filter((e) => !e.photos || e.photos.length === 0);

  return (
    <section className="mt-24">
      <header className="max-w-2xl">
        <p className="label">Community</p>
        <h2 className="mt-4 font-serif text-2xl font-medium leading-tight text-ink sm:text-3xl">
          Serving and building community.
        </h2>
        <p className="mt-3 font-serif text-base leading-relaxed text-ink-muted">
          An orchestra, a culture show, a craft table — different rooms, same
          job: make a place people want to show up to, then say yes to
          whatever it needs.
        </p>
      </header>

      <div className="mt-8">
        {withPhotos.map((entry) => (
          <PhotoRow key={entry.id} entry={entry} />
        ))}
        {quiet.map((entry) => (
          <QuietRow key={entry.id} entry={entry} />
        ))}
        <div className="border-t border-line-soft" aria-hidden />
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";

export type NavSection = { id: string; label: string; sub?: string };

/**
 * Contents for a very long log. Sticky beside the text on wide screens, a
 * horizontal rail above it on narrow ones. Scroll-spy uses the section whose
 * top is nearest above the reading line, which is steadier than an
 * IntersectionObserver on entries of wildly different heights.
 */
export default function JournalNav({ sections }: { sections: NavSection[] }) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    let frame = 0;
    const measure = () => {
      frame = 0;
      const line = window.innerHeight * 0.28;
      let current = sections[0]?.id;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= line) current = s.id;
      }
      setActive(current);
    };
    // Coalesce to one measurement per frame; scroll fires far faster than
    // six getBoundingClientRect calls are worth repeating.
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };
    measure(); // also covers landing on a #anchor, where no scroll event fires
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("hashchange", schedule);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("hashchange", schedule);
    };
  }, [sections]);

  return (
    <nav aria-label="Journal contents" className="lg:sticky lg:top-12 lg:self-start">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">
        Contents
      </p>

      {/* wide: a stacked list; narrow: a scrolling rail so it never wraps to
          six lines above the article */}
      <ul className="mt-3 flex gap-x-4 gap-y-1 overflow-x-auto pb-2 lg:mt-4 lg:flex-col lg:gap-2 lg:overflow-visible lg:pb-0">
        {sections.map((s) => {
          const on = active === s.id;
          return (
            <li key={s.id} className="shrink-0 lg:shrink">
              <a
                href={`#${s.id}`}
                aria-current={on ? "true" : undefined}
                className={`block whitespace-nowrap border-l-2 pl-3 font-mono text-[11px] leading-snug transition-colors lg:whitespace-normal ${
                  on
                    ? "border-[var(--color-leaf)] text-ink"
                    : "border-transparent text-ink-faint hover:text-ink-muted lg:border-line-soft"
                }`}
              >
                {s.label}
                {s.sub && (
                  <span className="ml-2 text-ink-faint lg:ml-0 lg:block">{s.sub}</span>
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

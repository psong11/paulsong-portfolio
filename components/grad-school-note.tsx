import Link from "next/link";

/* A quiet standing note at the very bottom of the landing page. The grad
   school is a program I'm enrolled in, not a project on the wall — so it
   gets a registrar's line, not a card. */
export function GradSchoolNote() {
  return (
    <section className="mt-24 border-t border-line-soft pt-8">
      <p className="label">Currently enrolled</p>
      <p className="mt-3 max-w-[60ch] font-serif text-[0.95rem] leading-relaxed text-ink-muted">
        <Link
          href="/grad-school"
          className="font-medium text-ink-soft underline decoration-[#6b4e2e] decoration-2 underline-offset-4 hover:text-[#6b4e2e]"
        >
          An Autonomous Grad School
        </Link>{" "}
        — a two-year, build-first master&apos;s in autonomous systems,
        designed with Claude. The farm is the lab, a rover is the thesis, and
        the professor holds office hours on the syllabus page. First demo due
        September 2026.
      </p>
    </section>
  );
}

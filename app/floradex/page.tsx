import Link from "next/link";
import { PROJECTS } from "@/content/projects";

const project = PROJECTS.find((p) => p.slug === "floradex")!;
const accent = project.accent;

export const metadata = {
  title: "Floradex — the build",
  description:
    "The build story of Floradex: a native iOS computer-vision app that puts a live bounding box on a plant, identifies the species, and files it in a Pokédex-style collection — built by separating real-time detection from accurate classification.",
};

// The three-stage pipeline — the heart of the architecture.
const STAGES = [
  {
    n: "01",
    name: "Detect",
    where: "On-device · ~30 fps",
    tech: "Apple Vision + AVFoundation",
    body: "A live bounding box tracks the plant right on the viewfinder. Latency-critical — no network round-trip survives a 30 fps loop, so it must run locally.",
    zone: "device" as const,
  },
  {
    n: "02",
    name: "Classify",
    where: "Cloud · on capture",
    tech: "Pl@ntNet API",
    body: "A still frame goes to a fine-grained classifier for global species ID + confidence. Off the real-time path, so ~1–2 s of latency is fine.",
    zone: "cloud" as const,
  },
  {
    n: "03",
    name: "Enrich",
    where: "Cloud · on save",
    tech: "Claude Haiku 4.5",
    body: "The species name becomes a tight, schema-valid info card — family, Latin name, notable relatives, fun facts — via structured outputs.",
    zone: "cloud" as const,
  },
];

// A few hard-won lessons — the clearest evidence of the engineering underneath.
const LESSONS = [
  {
    title: "Debug the invisible with an on-screen HUD",
    body: "Vision returns normalized, bottom-left-origin rects; SwiftUI is top-left; the preview crops aspect-fill. The box was mis-scaled, offset, and its axes transposed. Rather than guess, I put the raw numbers on screen and plotted them against the object's true position across five field screenshots — which revealed a clean X↔Y transpose, then hand-wrote the scale-to-cover transform against all five data points before shipping.",
    image: {
      src: "/projects/floradex/hud-debug.jpg",
      alt: "A phone screenshot of the app: a green bounding box snapped tightly around a yellow CAUTION wet-floor sign, with the debug HUD overlaid at the top showing the raw normalized rect, the converted screen-pixel rect, and the screen size.",
      caption:
        "The HUD after the fix — raw normalized rect, the converted screen-pixel rect, and screen size, printed live over a snapped-on box. A high-contrast sign stood in for a plant while I nailed the coordinate transform.",
    },
  },
  {
    title: "One source of truth for orientation",
    body: "The bounding box double-rotated because orientation was applied twice — once on the output connection and again as a Vision hint. Two places defining the same fact fought each other. Fixed by making the Vision hint the single source of truth.",
  },
  {
    title: "A failure mode that reshaped the roadmap",
    body: "Field-testing showed Apple's saliency only isolates high-contrast subjects — it detects contrast, not “plant-ness,” and structurally struggles with the core case: a green plant against green foliage. That empirically-discovered limit is exactly why Phase 2 is a domain-specific trained detector.",
  },
];

export default function FloradexJourneyPage() {
  return (
    <main className="min-h-screen">
      {/* Top bar */}
      <div className="mx-auto flex max-w-[68ch] items-center justify-between gap-4 px-6 pt-12 pb-2 sm:pt-16">
        <Link
          href="/"
          className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted hover:text-[var(--color-leaf)]"
        >
          ← Portfolio
        </Link>
        <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: accent }}
            aria-hidden
          />
          The Build
        </span>
      </div>

      {/* Hero */}
      <header className="mx-auto max-w-[68ch] px-6 pt-8 pb-4">
        <h1 className="font-serif text-4xl font-medium leading-[1.05] tracking-tight text-ink sm:text-5xl">
          Floradex
        </h1>
        <p className="mt-4 font-serif text-lg leading-relaxed text-ink-soft">
          {project.tagline}
        </p>
        <p className="mt-4 font-serif text-base leading-relaxed text-ink-muted">
          A curiosity about the living world, made tactile — point your phone at
          a plant and watch a box find it, name it, and remember it. Underneath
          the toy is a clean engineering idea: <em>real-time detection</em> and{" "}
          <em>accurate identification</em> are two different problems, and the
          app is fast <em>and</em> accurate precisely because it refuses to
          conflate them.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1">
          {project.tags.map((t) => (
            <span key={t} className="font-mono text-[0.72rem] text-ink-faint">
              {t}
            </span>
          ))}
        </div>
      </header>

      {/* Demo videos — muted, autoplay, looping, no audio track at all */}
      <section className="mx-auto max-w-[68ch] px-6 pt-6 pb-2">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
          In Motion
        </p>
        <p className="mt-2 font-serif text-sm text-ink-faint">
          The app running on a phone — the full capture flow end to end, then a
          closer look at the live detection loop.
        </p>

        <div className="mt-6 grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 sm:gap-6">
          {/* Video 1 — the main demo: the full end-to-end flow (shipped) */}
          <figure className="flex flex-col items-center">
            <div
              className="overflow-hidden rounded-[2rem] border-2 bg-ink p-1.5 shadow-xl"
              style={{ borderColor: `${accent}55` }}
            >
              <video
                className="block w-[260px] rounded-[1.6rem]"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/projects/floradex/main-demo-poster.jpg"
              >
                <source src="/projects/floradex/main-demo.mp4" type="video/mp4" />
              </video>
            </div>
            <figcaption className="mt-3 max-w-[26ch] text-center font-serif text-sm leading-snug text-ink-muted">
              The whole loop end to end — a live box finds the plant, a tap names
              the species, and Claude writes the card it's filed under.
            </figcaption>
          </figure>

          {/* Video 2 — a closer look at the live detection loop */}
          <figure className="flex flex-col items-center">
            <div
              className="overflow-hidden rounded-[2rem] border-2 bg-ink p-1.5 shadow-xl"
              style={{ borderColor: `${accent}55` }}
            >
              <video
                className="block w-[260px] rounded-[1.6rem]"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/projects/floradex/demo-poster.jpg"
              >
                <source src="/projects/floradex/demo.mp4" type="video/mp4" />
              </video>
            </div>
            <figcaption className="mt-3 max-w-[26ch] text-center font-serif text-sm leading-snug text-ink-muted">
              Flora collected so far!
            </figcaption>
          </figure>
        </div>
      </section>

      {/* What it's for */}
      <section className="mx-auto max-w-[68ch] px-6 pt-12">
        <h2 className="font-serif text-2xl font-medium text-ink">
          What it is
        </h2>
        <p className="mt-4 font-serif text-base leading-relaxed text-ink-soft">
          Floradex is a native iOS (Swift/SwiftUI) computer-vision app. Aim it at
          a plant and a bounding box tracks it live at ~30 fps; tap the shutter
          and it identifies the species; save it, and Claude writes a small
          structured card — family, Latin name, relatives, a fact or two. Every
          catch lands in a Pokédex-style collection you can browse later. Native
          was a deliberate choice: real-time camera CV is dramatically better
          with Vision, AVFoundation, and Core ML than anything cross-platform.
        </p>
      </section>

      {/* Architecture — the three-stage pipeline */}
      <section className="mx-auto max-w-[76ch] px-6 pt-14">
        <h2 className="max-w-[68ch] font-serif text-2xl font-medium text-ink">
          Architecture — a three-stage pipeline
        </h2>
        <p className="mt-4 max-w-[68ch] font-serif text-base leading-relaxed text-ink-muted">
          The pipeline deliberately splits “real-time” from “accurate.” The
          latency-critical loop stays on the device; the accuracy-critical work
          lives in the cloud, off the hot path.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {STAGES.map((stage, i) => (
            <div key={stage.n} className="relative flex">
              <div className="flex w-full flex-col rounded-lg border border-line-soft bg-card p-5">
                <div className="flex items-center justify-between">
                  <span
                    className="font-mono text-xs font-medium"
                    style={{ color: accent }}
                  >
                    {stage.n}
                  </span>
                  <span
                    className="rounded-full border px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-[0.15em]"
                    style={{
                      borderColor:
                        stage.zone === "device" ? `${accent}66` : "#d8d0bd",
                      color:
                        stage.zone === "device" ? accent : "var(--color-ink-faint)",
                    }}
                  >
                    {stage.zone === "device" ? "on-device" : "cloud"}
                  </span>
                </div>
                <h3 className="mt-3 font-serif text-lg font-medium text-ink">
                  {stage.name}
                </h3>
                <p className="font-mono text-[0.7rem] text-ink-faint">
                  {stage.where}
                </p>
                <p className="mt-1 font-mono text-[0.7rem] text-ink-muted">
                  {stage.tech}
                </p>
                <p className="mt-3 font-serif text-sm leading-relaxed text-ink-muted">
                  {stage.body}
                </p>
              </div>
              {/* Connector arrow between stages (desktop only) */}
              {i < STAGES.length - 1 && (
                <span
                  className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 font-mono text-lg md:block"
                  style={{ color: `${accent}aa` }}
                  aria-hidden
                >
                  →
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Key insight callout */}
        <div
          className="mt-6 max-w-[68ch] rounded-lg border-l-[3px] bg-mat/60 py-4 pl-5 pr-4"
          style={{ borderColor: accent }}
        >
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink-faint">
            The key insight
          </p>
          <p className="mt-2 font-serif text-base leading-relaxed text-ink-soft">
            “Identify a plant with a YOLO-style box” secretly bundles two
            different CV problems: <strong>object detection</strong> (real-time,
            few classes, on-device) and{" "}
            <strong>fine-grained classification</strong> (thousands of species,
            needs a large model or an API). Separating them per stage is the
            whole reason the app can be both fast and accurate.
          </p>
        </div>
      </section>

      {/* Lessons — the engineering underneath */}
      <section className="mx-auto max-w-[68ch] px-6 pt-14">
        <h2 className="font-serif text-2xl font-medium text-ink">
          What it took
        </h2>
        <div className="mt-6 flex flex-col gap-8">
          {LESSONS.map((lesson) => (
            <div
              key={lesson.title}
              className={
                lesson.image
                  ? "flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-7"
                  : undefined
              }
            >
              <div className={lesson.image ? "sm:flex-1" : undefined}>
                <h3 className="font-serif text-lg font-medium text-ink-soft">
                  {lesson.title}
                </h3>
                <p className="mt-2 font-serif text-sm leading-relaxed text-ink-muted">
                  {lesson.body}
                </p>
              </div>
              {lesson.image && (
                <figure className="flex shrink-0 flex-col items-center sm:w-[180px]">
                  <div
                    className="overflow-hidden rounded-[1.5rem] border-2 bg-ink p-1 shadow-xl"
                    style={{ borderColor: `${accent}55` }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={lesson.image.src}
                      alt={lesson.image.alt}
                      className="block w-[180px] rounded-[1.15rem]"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="mt-3 max-w-[26ch] text-center font-serif text-xs leading-snug text-ink-faint">
                    {lesson.image.caption}
                  </figcaption>
                </figure>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Roadmap */}
      <section className="mx-auto max-w-[68ch] px-6 pt-14 pb-24">
        <h2 className="font-serif text-2xl font-medium text-ink">
          Where it's going
        </h2>
        <div className="mt-6 flex flex-col gap-4">
          <div className="flex gap-4">
            <span
              className="mt-1 font-mono text-[0.7rem] uppercase tracking-[0.15em]"
              style={{ color: accent }}
            >
              Done
            </span>
            <p className="font-serif text-sm leading-relaxed text-ink-soft">
              <strong className="text-ink-soft">Phase 1 — the vertical slice.</strong>{" "}
              Real-time on-device detection → capture → global species ID
              (Pl@ntNet) → AI enrichment (Claude) → a durable local collection
              (SwiftData). A complete path, working end to end on real plants.
            </p>
          </div>
          <div className="flex gap-4">
            <span className="mt-1 font-mono text-[0.7rem] uppercase tracking-[0.15em] text-ink-faint">
              Next
            </span>
            <p className="font-serif text-sm leading-relaxed text-ink-muted">
              <strong className="text-ink-soft">Phase 2 — the ML deep-dive.</strong>{" "}
              Train a custom plant detector (fine-tune YOLO on a plant dataset,
              evaluate, export to Core ML) and swap it in for Apple's saliency —
              directly fixing the low-contrast-foliage failure found in the
              field.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

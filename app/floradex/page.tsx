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
          className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400 hover:text-[var(--color-leaf)]"
        >
          ← Portfolio
        </Link>
        <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
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
        <h1 className="font-serif text-4xl font-medium leading-[1.05] tracking-tight text-slate-50 sm:text-5xl">
          Floradex
        </h1>
        <p className="mt-4 font-serif text-lg leading-relaxed text-slate-300">
          {project.tagline}
        </p>
        <p className="mt-4 font-serif text-base leading-relaxed text-slate-400">
          A curiosity about the living world, made tactile — point your phone at
          a plant and watch a box find it, name it, and remember it. Underneath
          the toy is a clean engineering idea: <em>real-time detection</em> and{" "}
          <em>accurate identification</em> are two different problems, and the
          app is fast <em>and</em> accurate precisely because it refuses to
          conflate them.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1">
          {project.tags.map((t) => (
            <span key={t} className="font-mono text-[0.72rem] text-slate-500">
              {t}
            </span>
          ))}
        </div>
      </header>

      {/* Demo videos — muted, autoplay, looping, no audio track at all */}
      <section className="mx-auto max-w-[68ch] px-6 pt-6 pb-2">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
          In Motion
        </p>
        <p className="mt-2 font-serif text-sm text-slate-500">
          The app running on a phone — the live loop, and the capture flow.
        </p>

        <div className="mt-6 grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 sm:gap-6">
          {/* Video 1 — the live detect/identify loop (shipped) */}
          <figure className="flex flex-col items-center">
            <div
              className="overflow-hidden rounded-[2rem] border-2 bg-slate-900 p-1.5 shadow-2xl"
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
            <figcaption className="mt-3 max-w-[26ch] text-center font-serif text-sm leading-snug text-slate-400">
              Live detection and species ID — the box finds the plant, the app
              names it.
            </figcaption>
          </figure>

          {/* ─────────────────────────────────────────────────────────────
              Video 2 — THE CAPTURE-PROCESS VIDEO GOES HERE.
              To add it: drop the file at
                public/projects/floradex/capture.mp4
              (optional poster: public/projects/floradex/capture-poster.jpg),
              then DELETE the placeholder <div> below and UNCOMMENT the <video>
              block beneath it. Same muted/autoplay/loop treatment as video 1.
              (I'll strip its audio + compress it the same way when you have it.)
          ────────────────────────────────────────────────────────────────── */}
          <figure className="flex flex-col items-center">
            {/* PLACEHOLDER — remove once capture.mp4 exists */}
            <div
              className="flex w-[260px] flex-col items-center justify-center rounded-[2rem] border-2 border-dashed bg-slate-900/40 p-6 text-center"
              style={{ borderColor: `${accent}44`, aspectRatio: "1180 / 2556" }}
            >
              <span
                className="font-mono text-2xl"
                style={{ color: `${accent}aa` }}
                aria-hidden
              >
                ⃝
              </span>
              <span className="mt-3 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-slate-500">
                Video coming
              </span>
              <span className="mt-2 font-serif text-sm leading-snug text-slate-500">
                The capture flow — shutter to a saved Floradex card.
              </span>
            </div>

            {/* Uncomment when capture.mp4 is in place:
            <div
              className="overflow-hidden rounded-[2rem] border-2 bg-slate-900 p-1.5 shadow-2xl"
              style={{ borderColor: `${accent}55` }}
            >
              <video
                className="block w-[260px] rounded-[1.6rem]"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/projects/floradex/capture-poster.jpg"
              >
                <source src="/projects/floradex/capture.mp4" type="video/mp4" />
              </video>
            </div>
            */}

            <figcaption className="mt-3 max-w-[26ch] text-center font-serif text-sm leading-snug text-slate-400">
              The capture flow — shutter, identify, and file it in the
              collection.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* What it's for */}
      <section className="mx-auto max-w-[68ch] px-6 pt-12">
        <h2 className="font-serif text-2xl font-medium text-slate-50">
          What it is
        </h2>
        <p className="mt-4 font-serif text-base leading-relaxed text-slate-300">
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
        <h2 className="max-w-[68ch] font-serif text-2xl font-medium text-slate-50">
          Architecture — a three-stage pipeline
        </h2>
        <p className="mt-4 max-w-[68ch] font-serif text-base leading-relaxed text-slate-400">
          The pipeline deliberately splits “real-time” from “accurate.” The
          latency-critical loop stays on the device; the accuracy-critical work
          lives in the cloud, off the hot path.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {STAGES.map((stage, i) => (
            <div key={stage.n} className="relative flex">
              <div className="flex w-full flex-col rounded-lg border border-slate-800 bg-slate-800/40 p-5">
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
                        stage.zone === "device" ? `${accent}66` : "#33415580",
                      color:
                        stage.zone === "device" ? accent : "var(--color-text-faint)",
                    }}
                  >
                    {stage.zone === "device" ? "on-device" : "cloud"}
                  </span>
                </div>
                <h3 className="mt-3 font-serif text-lg font-medium text-slate-50">
                  {stage.name}
                </h3>
                <p className="font-mono text-[0.7rem] text-slate-500">
                  {stage.where}
                </p>
                <p className="mt-1 font-mono text-[0.7rem] text-slate-400">
                  {stage.tech}
                </p>
                <p className="mt-3 font-serif text-sm leading-relaxed text-slate-400">
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
          className="mt-6 max-w-[68ch] rounded-lg border-l-[3px] bg-slate-800/30 py-4 pl-5 pr-4"
          style={{ borderColor: accent }}
        >
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-slate-500">
            The key insight
          </p>
          <p className="mt-2 font-serif text-base leading-relaxed text-slate-300">
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
        <h2 className="font-serif text-2xl font-medium text-slate-50">
          What it took
        </h2>
        <div className="mt-6 flex flex-col gap-6">
          {LESSONS.map((lesson) => (
            <div key={lesson.title}>
              <h3 className="font-serif text-lg font-medium text-slate-200">
                {lesson.title}
              </h3>
              <p className="mt-2 font-serif text-sm leading-relaxed text-slate-400">
                {lesson.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Roadmap */}
      <section className="mx-auto max-w-[68ch] px-6 pt-14 pb-24">
        <h2 className="font-serif text-2xl font-medium text-slate-50">
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
            <p className="font-serif text-sm leading-relaxed text-slate-300">
              <strong className="text-slate-200">Phase 1 — the vertical slice.</strong>{" "}
              Real-time on-device detection → capture → global species ID
              (Pl@ntNet) → AI enrichment (Claude) → a durable local collection
              (SwiftData). A complete path, working end to end on real plants.
            </p>
          </div>
          <div className="flex gap-4">
            <span className="mt-1 font-mono text-[0.7rem] uppercase tracking-[0.15em] text-slate-500">
              Next
            </span>
            <p className="font-serif text-sm leading-relaxed text-slate-400">
              <strong className="text-slate-300">Phase 2 — the ML deep-dive.</strong>{" "}
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

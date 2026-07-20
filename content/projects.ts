// The portfolio's single source of truth. Add a project here and a card
// appears on the landing page — no component edits needed. Keep entries
// honest and lead each with the human "why", never with the tech.

export type ProjectStatus = "shipped" | "in progress" | "ongoing";

export type Project = {
  slug: string;
  title: string;
  /** One evocative line — what it is. */
  tagline: string;
  /** The human/societal reason it exists. Lead with this. */
  why: string;
  /** Core stack / tools, kept short. */
  tags: string[];
  status: ProjectStatus;
  /** Per-card accent (hairline + status dot). */
  accent: string;
  /** Internal journey page exists at /<slug>. */
  journey?: boolean;
  /** External link, if any — a live deployment or a repo. */
  liveUrl?: string;
  /** Override for the card's link text (default "View live →"). */
  linkLabel?: string;
  /** Path under /public, if a real thumbnail exists. Otherwise a tinted
   *  placeholder is rendered from `accent`. */
  thumbnail?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "onsc-alumni",
    title: "ONSC Alumni Digitizer",
    tagline:
      "Snap a handwritten camp form, AI reads it, a volunteer confirms, it's saved.",
    why: "Decades of a nature center's alumni sit in boxes of paper. This turns months of re-typing into seconds per form — so it can reconnect with the kids it once inspired.",
    tags: ["Next.js", "Claude vision", "Google Sheets"],
    status: "shipped",
    accent: "#a2762a", // amber ochre
    liveUrl: "https://github.com/psong11/onsc-alumni-project",
    linkLabel: "View code →",
    thumbnail: "/thumbnails/onsc-alumni.png", // the Ozark Natural Science Center brand mark
  },
  {
    slug: "wy2z",
    title: "wy2z",
    tagline:
      "A four-device lab that kept three plants alive, unattended, for five weeks.",
    why: "Care for living things, and a small answer to food insecurity — a Pi, a camera, and Claude watching a tomato while I was a thousand miles away.",
    tags: ["Raspberry Pi", "Jetson", "ESP32", "Claude vision", "Supabase"],
    status: "shipped",
    accent: "#567a58", // sage, inked for paper
    liveUrl: "https://wy2z.vercel.app",
    thumbnail: "/thumbnails/wy2z.jpg", // the live project's own timelapse poster
  },
  {
    slug: "floradex",
    title: "Floradex",
    tagline:
      "Point your phone at a plant; get a live ID and a Pokédex-style card.",
    why: "Curiosity about the living world, made tactile — and a clean answer to a real CV problem: separating real-time detection from accurate species ID.",
    tags: ["Swift", "SwiftUI", "Vision", "Pl@ntNet", "Claude"],
    status: "in progress",
    accent: "#4c7d55", // leaf, inked for paper
    journey: true,
    thumbnail: "/thumbnails/floradex.jpg", // a frame of the Pokédex-style collection, from the demo video
  },
  {
    slug: "bentonville-gas-simulator",
    title: "Bentonville Gas Simulator",
    tagline:
      "A real-time digital twin of a city gas network, with physics-based leak detection.",
    why: "Born from the December 2025 Bentonville gas scare — a question about whether we can understand and prevent infrastructure failures before they become crises.",
    tags: ["FastAPI", "React", "WebSockets", "Darcy-Weisbach"],
    status: "shipped",
    accent: "#b3532f", // flame clay
    liveUrl: "https://bentonville-gas-simulator.vercel.app",
    thumbnail: "/thumbnails/bentonville-gas-simulator.jpg", // network map: source hub, leaks, sensor nodes
  },
  {
    slug: "ezra",
    title: "Ezra",
    tagline:
      "Read the Bible in original Hebrew & Greek — word by word, with TTS and AI glosses.",
    why: "Bring scripture's original languages within reach of anyone, not just scholars — the text, its sound, and its meaning, side by side.",
    tags: ["Next.js", "Google TTS", "OpenAI"],
    status: "shipped",
    accent: "#8f7420", // parchment gold, inked for paper
    liveUrl: "https://ezra-zeta.vercel.app",
    thumbnail: "/thumbnails/ezra.jpg", // interlinear Hebrew + word-analysis panel, side by side
  },
  {
    slug: "kepler452b",
    title: "kepler452b",
    tagline:
      "Solar-powered sensor nodes that run cable-free and report their own health over WiFi.",
    why: "The reliable, self-sustaining sensing layer a small regenerative farm could never afford — starting with the unglamorous fundamentals of power and reachability.",
    tags: ["ESP32-C6", "INA219", "solar", "arduino-cli"],
    status: "in progress",
    accent: "#5468b8", // starlight indigo, inked for paper — a distant world phoning home
    journey: true,
    thumbnail: "/thumbnails/kepler452b.jpg",
  },
];

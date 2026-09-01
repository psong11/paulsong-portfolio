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
    slug: "open-duck",
    title: "open-duck",
    tagline:
      "An Open Duck Mini v2 — a knee-high BDX droid that learns to walk in simulation, then walks in my apartment.",
    why: "Part sim-to-real education, part operating theater: joints of fourteen servos, a Pi brainstem in its head, a nervous system of harness wire — a cyber duck coming to life one sutured connection at a time.",
    tags: ["STS3215 servos", "Raspberry Pi", "ONNX", "sim-to-real"],
    status: "in progress",
    accent: "#b59a26", // duckling gold, inked for paper
    journey: true,
    thumbnail: "/thumbnails/open-duck.jpg", // the operating theater: body under the lamp, face open on the table
  },
  {
    slug: "jetson-vision",
    title: "jetson-yolo-stream",
    tagline:
      "A portable AI camera that sees for itself — YOLO at ~24 FPS, entirely on edge hardware.",
    why: "The perception layer of the farm network, learning on my desk first: a Jetson Orin Nano and a 16MP camera running detection with no cloud and no laptop — and a journal of what it felt like to watch a machine open its eyes.",
    tags: ["Jetson Orin Nano", "YOLOv11", "CUDA", "GStreamer", "Python"],
    status: "in progress",
    accent: "#3f7a86", // petrol teal, inked for paper — a lens catching light
    liveUrl: "https://github.com/psong11/jetson-yolo-stream",
    linkLabel: "View code →",
    thumbnail: "/thumbnails/jetson-vision.jpg", // the machine's first detection: laptop 0.69, mouse 0.57
  },
  {
    slug: "vayomer",
    title: "Vayomer",
    tagline:
      "Ask it something out loud; it thinks, and answers out loud.",
    why: "Vayomer is Hebrew for \u201cand he said.\u201d Every voice assistant I\u2019ve used is a rented ear in someone else\u2019s building. This one hears through a microphone I soldered myself, thinks on hardware I own, and only one step of the conversation ever leaves the room.",
    tags: ["Raspberry Pi 5", "I2S audio", "whisper.cpp", "Claude", "Piper"],
    status: "in progress",
    accent: "#7a5c9e", // spoken violet, inked for paper
    liveUrl: "https://github.com/psong11/vayomer",
    linkLabel: "View code \u2192",
    thumbnail: "/thumbnails/vayomer.jpg", // the dashboard mid-listen, real waveform from a real reply
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

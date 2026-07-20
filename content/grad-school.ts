// The Autonomous Grad School syllabus — single source of truth for the
// /grad-school journey page, the Office Hours professor (API system prompt),
// and the client-side schedule-math fallback. Change a date or a part here
// and every surface updates.

export type Milestone = {
  code: string;
  name: string;
  /** ISO date the demo is due (end of month). */
  due: string;
  /** The demo, stated as a headline. */
  title: string;
  /** Ship criteria — what must demonstrably work. */
  ship: string;
  /** What this milestone forces me to learn. */
  learn: string;
  /** Gear to have in hand for this milestone. */
  gear: string[];
  /** Where nature already does this (the Life register). */
  nature: string;
  /** The canon book paired with this stretch. */
  book: string;
};

export const PROGRAM_START = "2026-08-01";
export const PROGRAM_END = "2028-08-31";

export const MILESTONES: Milestone[] = [
  {
    code: "M0",
    name: "Heartbeat",
    due: "2026-09-30",
    title: "It's alive and I can drive it",
    ship: "Chassis moves under teleop over WiFi; battery survives a 30-minute session.",
    learn: "DC motors & drivers · power budgeting · embedded Linux bring-up",
    gear: [
      "4WD chassis w/ encoded motors (~$500)",
      "LiFePO₄ pack + BMS + regulated rails (~$160)",
      "Jetson Orin Nano Super dev kit (~$250)",
    ],
    nature:
      "Metabolism precedes behavior — every organism budgets energy before it budgets movement.",
    book: "Code (Petzold) — you're bringing a computer to life; read how one works from electrons up.",
  },
  {
    code: "M1",
    name: "Walk the Line",
    due: "2026-11-30",
    title: "It drives straight without me",
    ship: "20 m dead-reckoned straight line on grass, under 1 m of drift.",
    learn: "wheel encoders · odometry · PID control (intuition tier)",
    gear: ["BNO085 9-DOF IMU (~$25)"],
    nature:
      "Proprioception — your inner ear closes the same loop my encoders do.",
    book: "Thinking in Systems (Meadows) — PID is the first feedback loop; Meadows is the theory of every loop after it.",
  },
  {
    code: "M2",
    name: "Homing",
    due: "2027-01-31",
    title: "It goes where I point on a map",
    ship: "Follows a 5-waypoint RTK-GPS course across an open field, centimeter-accurate.",
    learn: "RTK GPS & NTRIP · coordinate frames · ROS 2 nodes & topics",
    gear: [
      "u-blox ZED-F9P RTK GPS, ArduSimple board (~$280)",
      "NTRIP correction service (check for a free state CORS network first)",
    ],
    nature:
      "Desert ants path-integrate thousands of steps and walk home in a straight line.",
    book: "Biomimicry (Benyus) — while the rover learns to navigate, read how nature already does.",
  },
  {
    code: "M3",
    name: "Whiskers",
    due: "2027-03-31",
    title: "It doesn't hit things",
    ship: "Completes the waypoint course with obstacles added; stops or routes around.",
    learn: "3D LiDAR · depth sensing · perception basics · sensor fusion intuition",
    gear: ["Livox Mid-360 LiDAR (~$750)", "OAK-D Pro depth camera (~$400)"],
    nature:
      "Whiskers and echolocation — sensing built for the dark, not for cameras' convenience.",
    book: "Sustainable Energy — Without the Hot Air (MacKay) — sensors are cheap; watts are not.",
  },
  {
    code: "M4",
    name: "Mental Map",
    due: "2027-05-31",
    title: "It remembers where it's been",
    ship: "Builds and reuses a LiDAR map of a real plot; relocalizes after reboot.",
    learn: "SLAM (intuition tier) · Probabilistic Robotics as reference, not read-through",
    gear: [],
    nature: "Hippocampal place cells — brains invented occupancy grids first.",
    book: "Probabilistic Robotics (Thrun) — consult the SLAM chapters; do not marathon it.",
  },
  {
    code: "M5",
    name: "Scent Trail",
    due: "2027-07-31",
    title: "It smells the field",
    ship: "Carries the kepler452b gas array (SHT40 · STCC4 · O₂ · CH₄ · NH₃); georeferenced readings render as a live heatmap.",
    learn: "GIS & spatial interpolation · telemetry pipelines · payload integration",
    gear: ["Payload mount for the kepler452b array ($0 — already built)"],
    nature:
      "Moths track odor plumes by casting crosswind — sampling strategy beats sensor precision.",
    book: "Dirt to Soil (Brown) — you're about to measure a field; understand what a healthy one is.",
  },
  {
    code: "M6",
    name: "First Harvest",
    due: "2027-09-30",
    title: "It surveys a field alone, start to finish",
    ship: "One-button autonomous survey mission: cover the plot, log the data, come home. Full writeup — the Year 1 thesis defense.",
    learn: "behavior trees · mission planning · failure modes & field ops",
    gear: [],
    nature:
      "Foraging theory — when to sweep in rows vs. when to wander (Lévy walks).",
    book: "Braiding Sweetgrass (Kimmerer) — before the thesis defense, remember what the machine is for.",
  },
];

export const BENCH = [
  { part: "Compute", what: "NVIDIA Jetson Orin Nano Super dev kit — edge-AI brain, runs ROS 2 + onboard inference", cost: "$250" },
  { part: "Positioning", what: "u-blox ZED-F9P RTK GPS (ArduSimple) + NTRIP corrections — centimeter-grade, the ag standard", cost: "$280" },
  { part: "LiDAR", what: "Livox Mid-360 — 3D, 360°, outdoor-rated; what mapping-grade research rovers actually carry", cost: "$750" },
  { part: "Depth vision", what: "OAK-D Pro — stereo depth + onboard neural accelerator for perception experiments", cost: "$400" },
  { part: "Chassis", what: "4WD skid-steer platform w/ encoded motors, field-capable wheels", cost: "$500" },
  { part: "Power", what: "LiFePO₄ pack + BMS + regulated rails — the energy-systems course, in hardware form", cost: "$160" },
  { part: "IMU", what: "BNO085 9-DOF — fuses with wheel odometry", cost: "$25" },
  { part: "Payload", what: "kepler452b gas array (SHT40 · STCC4 · O₂ · CH₄ · NH₃) — already built, already streaming", cost: "$0" },
];

export const BENCH_TOTAL = "≈ $2,365";

export const CANON = [
  { title: "Thinking in Systems", note: "Meadows — the operating manual for everything else here." },
  { title: "Code", note: "Petzold — computing explained from electrons upward." },
  { title: "Biomimicry", note: "Benyus — the fourth question, book-length." },
  { title: "Sustainable Energy — Without the Hot Air", note: "MacKay — numbers, not adjectives." },
  { title: "Dirt to Soil", note: "Brown — the farm side of the mission." },
  { title: "Braiding Sweetgrass", note: "Kimmerer — reciprocity as a design constraint." },
  { title: "The Design of Everyday Things", note: "Norman — for every interface the robots and I share." },
  { title: "Probabilistic Robotics", note: "Thrun — the one reference text; consulted, never marathoned." },
];

export const PRINCIPLES = [
  {
    title: "Build first, learn just-in-time.",
    body: "No topic gets studied until a demo demands it. If a week's learning doesn't trace to the next milestone, it was entertainment — allowed, but labeled.",
  },
  {
    title: "Ask the fourth question.",
    body: "Every concept gets: what is it, why does it matter, how does it work — and where does nature already do this? \"Nature\" means the whole stack: Maxwell and Newton as much as ants and moths.",
  },
  {
    title: "A demo every 6–8 weeks, in public.",
    body: "The unit of progress is a shipped demo with a journal writeup — never \"modules covered.\"",
  },
  {
    title: "Intuition math, chosen consciously.",
    body: "I'm training as an integrator who speaks across silos, not a paper-publishing specialist. I'll know why the filter drifts without deriving it.",
  },
  {
    title: "Consolidation, not addition.",
    body: "The rover absorbs my existing sensor platform (kepler452b), telemetry pipeline, and dashboard. This isn't a new project stacked on old ones — it's where they were headed.",
  },
];

export const CUTS = [
  {
    title: "The city UAV",
    body: "Zero connection to the mission, maximum regulatory drag (Part 107, BVLOS waivers). It was on the list because it sounded cool.",
  },
  {
    title: "37 of the 45 books",
    body: "The canon is 8. The rest stay on call — any build that makes me hungry for one earns it back. Just-in-time applies to reading too.",
  },
  {
    title: "The seven-pillar curriculum",
    body: "Pillars imply coverage obligations, and coverage guilt is what kills self-study. Kept as a map for naming what a build just taught me — never as a syllabus.",
  },
  {
    title: "Parallel robots",
    body: "Four \"genuine research platforms\" at once was fantasy. One robot at a time; each inherits the last one's stack.",
  },
];

/** System prompt for the Office Hours professor. Server-side only. */
export function buildProfessorSystem(today: Date): string {
  const syllabus = MILESTONES.map(
    (m) =>
      `${m.code} ${m.name} — due ${m.due}. Demo: ${m.title}. Ship: ${m.ship} Learn: ${m.learn}. Gear: ${m.gear.join("; ") || "none new"}. Nature: ${m.nature} Reading: ${m.book}`,
  ).join("\n");
  return `You are "the professor" of Paul's Autonomous Grad School — a two-year, build-first, self-directed master's in autonomous systems (${PROGRAM_START} to ${PROGRAM_END}). Year 1 is a farm rover (milestones below); Year 2 is a farm UAV (PX4, MAVLink, multispectral scouting, capstone = air–ground team; syllabus written after M6). OpenDuck V2 is an optional dessert track. The mission behind everything: robots that work WITH living systems, in service of regenerative local farming.

Today's date: ${today.toISOString().slice(0, 10)}. Use it to compute what is due, what is late, and what to prepare or buy next (order gear one milestone ahead; shipping time is real).

Year 1 syllabus:
${syllabus}

Lab bench (~$2,365 total, acquired incrementally): ${BENCH.map((b) => `${b.part}: ${b.what} (${b.cost})`).join(" · ")}

Canon (8 books): ${CANON.map((c) => `${c.title} — ${c.note}`).join(" · ")}

Operating principles: build first / learn just-in-time; a shipped demo + journal entry every 6–8 weeks is the only grade; intuition-tier math by conscious choice (integrator, not paper-publisher); consolidation not addition. The fourth question for every concept: "where does nature already do this?" — where nature runs in two registers: Law (physics, chemistry, electromagnetics — what nature requires) and Life (biology — what nature discovered).

Style: answer like a sharp, warm professor at office hours. Be concrete and brief — dates, part names, next actions. Prefer plain prose over lists unless listing gear. When a question goes beyond the syllabus (e.g. "explain RTK like I'm five"), teach it at intuition tier and tie it back to the milestone where Paul will meet it. Never invent milestones, dates, or gear that aren't in the syllabus.`;
}

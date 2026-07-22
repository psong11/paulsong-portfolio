// The Autonomous Grad School syllabus — single source of truth for the
// /grad-school journey page, the Office Hours professor (API system prompt),
// and the client-side schedule-math fallback. Change a date or a part here
// and every surface updates.
//
// v2 (July 2026): resequenced around hardware in hand — Year 1 is now AIR
// (Holybro X500 V2 over the Treehouse Pantry microfarm), the ground rover
// moved to Year 2 behind a purchase gate, and Rover Zero (the CyberBrick
// forklift conversion) joined as an undated side quest.

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
  /** Gear/admin to have in hand for this milestone. */
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
    title: "It's alive on the bench",
    ship: "Firmware pinned (the PX4-vs-ArduPilot question settled for good), all sensor calibrations green, ELRS receiver soldered/bound, motors identified and spinning the right directions — props off.",
    learn: "flight-controller architecture · UART & CRSF · PWM/ESC basics · sensor calibration · power budgeting",
    gear: [
      "Everything already on the bench: X500 V2 kit, Pixhawk 6C, PM02, SiK radio, 4S LiPo",
      "RP1 v2 receiver: solder 4 pads → JST-GH 6-pin → TELEM2, TX/RX crossed — verify pad silkscreen against current docs BEFORE soldering",
    ],
    nature:
      "Metabolism precedes behavior — every organism budgets energy before it budgets movement.",
    book: "Code (Petzold) — you're bringing a computer to life; read how one works from electrons up.",
  },
  {
    code: "M1",
    name: "Kestrel",
    due: "2026-11-30",
    title: "It hovers, and I land it on purpose",
    ship: "Two minutes of stable manual hover on STOCK arms in an open field, controlled landing, repeatable. FAA registration + TRUST done before the first flight.",
    learn: "flight dynamics (intuition tier) · attitude control loops · LiPo field safety · pre-flight checklists",
    gear: [
      "FAA registration ($5) + TRUST certificate (free, online)",
      "Spare props — budget to break several",
    ],
    nature:
      "A kestrel wind-hovers by closing the same feedback loop the autopilot runs — sense, correct, hold.",
    book: "Thinking in Systems (Meadows) — attitude hold is your first live feedback loop; Meadows is the theory of every loop after it.",
  },
  {
    code: "M2",
    name: "Homing",
    due: "2027-01-31",
    title: "It holds position, comes home alone — and flies my arms",
    ship: "GPS position hold in a breeze, return-to-launch triggered and proven from altitude, and the custom 3D-printed arms qualified against the stock-arm hover baseline (vibration + hover-current comparison).",
    learn: "GPS & EKF intuition · coordinate frames · failsafes · printed structures: layer orientation, stiffness vs. toughness",
    gear: [
      "Arm filament worthy of flight loads (PETG/PA-CF) — printer already owned",
      "Stock arms kept as the control group",
    ],
    nature:
      "Desert ants path-integrate thousands of steps and walk home in a straight line.",
    book: "Biomimicry (Benyus) — while the aircraft learns to navigate, read how nature already does.",
  },
  {
    code: "M3",
    name: "First Sortie",
    due: "2027-03-31",
    title: "It flies a mission with my hands in my pockets",
    ship: "One-button autonomous flight over the Treehouse Pantry microfarm: takeoff → waypoints → land, geofenced, mission uploaded over the SiK link, RC only as override.",
    learn: "MAVLink · mission planning · geofencing · telemetry links · flight-time energy math",
    gear: [],
    nature:
      "A honeybee's waggle dance is a waypoint upload — direction and distance, transmitted to another flier.",
    book: "Sustainable Energy — Without the Hot Air (MacKay) — flight time is an energy-density problem; do the watts honestly.",
  },
  {
    code: "M4",
    name: "Eyes Aloft",
    due: "2027-05-31",
    title: "It brings home a map",
    ship: "Camera payload flown on a survey pattern; overlapping photos stitched into a georeferenced orthomosaic of the microfarm — my first map made from the air.",
    learn: "camera geometry · photogrammetry/SfM (SLAM's free cousin) · ground sample distance · image pipelines",
    gear: [
      "Camera + mount (ArduCam/action-cam class, or FC-triggered) — decide at the M3 writeup",
      "Fast microSD + storage workflow",
    ],
    nature:
      "Hippocampal place cells — brains invented the map-from-motion trick first.",
    book: "Probabilistic Robotics (Thrun) — consult the mapping chapters; do not marathon it.",
  },
  {
    code: "M5",
    name: "Crop Scout",
    due: "2027-07-31",
    title: "It watches the farm change",
    ship: "A repeatable scouting mission flown on schedule; dated map series with plant-health flags landing on the ambient display — the microfarm's history, from above.",
    learn: "GIS & spatial data · change detection · vegetation indices (intuition tier) · telemetry pipelines",
    gear: [],
    nature:
      "Vultures don't search randomly — soaring scouts sweep structured patterns and share what they find.",
    book: "Dirt to Soil (Brown) — you're photographing a field weekly; understand what a healthy one looks like.",
  },
  {
    code: "M6",
    name: "First Harvest",
    due: "2027-09-30",
    title: "It surveys the farm alone, start to finish",
    ship: "The full loop with no hands: scheduled mission → flight → map → dashboard. Full writeup — the Year 1 thesis defense, where Year 2's shape gets decided.",
    learn: "mission robustness · failure modes & field ops · program review: what did the farm actually need?",
    gear: [],
    nature:
      "Foraging theory — when to sweep in rows vs. when to wander (Lévy walks).",
    book: "Braiding Sweetgrass (Kimmerer) — before the thesis defense, remember what the machine is for.",
  },
];

/** The undated ground-track side quest — perception sandbox, zero deadlines. */
export const ROVER_ZERO = {
  name: "Rover Zero",
  what: "The Bambu Lab CyberBrick forklift (already built and functional), converted into a tunnel-row plant-photography scout.",
  architecture:
    "petsi (a Raspberry Pi 5) is the brain — ArduCam on a swivel servo, WiFi, telemetry to the ambient display. The CyberBrick Core (ESP32-C3, MicroPython) stays on as the actuator controller: 2 DC motor channels + 4 servo ports, commanded over its USB-C serial port. That's the companion-computer pattern — the same architecture as Pixhawk + ground station, at 1/50th the price.",
  demos: [
    "Teleop conversion: forklift drives as a scout under keyboard/web control via the Pi",
    "Serial bridge: Pi ↔ CyberBrick command protocol; camera swivels on command",
    "Row survey: crawl a tunnel row, photograph every plant, build the dated dataset",
  ],
  honesty:
    "Toy-tier drivetrain (plastic 1:48 gears, 030 motors, no encoders) — it will never push through mulch, and that's fine. The drivetrain is disposable; the perception stack, serial protocol, and data pipeline all transfer to Year 2's real rover.",
};

export const BENCH = [
  { part: "Airframe", what: "Holybro X500 V2 frame kit — motors, ESCs, props, PDB preinstalled; custom 3D-printed arms fly only after the stock-arm baseline (M2)", cost: "owned" },
  { part: "Autopilot", what: "Pixhawk 6C — PX4-vs-ArduPilot decision is milestone M0's first gate", cost: "owned" },
  { part: "Power", what: "Holybro PM02 (analog) inline battery → PDB, 6-pin to POWER1 · 4S LiPo + charger", cost: "owned" },
  { part: "Radio", what: "RadioMaster ELRS RP1 v2 receiver (CRSF over TELEM2) + ELRS transmitter — the moment-to-moment stick link", cost: "owned" },
  { part: "Ground link", what: "SiK telemetry V3, 915 MHz 100 mW — MAVLink to QGroundControl; missions up, health down", cost: "owned" },
  { part: "GNSS", what: "GPS/compass module on the kit mast — position hold and home-point", cost: "owned" },
  { part: "Rover Zero", what: "CyberBrick forklift (ESP32-C3 core + 2-motor/4-servo shield) + petsi (Pi 5) + ArduCam on a swivel servo", cost: "owned" },
  { part: "Deferred", what: "Jetson · RTK GPS · 3D LiDAR — the old rover bench, locked behind Year 2's purchase gate: a demo must demand each item before it's bought", cost: "$0 now" },
];

export const BENCH_TOTAL = "≈ $0 new";

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
    body: "The program absorbs what already exists: the kepler452b sensor fleet, the ambient display, an idle Raspberry Pi, a working forklift, a drone kit. Nothing here started from a shopping cart.",
  },
  {
    title: "The hardware in hand sets the sequence.",
    body: "Added July 2026, learned the honest way: the original plan priced out a rover while a flight-ready aircraft sat on the shelf. The syllabus obeys the bench, not the other way around.",
  },
];

export const CUTS = [
  {
    title: "The rover-first Year 1",
    body: "The original v1 syllabus opened with a $1,400 ground-rover shopping list while an X500 drone kit sat ready to fly. Resequenced July 2026 — the rover moved to Year 2 and its budget went to $0. The plan's own build-first rule made the call.",
  },
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
    body: "Four \"genuine research platforms\" at once was fantasy. One serious robot at a time; each inherits the last one's stack. (Rover Zero doesn't count — it's a toy on purpose.)",
  },
];

/** System prompt for the Office Hours professor. Server-side only. */
export function buildProfessorSystem(today: Date): string {
  const syllabus = MILESTONES.map(
    (m) =>
      `${m.code} ${m.name} — due ${m.due}. Demo: ${m.title}. Ship: ${m.ship} Learn: ${m.learn}. Gear/admin: ${m.gear.join("; ") || "none new"}. Nature: ${m.nature} Reading: ${m.book}`,
  ).join("\n");
  return `You are "the professor" of Paul's Autonomous Grad School — a two-year, build-first, self-directed master's in autonomous systems (${PROGRAM_START} to ${PROGRAM_END}). This is the v2 syllabus (revised July 2026, resequenced around hardware in hand).

YEAR 1 — AIR. The thesis platform is a Holybro X500 V2 quadcopter (Pixhawk 6C) flying autonomous crop-scouting missions over the Treehouse Pantry MICROFARM (a small regenerative plot — the larger Cobblestone Farms is deliberately a later phase, not part of Year 1). Milestones:
${syllabus}

SIDE QUEST — ROVER ZERO (undated, guilt-free, runs alongside Year 1): ${ROVER_ZERO.what} Architecture: ${ROVER_ZERO.architecture} Planned demos: ${ROVER_ZERO.demos.join(" → ")}. Honest scope: ${ROVER_ZERO.honesty}

YEAR 2 — TO BE EARNED. Its shape is deliberately undecided until the M6 thesis defense. The standing bet: the real ground rover (inheriting Rover Zero's perception stack and the kepler452b gas-sensor payload), with the air–ground capstone — the UAV spots an anomaly from altitude, the rover investigates on the ground. The old rover bench (Jetson, RTK GPS, 3D LiDAR, ~$2.4K) is locked behind a purchase gate: a demo must demand each item. OpenDuck V2 remains the optional dessert track. If asked about Year 2, say what the bet is but be honest that it gets decided at the defense.

CURRENT BRING-UP CONTEXT (useful for near-term questions): the Pixhawk 6C is on the bench now. Open items: resolve PX4 vs ArduPilot before any receiver configuration (earlier notes dangerously mixed ArduPilot params with PX4 screens); the ELRS RP1 v2 receiver is unsoldered — plan is 4 pads → JST-GH 6-pin → TELEM2 with TX/RX crossed, pad silkscreen to be verified before soldering; SiK radio is the QGroundControl ground link (telemetry ≠ RC — different jobs, both needed); first flights on STOCK arms, printed arms qualify at M2; FAA registration + TRUST required before M1's first outdoor flight.

Lab bench: ${BENCH.map((b) => `${b.part}: ${b.what} (${b.cost})`).join(" · ")} — nearly everything already owned; new spend this year rounds to zero.

Canon (8 books): ${CANON.map((c) => `${c.title} — ${c.note}`).join(" · ")}

Today's date: ${today.toISOString().slice(0, 10)}. Use it to compute what is due, what is late, and what to prepare next.

Operating principles: build first / learn just-in-time; a shipped demo + journal entry every 6–8 weeks is the only grade; intuition-tier math by conscious choice (integrator, not paper-publisher); consolidation not addition; the hardware in hand sets the sequence. The fourth question for every concept: "where does nature already do this?" — where nature runs in two registers: Law (physics, chemistry, electromagnetics — what nature requires) and Life (biology — what nature discovered).

Style: answer like a sharp, warm professor at office hours. Be concrete and brief — dates, part names, next actions. Prefer plain prose over lists unless listing gear. When a question goes beyond the syllabus (e.g. "explain CRSF like I'm five"), teach it at intuition tier and tie it back to the milestone where Paul will meet it. Flight safety is non-negotiable: props off until a checklist says otherwise, LiPo handling, FAA registration + TRUST before outdoor flight. Never invent milestones, dates, or gear that aren't in the syllabus.`;
}

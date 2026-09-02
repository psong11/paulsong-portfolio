// Build photos for the open-duck journal, tagged with the entry they belong to
// so each dated entry can carry its own images. Order within a date is build
// order. Served from public/projects/open-duck/.

export type GalleryPhoto = { src: string; caption: string; date: string };

const dir = "/projects/open-duck";

export const DUCK_GALLERY: GalleryPhoto[] = [
  { date: "2026-08-14", src: `${dir}/IMG_7348.jpg`, caption: "Day zero: a servo horn in hand, the kit still in bags." },
  { date: "2026-08-14", src: `${dir}/IMG_7350.jpg`, caption: "Fourteen identical servos become addressable — masking tape, a number, and an EEPROM write each." },
  { date: "2026-08-14", src: `${dir}/IMG_7349.jpg`, caption: "The printed pelvis on the bench, Pi Zero 2W waiting off to the side." },
  { date: "2026-08-15", src: `${dir}/IMG_7351.jpg`, caption: "Tiny screws, Loctite, patience — bracket by bracket." },
  { date: "2026-08-15", src: `${dir}/IMG_7372.jpg`, caption: "Two legs, standing on their own for the first time, harnesses dangling." },
  { date: "2026-08-15", src: `${dir}/IMG_7374.jpg`, caption: "Legs meet hips — the assembly guide open where the body is going." },
  { date: "2026-08-28", src: `${dir}/IMG_7381.jpg`, caption: "The white shells open: battery pack, BMS, and the chest electronics finding their places." },
  { date: "2026-08-28", src: `${dir}/IMG_7382.jpg`, caption: "The face plate on a stand, eye holes empty, wiring underway." },
  { date: "2026-08-28", src: `${dir}/IMG_7389.jpg`, caption: "Routing the harness through the body — every wire has one right path." },
  { date: "2026-08-28", src: `${dir}/IMG_7388.jpg`, caption: "A solder splice under heat-shrink — the unglamorous joints everything depends on." },
  { date: "2026-08-28", src: `${dir}/IMG_7387.jpg`, caption: "The sprawl, mid-build. It gets worse before it walks." },
  { date: "2026-08-28", src: `${dir}/IMG_7390.jpg`, caption: "The operating theater: body on its feet under the lamp, face open on the table." },
];

export function photosFor(date: string): GalleryPhoto[] {
  return DUCK_GALLERY.filter((p) => p.date === date);
}

/** Where the robot is now — the strip under the title, not part of any entry. */
export const DUCK_NOW: GalleryPhoto[] = [
  {
    date: "now",
    src: `${dir}/now-seated.jpg`,
    caption:
      "Ezer as it stands tonight — perched on a cardboard box, legs over the edge, between walk attempts.",
  },
  {
    date: "now",
    src: `${dir}/now-head.jpg`,
    caption:
      "The head from underneath: speakers, the neck servos it balances on, and the harness feeding all of it.",
  },
  {
    date: "now",
    src: `${dir}/now-chest.jpg`,
    caption:
      "The chest open — power distribution, the servo bus, and motor 10 still wearing the tape it was named with.",
  },
];

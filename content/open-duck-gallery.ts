// Build photos for the open-duck journey page, in build order — day zero's
// motor naming through the body coming together. Served from
// public/projects/open-duck/.

export type GalleryPhoto = { src: string; caption: string };

const dir = "/projects/open-duck";

export const DUCK_GALLERY: GalleryPhoto[] = [
  { src: `${dir}/IMG_7348.jpg`, caption: "Day zero: a servo horn in hand, the kit still in bags." },
  { src: `${dir}/IMG_7350.jpg`, caption: "Fourteen identical servos become addressable — masking tape, a number, and an EEPROM write each." },
  { src: `${dir}/IMG_7349.jpg`, caption: "The printed pelvis on the bench, Pi Zero 2W waiting off to the side." },
  { src: `${dir}/IMG_7351.jpg`, caption: "Tiny screws, Loctite, patience — bracket by bracket." },
  { src: `${dir}/IMG_7372.jpg`, caption: "Two legs, standing on their own for the first time, harnesses dangling." },
  { src: `${dir}/IMG_7374.jpg`, caption: "Legs meet hips — the assembly guide open where the body is going." },
  { src: `${dir}/IMG_7381.jpg`, caption: "The white shells open: battery pack, BMS, and the chest electronics finding their places." },
  { src: `${dir}/IMG_7382.jpg`, caption: "The face plate on a stand, eye holes empty, wiring underway." },
  { src: `${dir}/IMG_7389.jpg`, caption: "Routing the harness through the body — every wire has one right path." },
  { src: `${dir}/IMG_7388.jpg`, caption: "A solder splice under heat-shrink — the unglamorous joints everything depends on." },
  { src: `${dir}/IMG_7387.jpg`, caption: "The sprawl, mid-build. It gets worse before it walks." },
];

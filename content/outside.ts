// Single source of truth for the "Outside" section — photos from life away
// from the screen, wild and built alike. Same contract as the other content
// files: add an entry here and it appears, no component edits needed.
// width/height are DISPLAY dimensions (EXIF-rotated), used for layout.

export type OutsidePhoto = {
  id: string;
  /** Path under /public. */
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const OUTSIDE: OutsidePhoto[] = [
  {
    id: "cliff",
    src: "/outside/cliff.jpg",
    alt: "Drone shot of a hiking group waving from a huge sandstone bluff in the Ozarks, pines all around.",
    width: 1600,
    height: 900,
  },
  {
    id: "trout",
    src: "/outside/trout.jpg",
    alt: "Paul on a drift boat holding a rainbow trout, morning fog still on the water.",
    width: 1200,
    height: 1600,
  },
  {
    id: "vista",
    src: "/outside/vista.jpg",
    alt: "Unbroken green forest canopy rolling to the horizon under cumulus clouds.",
    width: 1200,
    height: 1600,
  },
  {
    id: "morel",
    src: "/outside/morel.jpg",
    alt: "A freshly found morel mushroom held out on an open palm on the forest floor.",
    width: 1200,
    height: 1600,
  },
  {
    id: "cave",
    src: "/outside/cave.jpg",
    alt: "Curtained flowstone formations inside a cave, lit warm from below.",
    width: 1200,
    height: 1600,
  },
  {
    id: "ski",
    src: "/outside/ski.jpg",
    alt: "Five friends in ski gear lined up on the slope at dusk, mountains behind.",
    width: 1600,
    height: 1200,
  },
  {
    id: "tractor",
    src: "/outside/tractor.jpg",
    alt: "A blue New Holland tractor parked in tall grass at the farm.",
    width: 1600,
    height: 1200,
  },
  {
    id: "cranes",
    src: "/outside/cranes.jpg",
    alt: "Container cranes towering over stacked shipping containers at a port under a clear sky.",
    width: 1600,
    height: 1200,
  },
  {
    id: "tower",
    src: "/outside/tower.jpg",
    alt: "A red hydroponic grow tower mid-build, sensor wires sprouting from the top like a second crop.",
    width: 1200,
    height: 1600,
  },
];

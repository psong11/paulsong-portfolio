// Build photos for the kepler452b journey page. Newest chapter leads (the
// field deployment and the flyover layer), then the original bench build in
// rough chronological order. Short editorial captions (the full set lives in
// the project repo's assets/photos/captions.md). Images are served from
// public/projects/kepler452b/.

export type GalleryPhoto = { src: string; caption: string };

const dir = "/projects/kepler452b";

export const KEPLER_GALLERY: GalleryPhoto[] = [
  { src: `${dir}/IMG_7196.jpg`, caption: "Deployed: panel up, node sealed, sensor leads fanned across the farm work table." },
  { src: `${dir}/IMG_7202.jpg`, caption: "The X500 on a picnic table by the shade house — the farm-flyover layer arrives." },
  { src: `${dir}/IMG_7187.jpg`, caption: "Inside the node: three 18650s on the terminal block, mid-rewire." },
  { src: `${dir}/IMG_7189.jpg`, caption: "Gas sensing on the breadboard — electrochemical cell and breakout, staged on the panel." },
  { src: `${dir}/IMG_7188.jpg`, caption: "The printed 'M' pod — Mario's sensor grille, glanded and hung under the grow light." },
  { src: `${dir}/IMG_7186.jpg`, caption: "Indoor sun: characterizing the panel under the grow-light array." },
  { src: `${dir}/IMG_6910.jpg`, caption: "11:31 PM — the bench, the ambient dashboard glowing, a XIAO under the loupe." },
  { src: `${dir}/IMG_6914.jpg`, caption: "Cells staged, board under magnification — taking stock before the build." },
  { src: `${dir}/IMG_6915.jpg`, caption: "The solar power bank arrives (18W in · 12V/1A + 5V/1A out)." },
  { src: `${dir}/IMG_6916.jpg`, caption: "ArduCam 16MP autofocus under the loupe — eyeing the future vision layer." },
  { src: `${dir}/IMG_6918.jpg`, caption: "On the balcony: framed solar panel and the IP-rated enclosure, staged." },
  { src: `${dir}/IMG_6920.jpg`, caption: "Threading a waterproof cable gland into the enclosure wall." },
  { src: `${dir}/IMG_6921.jpg`, caption: "The sealed node in hand — three 18650s, terminal block — beside a seed packet." },
  { src: `${dir}/IMG_6922.jpg`, caption: "Multimeter reads 5.17 V off the pack — confirming a regulated source." },
  { src: `${dir}/IMG_6924.jpg`, caption: "12.16 V on the other rail — characterizing the solar bank's outputs." },
  { src: `${dir}/IMG_6925.jpg`, caption: "Flashing firmware — laptop in the terminal, a XIAO on a USB tether." },
  { src: `${dir}/IMG_6926.jpg`, caption: "The whole computer, thumbnail-sized: Seeed XIAO ESP32-C6, in macro." },
  { src: `${dir}/IMG_6927.jpg`, caption: "The unglamorous tax of working at this scale." },
  { src: `${dir}/IMG_6929.jpg`, caption: "The sprawl — the apartment workspace mid-build." },
  { src: `${dir}/IMG_6931.jpg`, caption: "Wiring on the floor: a board in helping-hands, jumpers fanning out." },
];

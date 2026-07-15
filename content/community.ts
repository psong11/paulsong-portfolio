// Single source of truth for the Community section — the orgs built, served,
// and shown up for. Same contract as the other content files: add an entry
// here and it appears on the page, no component edits needed.

export type CommunityEntry = {
  id: string;
  org: string;
  role: string;
  years: string;
  /** One short serif paragraph — the story, not the résumé line. */
  story: string;
  /** Optional mono receipt line under the story. */
  detail?: string;
  /** Photo stack — first photo is the front card; the rest tuck behind
   *  and shuffle forward on click, same as the art gallery stacks. */
  photos?: { src: string; alt: string }[];
  /** Card-box pixel ratio for the stack; every photo is cropped to cover it. */
  box?: { width: number; height: number };
};

export const COMMUNITY: CommunityEntry[] = [
  {
    id: "svyo",
    org: "South Valley Youth Orchestra",
    role: "Founder",
    years: "2017 – 2019",
    story:
      "Gilroy had no youth orchestra, so I started one. Eight musicians in a friend's basement grew to twenty-plus — I recruited players from school band programs, wrote to churches, colleges, and school districts until a pastor said yes to his fellowship hall, brought on a former band director to conduct, picked repertoire, booked the venue, printed and sold the tickets, and ran the marketing.",
    detail:
      "my hometown's first youth orchestra · 8 musicians in a basement → 20+ · debut concert: Sibelius, Mozart, Pirates of the Caribbean",
    photos: [
      {
        src: "/community/svyo-rehearsal.jpg",
        alt: "SVYO's full orchestra mid-rehearsal in a borrowed hall — twenty-odd young musicians at music stands, turning to smile at the camera, conductor on the podium.",
      },
      {
        src: "/community/svyo-concert.jpg",
        alt: "Seven SVYO musicians in concert black, arms around each other and beaming after the debut concert.",
      },
      {
        src: "/community/svyo-poster.jpg",
        alt: "SVYO debut concert poster — a green violin silhouette beside the program: Sibelius's Karelia Overture, Mozart's Symphony No. 25, and selections from Pirates of the Caribbean.",
      },
    ],
    box: { width: 1166, height: 884 },
  },
  {
    id: "hka",
    org: "Harvard Korean Association",
    role: "Board",
    years: "2020 – 2024",
    story:
      "Four years on the board, helping plan the annual culture show — performances from students and the Greater Boston community, food donated by local Korean restaurants we helped publicize in return, and raffles run with Korean skincare brands, gamers, and chefs. Four to five hundred people a year, big enough that it took over the Smith Campus Center.",
    detail: "annual culture show · 400–500 attendees · Smith Campus Center",
    photos: [
      {
        src: "/community/hka-night-market.jpg",
        alt: "HKA's night market filling the Smith Campus Center — a dense crowd around food trays, with stage screens glowing overhead.",
      },
      {
        src: "/community/hka-gayageum.jpg",
        alt: "A performer in a pink hanbok playing the gayageum on stage at the HKA culture show.",
      },
      {
        src: "/community/hka-food.jpg",
        alt: "Students lining up along trays of donated Korean food at the culture show.",
      },
      {
        src: "/community/hka-tables.jpg",
        alt: "Raffle and snack tables stacked with donated Korean goods, students browsing shoulder to shoulder.",
      },
      {
        src: "/community/hka-board.jpg",
        alt: "The HKA board — thirteen students grinning on stone steps in the fall sun.",
      },
    ],
    box: { width: 1156, height: 1045 },
  },
  {
    id: "aab",
    org: "Asian American Brotherhood",
    role: "Board",
    years: "2020 – 2024",
    story:
      "An Asian American service and activism organization. I planned trips out to Boston's Chinatown and ran Lunar New Year arts-and-crafts afternoons with young kids — construction paper, markers, and a lot of glue.",
    photos: [
      {
        src: "/community/aab-crafts.jpg",
        alt: "Paul in a green cap doing paper crafts across the table from a delighted little girl at a Lunar New Year event.",
      },
      {
        src: "/community/aab-group.jpg",
        alt: "AAB members in Harvard shirts around a craft table strewn with colored paper, holding up their creations.",
      },
    ],
    box: { width: 1050, height: 969 },
  },
  {
    id: "st-louise",
    org: "St. Louise Regional Hospital",
    role: "Patient Services",
    years: "2017 – 2019",
    story:
      "Front desk at my hometown hospital — fielding visitor inquiries, discharging patients, and running food and lab specimens where they needed to go.",
  },
  {
    id: "svks",
    org: "Silicon Valley Korean School",
    role: "Teaching Assistant",
    years: "2017 – 2020",
    story:
      "Taught Korean language and culture to elementary schoolers at the world's largest extracurricular Korean school.",
  },
];

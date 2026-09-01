// The career path as data — one stop per row on the landing page's "Path"
// section. Keep each lesson to two or three words; the metrics carry the
// weight, the lesson carries the voice.

export type PathStop = {
  /** Mono year range, e.g. "2021–24". */
  years: string;
  org: string;
  role: string;
  /** Two or three words: the thing this stop taught. */
  lesson: string;
  /** One quiet line of receipts — metrics or scope. Optional. */
  detail?: string;
  /** Org mark under /public/path-logos, shown left of the title. */
  logo?: string;
};

export const PATH: PathStop[] = [
  {
    years: "2016–20",
    org: "Christopher High School",
    logo: "/path-logos/chs.png",
    role: "Valedictorian",
    lesson: "learning to serve",
    detail:
      "734.5 community-service hours · President's Volunteer Service Award Gold · founder of South Valley Youth Orchestra",
  },
  {
    years: "2019",
    org: "Stanford University",
    logo: "/path-logos/stanford.png",
    role: "Horizon Scholar",
    lesson: "foray into higher education",
    detail:
      "One of 21 chosen nationwide · High School Summer College with fully covered tuition, room, and books",
  },
  {
    years: "2020–24",
    org: "Harvard University",
    logo: "/path-logos/harvard.png",
    role: "B.A. Computer Science, minor in Economics",
    lesson: "speaking the language of the modern world",
    detail: "CS core + the economics of markets and institutions",
  },
  {
    years: "2021–23",
    org: "Harvard Student Agencies DEV",
    logo: "/path-logos/hsa-dev.png",
    role: "Managing Director",
    lesson: "running a tech consultancy",
    detail: "$230K P&L · 21 client projects shipped · 20+ engineers, designers, sales",
  },
  {
    years: "2023",
    org: "Shure",
    logo: "/path-logos/shure.png",
    role: "Product Management Intern, SystemAPI",
    lesson: "computer networking",
    detail:
      "Shure's first SystemAPI device-monitoring GUI prototype (JavaScript + WebSockets), equipping 13+ support engineers",
  },
  {
    years: "2024",
    org: "UKG",
    logo: "/path-logos/ukg.png",
    role: "Data Engineering Intern",
    lesson: "managing enterprise data",
    detail: "Python/SQL utilities shipped to production Databricks via Azure DevOps CI/CD",
  },
  {
    years: "2024",
    org: "Walmart",
    logo: "/path-logos/walmart.png",
    role: "Product Management Intern",
    lesson: "automation at scale",
    detail: "40M+ competitive price decisions automated per year",
  },
  {
    years: "2024",
    org: "Harvard Ed Portal",
    logo: "/path-logos/harvard-ed-portal.png",
    role: "Teacher",
    lesson: "making STEM tangible",
    detail:
      "Personalized curricula guiding elementary students through hands-on engineering projects",
  },
  {
    years: "2025",
    org: "YMCA of Silicon Valley",
    logo: "/path-logos/ymca.png",
    role: "Teacher",
    lesson: "giving back to my old elementary school :)",
    detail:
      "Daily expanded-learning curriculum at Luigi Aprea Elementary — STEM, literacy, and PE",
  },
  {
    years: "2025–",
    org: "Walmart",
    logo: "/path-logos/walmart.png",
    role: "Product Manager, Membership",
    lesson: "modernizing legacy ops",
    detail:
      "Developing an iPad application used across 600 stores for ~50M customer interactions/yr",
  },
];

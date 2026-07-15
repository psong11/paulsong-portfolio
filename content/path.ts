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
};

export const PATH: PathStop[] = [
  {
    years: "2016–20",
    org: "Christopher High School",
    role: "Valedictorian",
    lesson: "learning to serve",
    detail:
      "734.5 community-service hours · President's Volunteer Service Award Gold · founder of South Valley Youth Orchestra",
  },
  {
    years: "2019",
    org: "Stanford University",
    role: "Horizon Scholar",
    lesson: "foray into higher education",
    detail:
      "one of 21 chosen nationwide · High School Summer College with fully covered tuition, room, and books",
  },
  {
    years: "2020–24",
    org: "Harvard University",
    role: "B.A. Computer Science, minor in Economics",
    lesson: "speaking the language of the modern world",
    detail: "CS core + the economics of markets and institutions",
  },
  {
    years: "2021–23",
    org: "Harvard Student Agencies DEV",
    role: "Managing Director",
    lesson: "running a tech consultancy",
    detail: "$230K P&L · 21 client projects shipped · 20+ engineers, designers, sales",
  },
  {
    years: "2023",
    org: "Shure",
    role: "Product Management Intern, SystemAPI",
    lesson: "computer networking",
    detail:
      "Shure's first SystemAPI device-monitoring GUI prototype (JavaScript + WebSockets), equipping 13+ support engineers",
  },
  {
    years: "2024",
    org: "UKG",
    role: "Data Engineering Intern",
    lesson: "managing enterprise data",
    detail: "Python/SQL utilities shipped to production Databricks via Azure DevOps CI/CD",
  },
  {
    years: "2024",
    org: "Walmart",
    role: "Product Management Intern",
    lesson: "automation at scale",
    detail: "40M+ competitive price decisions automated per year",
  },
  {
    years: "2024",
    org: "Harvard Ed Portal",
    role: "Teacher",
    lesson: "making STEM tangible",
    detail:
      "personalized curricula guiding elementary students through hands-on engineering projects",
  },
  {
    years: "2025",
    org: "YMCA of Silicon Valley",
    role: "Teacher",
    lesson: "showing up for kids",
    detail:
      "daily expanded-learning curriculum at Luigi Aprea Elementary — STEM, literacy, and PE",
  },
  {
    years: "2025–",
    org: "Walmart",
    role: "Product Manager, Membership",
    lesson: "modernizing legacy ops",
    detail:
      "Developing an iPad application used across 600 stores for ~50M customer interactions/yr",
  },
];

// The toolbox as data — capability clusters for the landing page.
// HARD RULE: no term without a receipt. Every cluster names the work that
// proves it; if a term can't point at a project above, it doesn't go in.

export type ToolCluster = {
  name: string;
  /** Short, concrete terms — rendered as a mono line, joined with " · ". */
  terms: string[];
  /** The projects/roles that prove the cluster. */
  receipts: string[];
};

export const TOOLBOX: ToolCluster[] = [
  {
    name: "Agentic AI & LLM systems",
    terms: [
      "Claude API & Claude Code",
      "vision-language pipelines",
      "tool calling",
      "structured outputs",
      "human-in-the-loop design",
      "prompt & context engineering",
    ],
    receipts: ["wy2z", "ONSC Digitizer", "Floradex", "Ezra"],
  },
  {
    name: "Edge & embedded",
    terms: [
      "ESP32-C6 firmware",
      "Jetson Orin Nano",
      "Raspberry Pi",
      "I²C sensing (INA219)",
      "solar power budgeting",
      "arduino-cli toolchains",
    ],
    receipts: ["kepler452b", "wy2z"],
  },
  {
    name: "IoT & physical systems",
    terms: [
      "Self-reporting telemetry",
      "remote monitoring",
      "closed-loop actuation",
      "digital twins",
      "WiFi provisioning",
    ],
    receipts: ["kepler452b", "wy2z", "Gas Simulator"],
  },
  {
    name: "Product",
    terms: [
      "Roadmap ownership",
      "stakeholder alignment",
      "RBAC & compliance",
      "payment-hardware integration",
      "boots-on-ground validation",
      "P&L literacy",
    ],
    receipts: ["1Desk @ Sam's Club", "HSA DEV"],
  },
  {
    name: "Data & cloud",
    terms: [
      "Python",
      "TypeScript",
      "SQL",
      "Spark & Databricks",
      "Azure DevOps CI/CD",
      "Supabase",
      "Vercel",
    ],
    receipts: ["UKG", "wy2z", "this site"],
  },
  {
    name: "Field work & teaching",
    terms: [
      "Deployment on working farms",
      "volunteer-ready handoffs",
      "teaching non-technical users",
      "STEM mentorship",
    ],
    receipts: ["ONSC Digitizer", "Cobblestone Farms"],
  },
];

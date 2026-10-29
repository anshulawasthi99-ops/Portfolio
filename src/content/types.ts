export type DiagramId = "subcontracting-flow" | "ticket-triage" | "delivery-timeline";

export type Block =
  | { type: "p"; text: string }
  | { type: "list"; title?: string; items: string[] }
  | { type: "insight"; label?: string; text: string }
  | { type: "diagram"; id: DiagramId; caption?: string }
  /** Shows the image if `src` is set (put files in /public/images/...). Otherwise shows a labelled slot, in dev only. */
  | { type: "screenshot"; alt: string; caption: string; src?: string }
  /** An editorial note to yourself. Visible in dev, hidden on production builds. */
  | { type: "placeholder"; note: string };

export type CaseSection = {
  id: string;
  title: string;
  blocks: Block[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  project: string;
  cardText: string;
  overview: string;
  tags: string[];
  theme: "light" | "dark" | "tint";
  meta: { label: string; value: string }[];
  seoDescription: string;
  sections: CaseSection[];
};

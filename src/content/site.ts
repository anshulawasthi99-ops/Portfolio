/**
 * Everything personal lives here: name, links, homepage copy.
 * Edit the text, save, and the site updates. No layout code to touch.
 */
export const site = {
  name: "Anshul Awasthi",
  wordmark: "anshul.",
  role: "Associate Product Manager",
  company: "ManufApp",
  location: "New Delhi, India",
  email: "anshulawasthi99@gmail.com",
  linkedin: "https://www.linkedin.com/in/anshul-awasthi-2559b5175",
  // Replace the PDF in /public/resume with your new one, keeping this file name (or change it here).
  resume: { file: "resume/Anshul_Awasthi_APM_Resume2026.pdf", path: "/resume/Anshul_Awasthi_APM_Resume2026.pdf" },
  description:
    "Anshul Awasthi is an Associate Product Manager who works close to customers, turns ambiguity into clear product decisions, and builds parts of the solution with AI-assisted development.",
  nav: [
    { label: "Work", href: "/#work" },
    { label: "How I Think", href: "/#how-i-think" },
    { label: "About", href: "/#about" },
  ],
};

export const hero = {
  eyebrow: "PRODUCT MANAGER · CURIOUS PROBLEM SOLVER",
  headlineLine1: "I go where the problem is,",
  headlineLine2: "then figure out what to build.",
  intro: [
    "Hey, I'm Anshul. I work on products that make complicated things simpler.",
    "Over the last few years I've sat with people on factory floors, helped decide what gets built, and lately started building some of it myself.",
    "I like the whole stretch: working out what's actually wrong, and watching something useful come alive.",
  ],
  primaryCta: { label: "Explore my work", href: "#work" },
  secondaryCta: { label: "Get in touch", href: "#contact" },
  strip:
    "Associate Product Manager at ManufApp, based in New Delhi. Open to APM and PM roles in SaaS, fintech, logistics, consumer tech, AI and enterprise products.",
  fieldNotes: {
    title: "Field notes",
    plantsLabel: "Plants where I've implemented ManufApp",
    plants: ["Food", "Electronics", "Assembly", "Recycling"],
    visitedLabel: "Visited to study subcontracting",
    visitedValue: "10 to 12 plants",
    nowLabel: "Right now",
    nowValue: "Prototyping and building with Claude Code",
  },
};

export const proof = {
  items: [
    { value: "10–12", text: "manufacturing plants visited to study subcontracting" },
    { value: "~2 months", text: "for a dedicated copper recycling app, through to user adoption" },
    { value: "15+", text: "companies on a vendor collaboration platform I led the launch of" },
    { value: "3.5 years", text: "across discovery, delivery and continuous improvement" },
  ],
  note: "Figures are my own approximations from the work, not audited numbers.",
};

export const hiring = {
  headline: "If you're hiring, here's the short version.",
  sub: "Three things I'd bring to a product team, and the evidence behind each.",
  cards: [
    {
      title: "I find the real problem",
      line: "I'd rather watch the work happen than rely on a second-hand description of it.",
      evidence: [
        "Implemented ManufApp in food, electronics, assembly and recycling plants",
        "Visited 10–12 plants to study how subcontracting actually runs",
        "Customer interviews, stakeholder workshops and usability testing",
      ],
    },
    {
      title: "I turn it into something a team can ship",
      line: "I plan 14-day sprints so each one tells a coherent story, not a random pile of tickets.",
      evidence: [
        "About 90% of committed sprint scope delivered",
        "Requirement documentation cut from roughly 5 days to 2, with clearer PRDs and process flows",
        "Knowledge-transfer sessions with developers and QA",
      ],
    },
    {
      title: "I can build to find out",
      line: "When a quick prototype will answer the question faster than a debate, I build it.",
      evidence: [
        "10–15 workflows and internal tools prototyped; validation from ~2 weeks to 2–3 days",
        "Web and mobile apps for a recycling client, built with AI assistance",
        "Inventory check tool: roughly 60 minutes down to 5–6",
      ],
    },
  ],
  footnote: "Numbers are approximate and come from my own work records and resume.",
};

export const work = {
  headline: "A few problems I've worked on.",
  sub: "Different problems. Different approaches. The same curiosity.",
};

export const how = {
  headline: "I don't think good product decisions happen only at a desk.",
  intro: [
    "I've spent time implementing software in food, electronics, assembly, and recycling plants.",
    "Those experiences taught me that what people say they need and what actually helps them aren't always the same thing.",
  ],
  quote:
    "A small extra step in software might not sound like much in a meeting. But when someone repeats it dozens of times a day, it matters.",
  outro: "That's why I like understanding the context before deciding what to build.",
  stepsTitle: "How I tend to work",
  stepsNote: "Not a method I'm selling. It's just how I describe what I do, and it usually loops.",
  steps: [
    { name: "Observe", text: "Watch the work happen as it really does, ideally in person." },
    { name: "Understand", text: "Work out what is actually in the way. It isn't always what people ask for." },
    { name: "Prioritize", text: "Decide what matters most right now, and what can wait." },
    { name: "Build", text: "Write the spec, prototype it, or build a first version." },
    { name: "Learn", text: "See what happens with real users, then go around again." },
  ],
};

export const builder = {
  headline: "I used to explain what needed to be built. Now, I can build parts of it too.",
  paragraphs: [
    "In March 2026, I started experimenting with Claude Code.",
    "At first, I used it to turn ideas into quick designs and prototypes. As I got more comfortable, I began working across frontend, backend, and Flutter development.",
    "It changed how quickly I could explore an idea and see whether it actually worked.",
    "I still believe deciding what to build is the hardest part. But being able to build and test parts of a solution myself has changed the way I approach product problems.",
  ],
  honesty:
    "I'm not a software engineer, and I don't pretend to be. Building helps me explore ideas, validate workflows and ship selected pieces myself.",
  stages: [
    { name: "Requirements and coordination", text: "PRDs, workflows, user stories and acceptance criteria. Working with engineering and QA to get them built." },
    { name: "Prototypes and designs", text: "Turning ideas into something people can react to, first in Figma and then, from March 2026, with Claude Code." },
    { name: "Hands-on building", text: "Contributing to frontend, backend and Flutter work with AI assistance, for selected features.", current: true },
  ],
};

export const other = {
  headline: "Other things I've worked on.",
  sub: "Smaller in scope, same instinct.",
  items: [
    {
      title: "E-way bill integration",
      text: "Studied API integration and built functionality using WhiteBooks APIs to generate e-way bills against shipments.",
    },
    {
      title: "Inventory reconciliation",
      text: "Built a tool that reduced stock discrepancy checking from approximately 60 minutes to 5–6 minutes.",
      metric: "~60 min to 5–6 min",
    },
    {
      title: "Rapid prototyping",
      text: "Built and validated approximately 10–15 workflows, dashboards and internal tools, shortening validation cycles from around two weeks to 2–3 days.",
      metric: "~2 weeks to 2–3 days",
    },
  ],
};

export const about = {
  headline: "A little about me.",
  paragraphs: [
    "I'm Anshul, a product manager who enjoys getting into the details of how things work.",
    "I started my career in manufacturing operations, where I got to see how everyday processes work, where they break down, and how much difference a small improvement can make.",
    "At ManufApp, I moved into product, working with customers, implementation teams, developers, and leadership to figure out what we should build next.",
    "Over time, I've worked on everything from mapping complex business workflows and planning sprints to building product features and experimenting with AI-assisted development.",
    "Some of my most interesting lessons have come from factory visits, unexpected user feedback, and ideas that looked simple until we tried building them.",
    "Outside of any particular industry, I'm interested in building products that genuinely make people's work or lives easier.",
  ],
  factsTitle: "The short timeline",
  facts: [
    { label: "Now", value: "Associate Product Manager, ManufApp (Apr 2026 onwards)" },
    { label: "Before that", value: "Product Analyst, ManufApp (Jun 2023 to Mar 2026)" },
    { label: "Before ManufApp", value: "Graduate Apprentice Trainee in Continuous Improvement, CNH Industrial (Jun 2022 to May 2023)" },
    { label: "Education", value: "MBA in Project Management, Dr. D.Y. Patil University (2024–2026). B.Tech in Mechanical Engineering, Sharda University (2017–2021)" },
    { label: "Recognition", value: "Design patent for an electric hub-less motorcycle. Platinum award at the 7th CII National Poka-Yoke competition (LCA category)" },
  ],
};

export const contact = {
  headline: "Have an interesting problem to solve?",
  copy: "I'm always happy to talk about products, ideas, and opportunities to build something useful.",
};

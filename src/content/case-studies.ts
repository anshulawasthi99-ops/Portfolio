import type { CaseStudy } from "./types";

/**
 * Case studies live here as plain data. To add one, add an object to this array.
 *
 * Rules I followed while drafting (please keep them):
 *  - Only facts from the brief and resume. Nothing invented.
 *  - Anything still missing is a { type: "placeholder" } block. They show in `npm run dev`
 *    and are hidden on production builds, so unfinished thoughts never go public by accident.
 */
export const caseStudies: CaseStudy[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "subcontracting",
    title: "Where's our material? Who should get the next job?",
    subtitle: "From factory visits to a connected subcontracting workflow.",
    project: "End-to-end Subcontracting Management",
    cardText:
      "After visiting 10–12 manufacturing plants, I built a subcontracting module connecting jobwork orders, material movement, vendor tracking, expected deliveries, and vendor recommendations.",
    overview:
      "Manufacturers send material out to vendors for jobwork all the time, and then somebody has to keep track of it. After visiting 10 to 12 plants where subcontracting really mattered, I built a module that connects orders, material movement, vendors and expected deliveries into one workflow, and helps answer who should get the next job.",
    tags: ["Product Discovery", "End-to-End Ownership", "Workflow Design", "Decision Support"],
    theme: "light",
    meta: [
      { label: "My role", value: "Discovery, workflow design and the build, end to end" },
      { label: "Team", value: "I built the module independently" },
      { label: "Where it started", value: "10–12 manufacturing plants" },
    ],
    seoDescription:
      "A product case study: how visiting 10–12 manufacturing plants led to a connected subcontracting workflow with vendor tracking and recommendations.",
    sections: [
      {
        id: "context",
        title: "Material goes out. Then what?",
        blocks: [
          { type: "p", text: "In a lot of manufacturing businesses, subcontracting is a normal part of the week. Material is sent to outside vendors for jobwork, and the processed material has to come back." },
          { type: "p", text: "That leaves a company with a few questions it needs answered all the time. What material is with each vendor? What work is still pending? When is processed material expected back?" },
        ],
      },
      {
        id: "discovery",
        title: "I started by going to the plants",
        blocks: [
          { type: "p", text: "I visited 10 to 12 manufacturing plants where subcontracting played a significant role. The point was to see how it ran on a normal day, before deciding what a module for it should do." },
          { type: "placeholder", note: "Add 2 or 3 specific things you saw on those visits (how follow-ups were tracked, where material got lost track of, who chased whom). Real observations only. No invented quotes." },
        ],
      },
      {
        id: "insight",
        title: "The problem wasn't a missing screen",
        blocks: [
          { type: "insight", label: "What I realised", text: "The information existed. It was just disconnected, and that is what made coordinating with vendors hard." },
          { type: "p", text: "Seen from the shop floor, the order, the dispatch, the vendor and the expected return are all one story. Treating them as separate things is what made the follow-up so painful." },
        ],
      },
      {
        id: "decisions",
        title: "One connected workflow, not a set of tools",
        blocks: [
          { type: "p", text: "The obvious version would have been a few separate screens: one for orders, one for dispatch, one for vendors. I went the other way and designed a single flow, so an order stays linked to the material that moved and the vendor holding it." },
          { type: "p", text: "Vendor recommendation sits inside that same flow. It looks at workload, quality and rates together, so \"who should get the next job?\" gets answered with context instead of memory." },
          { type: "placeholder", note: "Trade-offs: what did you decide NOT to build, or what did you simplify? Why that call? (Not supplied in the brief, so left for you.)" },
        ],
      },
      {
        id: "built",
        title: "What I built",
        blocks: [
          { type: "list", items: [
            "Subcontracting order creation",
            "Material dispatch for jobwork",
            "Material movement tracking",
            "Vendor-wise material visibility",
            "Expected return tracking",
            "Follow-up visibility",
            "Vendor recommendations based on workload, quality and rates",
          ] },
          { type: "diagram", id: "subcontracting-flow", caption: "How the pieces connect. A conceptual illustration, not a screenshot." },
          { type: "screenshot", alt: "Subcontracting order screen", caption: "Subcontracting order and material movement view", },
          { type: "screenshot", alt: "Vendor-wise material visibility screen", caption: "Vendor-wise visibility and expected returns" },
        ],
      },
      {
        id: "outcomes",
        title: "What it makes possible",
        blocks: [
          { type: "list", items: [
            "A clear view of which material is with which vendor",
            "What's pending, and when it's due back",
            "A better starting point for choosing the next vendor, with workload, quality and rates in one place",
          ] },
          { type: "placeholder", note: "No time-saving or adoption numbers are published for this module on purpose. Your resume mentions vendor selection dropping from 20–30 minutes to 1–2 minutes. Confirm whether that is THIS module before adding it. It may belong to the vendor collaboration platform." },
        ],
      },
      {
        id: "learned",
        title: "What I took from it",
        blocks: [
          { type: "p", text: "Features are easy to list. Workflows are harder to see. Being at the plants is what made the connection between the pieces obvious, and that is the part I wouldn't have got from a requirements document." },
          { type: "placeholder", note: "Add one more lesson in your own words if there is one." },
        ],
      },
      {
        id: "different",
        title: "What I'd do differently",
        blocks: [
          { type: "placeholder", note: "Your honest answer goes here. What would you change if you started again? Hiring managers read this section closely." },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "support-triage",
    title: "What if a support ticket could start solving itself?",
    subtitle: "Building an internal support platform with AI-assisted triage.",
    project: "Internal Product Support and Ticketing Platform",
    cardText:
      "Working with two teammates, I helped build a ticketing platform that captures issues inside the application, supports AI-assisted first-level analysis, tracks enhancements across sprints, and gives QA and customer success their own dashboards.",
    overview:
      "Raising a bug, a question or an idea shouldn't mean leaving the product to write an email. With two teammates, I helped build an internal ticketing platform that captures issues inside the application, gives each one an AI-assisted first look, and gives QA and customer success a clear view of what's coming in and what's planned.",
    tags: ["AI Product Thinking", "Internal Tools", "Cross-functional Collaboration", "Product Operations"],
    theme: "dark",
    meta: [
      { label: "My role", value: "Product thinking and delivery as part of a three-person team" },
      { label: "Team", value: "Three people, including me" },
      { label: "Used by", value: "Customers raising issues, plus QA and customer success" },
    ],
    seoDescription:
      "A product case study: an internal ticketing platform with in-app issue capture, AI-assisted first-level analysis and dashboards for QA and customer success.",
    sections: [
      {
        id: "context",
        title: "Two sides of the same problem",
        blocks: [
          { type: "p", text: "Users needed an easier way to raise bugs, questions and enhancements from inside the application." },
          { type: "p", text: "Internal teams had their own side of it. They needed better visibility into tickets, customer issues and planned releases." },
        ],
      },
      {
        id: "discovery",
        title: "Where the need showed up",
        blocks: [
          { type: "p", text: "It showed up from both directions: people raising issues wanted an easier way in, and the people receiving them wanted a clearer picture." },
          { type: "placeholder", note: "How did you actually notice this? A recurring complaint, a messy spreadsheet, a specific incident? Add the real trigger. No fabricated quotes." },
          { type: "placeholder", note: "Your specific contribution within the three-person team (what did you own vs. teammates)?" },
        ],
      },
      {
        id: "insight",
        title: "Capture it where it happens",
        blocks: [
          { type: "insight", label: "The idea", text: "Capture the issue where it happens. The platform lives inside the application and grabs a screenshot of the current screen, so nobody has to leave what they were doing." },
        ],
      },
      {
        id: "decisions",
        title: "What I decided, and what I didn't claim",
        blocks: [
          { type: "list", items: [
            "Capture issues in-app, with a screenshot of the current screen",
            "Sort every ticket as a bug, a query or an enhancement",
            "Let AI do a first-level analysis, with people still in the loop for the rest",
            "Tie enhancements to sprints and releases so there's one place to see what's planned",
            "Give QA and customer success their own dashboards, including customer-wise ticket analysis",
          ] },
          { type: "insight", label: "What this is, and isn't", text: "This is AI taking a first pass at tickets. It isn't an agent that closes every ticket, and I'm not claiming it does." },
          { type: "placeholder", note: "Trade-offs: what did the AI NOT do, and why? Where did you decide a human should stay in the loop?" },
        ],
      },
      {
        id: "built",
        title: "What was built",
        blocks: [
          { type: "diagram", id: "ticket-triage", caption: "How a ticket moves through the platform. A conceptual illustration, not a screenshot." },
          { type: "screenshot", alt: "In-app issue capture", caption: "In-app issue capture with screenshot" },
          { type: "screenshot", alt: "QA and customer success dashboards", caption: "QA and customer success dashboard" },
        ],
      },
      {
        id: "outcomes",
        title: "What changed",
        blocks: [
          { type: "p", text: "Some queries and apparent bugs now get resolved without a person needing to step in. For everything else, QA and customer success work from dashboards that show tickets by customer, and enhancements are tracked across sprints and releases." },
          { type: "placeholder", note: "No automation rates, resolution percentages or time-saved figures are published on purpose. If you track any, add them with a note on how they were measured." },
        ],
      },
      {
        id: "learned",
        title: "What I took from it",
        blocks: [
          { type: "p", text: "AI worked best here as a first filter, with people still owning the outcome. Being clear about that line made the product easier to trust and easier to explain." },
          { type: "placeholder", note: "Add anything you learned working as a three-person team." },
        ],
      },
      {
        id: "different",
        title: "What I'd do differently",
        blocks: [
          { type: "placeholder", note: "Your honest answer goes here." },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "recycling-app",
    title: "Could we get a factory using its software in two months?",
    subtitle: "Experimenting with dedicated software for a recycling business.",
    project: "Dedicated Application for a Copper Scrap Recycling Company",
    cardText:
      "I built web and mobile applications for a copper scrap recycling company on dedicated infrastructure, working across process study, stakeholder alignment, planning and implementation. It reached user adoption in about two months.",
    overview:
      "Manufacturing workflows vary a lot from one business to the next. I wanted to know if a dedicated, customer-specific application could help us solve complicated problems faster than a shared product setup. For a copper scrap recycling company, we got from process study to real user adoption in about two months.",
    tags: ["Product Experimentation", "Full-Stack AI-Assisted Building", "Stakeholder Management", "Adoption"],
    theme: "tint",
    meta: [
      { label: "My role", value: "Process study, planning, building, and supporting adoption" },
      { label: "Built", value: "A web application and a mobile application" },
      { label: "Time to adoption", value: "About two months, observed" },
    ],
    seoDescription:
      "A product case study: a dedicated web and mobile app for a copper scrap recycling company, from process study to user adoption in about two months.",
    sections: [
      {
        id: "context",
        title: "A question about the default",
        blocks: [
          { type: "p", text: "Manufacturing workflows can look very different from one business to the next. A shared product setup has to be adapted for each customer." },
          { type: "p", text: "So I wanted to test a question: could a dedicated, customer-specific application let us solve complex problems faster, and adapt more closely to how the operation really runs?" },
        ],
      },
      {
        id: "discovery",
        title: "Starting with their process",
        blocks: [
          { type: "p", text: "I began by studying the client's processes and getting stakeholders and users aligned on what the application needed to do." },
          { type: "placeholder", note: "Add what you learned about the copper recycling process (weighing, grading, stock movement, etc.). Only things you actually observed." },
        ],
      },
      {
        id: "insight",
        title: "Where the time usually goes",
        blocks: [
          { type: "p", text: "In the past, implementations that needed repeated modifications before users adopted them often took six to seven months." },
          { type: "insight", label: "The bet", text: "If the software starts out closer to the customer's real process, there might be less back and forth before people actually use it." },
        ],
      },
      {
        id: "decisions",
        title: "What I decided to try",
        blocks: [
          { type: "list", items: [
            "Use dedicated server infrastructure for this customer",
            "Shape the workflows around the customer's actual processes",
            "Build both a web application and a mobile application",
            "Use AI-assisted development across frontend, backend and Flutter",
            "Stay close to users through implementation, to support adoption",
          ] },
          { type: "placeholder", note: "Trade-offs: what does a dedicated setup cost (maintenance, upgrades, support)? What did you choose to leave out of version one?" },
        ],
      },
      {
        id: "built",
        title: "What was built",
        blocks: [
          { type: "p", text: "A web application and a mobile application, built around the company's own processes and rolled out to its users." },
          { type: "screenshot", alt: "Recycling web application", caption: "Web application" },
          { type: "screenshot", alt: "Recycling mobile application", caption: "Mobile application" },
        ],
      },
      {
        id: "outcomes",
        title: "What happened",
        blocks: [
          { type: "diagram", id: "delivery-timeline", caption: "Observed comparison, drawn roughly to scale. An illustration." },
          { type: "p", text: "Implementation, including user adoption, was completed in approximately two months. The historical comparison for implementations that needed repeated modifications is six to seven months." },
          { type: "list", title: "How to read that number", items: [
            "It's an observed comparison, not a controlled experiment",
            "I can't say private hosting or AI alone caused it. Product customisation, AI-assisted development, the implementation approach and user alignment all played a part",
            "It doesn't mean every implementation can be done in two months",
          ] },
        ],
      },
      {
        id: "learned",
        title: "What I took from it",
        blocks: [
          { type: "p", text: "The useful part wasn't the two-month figure. It was asking whether the default way of delivering software was the only way, and then testing a different one with a real customer." },
          { type: "placeholder", note: "Add anything that surprised you during adoption." },
        ],
      },
      {
        id: "different",
        title: "What I'd do differently",
        blocks: [
          { type: "placeholder", note: "Your honest answer goes here." },
        ],
      },
    ],
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);

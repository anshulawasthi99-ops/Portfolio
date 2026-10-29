import Link from "next/link";
import { Container, SectionHeading, Tag } from "./ui";
import { work } from "@/content/site";
import { caseStudies } from "@/content/case-studies";
import { SubcontractingVisual, TicketVisual, RecyclingVisual } from "./ProjectVisuals";
import type { CaseStudy } from "@/content/types";

const visuals: Record<string, () => React.ReactNode> = {
  subcontracting: () => <SubcontractingVisual />,
  "support-triage": () => <TicketVisual />,
  "recycling-app": () => <RecyclingVisual />,
};

const themes = {
  light: { card: "bg-white text-ink border-line", visual: "bg-paper dot-grid", muted: "text-muted", tone: "light" as const },
  dark: { card: "bg-ink text-paper border-ink", visual: "bg-[#33373D]", muted: "text-paper/75", tone: "dark" as const },
  tint: { card: "bg-tint text-ink border-accent/20", visual: "bg-[#DCE6FF]", muted: "text-ink/75", tone: "light" as const },
};

function Card({ cs, flip }: { cs: CaseStudy; flip: boolean }) {
  const t = themes[cs.theme];
  return (
    <article
      className={`group relative grid overflow-hidden rounded-3xl border transition-shadow duration-300 hover:shadow-[0_24px_50px_-28px_rgba(32,33,36,0.5)] lg:grid-cols-2 ${t.card}`}
    >
      <div className={`flex min-h-[280px] items-center justify-center p-8 sm:p-12 ${t.visual} ${flip ? "lg:order-2" : ""}`}>
        {visuals[cs.slug]?.()}
      </div>
      <div className="flex flex-col justify-center p-8 sm:p-12">
        <p className={`text-sm ${t.muted}`}>{cs.project}</p>
        <h3 className="mt-3 font-serif text-3xl leading-[1.1] sm:text-4xl">
          <Link
            href={`/work/${cs.slug}`}
            className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-offset-[-6px]"
          >
            {cs.title}
          </Link>
        </h3>
        <p className="mt-3 text-lg italic">{cs.subtitle}</p>
        <p className={`mt-5 leading-7 ${t.muted}`}>{cs.cardText}</p>
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Skills shown">
          {cs.tags.map((tag) => (
            <Tag key={tag} tone={t.tone}>
              {tag}
            </Tag>
          ))}
        </ul>
        <p className="mt-7 text-[15px] font-medium underline decoration-1 underline-offset-4 group-hover:decoration-2">
          Read the story
        </p>
      </div>
    </article>
  );
}

export function SelectedWork() {
  return (
    <section id="work" aria-labelledby="work-title" className="border-y border-line bg-white/50 py-20 sm:py-28">
      <Container>
        <SectionHeading id="work-title" title={work.headline} sub={work.sub} />
        <div className="mt-12 space-y-6">
          {caseStudies.map((cs, i) => (
            <Card key={cs.slug} cs={cs} flip={i % 2 === 1} />
          ))}
        </div>
      </Container>
    </section>
  );
}

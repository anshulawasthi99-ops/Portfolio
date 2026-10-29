import { Check } from "lucide-react";
import { Container, SectionHeading } from "./ui";
import { hiring } from "@/content/site";

export function HiringBrief() {
  return (
    <section aria-labelledby="hiring-title" className="py-20 sm:py-28">
      <Container>
        <SectionHeading id="hiring-title" title={hiring.headline} sub={hiring.sub} />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {hiring.cards.map((c) => (
            <article key={c.title} className="flex flex-col rounded-2xl border border-line bg-white p-7">
              <h3 className="font-serif text-3xl leading-tight">{c.title}</h3>
              <p className="mt-3 text-[15px] leading-7 text-muted">{c.line}</p>
              <ul className="mt-6 space-y-3 border-t border-line pt-6">
                {c.evidence.map((e) => (
                  <li key={e} className="flex gap-3 text-[15px] leading-6">
                    <Check aria-hidden size={18} className="mt-0.5 shrink-0 text-accent" />
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted">{hiring.footnote}</p>
      </Container>
    </section>
  );
}

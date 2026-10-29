import { Container } from "./ui";
import { about } from "@/content/site";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-t border-line py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 id="about-title" className="font-serif text-4xl leading-[1.08] tracking-tight sm:text-5xl">
              {about.headline}
            </h2>
            <div className="mt-8 max-w-[38rem] space-y-5 text-lg leading-8 text-ink/85">
              {about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <aside className="lg:col-span-5" aria-label={about.factsTitle}>
            <div className="rounded-2xl border border-line bg-white p-7">
              <h3 className="font-serif text-2xl">{about.factsTitle}</h3>
              <dl className="mt-5 divide-y divide-line">
                {about.facts.map((f) => (
                  <div key={f.label} className="py-4">
                    <dt className="text-sm text-muted">{f.label}</dt>
                    <dd className="mt-1 text-[15px] leading-6">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}

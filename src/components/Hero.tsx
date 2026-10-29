import { Container, ButtonLink } from "./ui";
import { hero } from "@/content/site";

export function Hero() {
  const f = hero.fieldNotes;
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden border-b border-line">
      <div
        aria-hidden
        className="dot-grid pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black_30%,transparent)]"
      />
      <Container className="relative grid gap-14 pb-16 pt-14 sm:pt-20 lg:grid-cols-12 lg:gap-10 lg:pb-24 lg:pt-24">
        <div className="lg:col-span-7">
          <p className="settle settle-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent-ink">
            {hero.eyebrow}
          </p>
          <h1
            id="hero-title"
            className="settle settle-2 mt-6 text-balance font-serif text-[clamp(2.9rem,7.2vw,5.5rem)] leading-[1.02] tracking-tight"
          >
            {hero.headlineLine1}
            <span className="mt-1 block italic text-accent-ink">{hero.headlineLine2}</span>
          </h1>
          <div className="settle settle-3 mt-8 max-w-xl space-y-4 text-lg leading-8 text-ink/85">
            {hero.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="settle settle-3 mt-9 flex flex-wrap gap-3">
            <ButtonLink href={hero.primaryCta.href}>{hero.primaryCta.label}</ButtonLink>
            <ButtonLink href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>
          <p className="settle settle-4 mt-10 max-w-xl border-t border-line pt-5 text-sm leading-6 text-muted">
            {hero.strip}
          </p>
        </div>

        <aside className="settle settle-4 lg:col-span-5 lg:pt-6" aria-label="Field notes">
          <div className="relative mx-auto max-w-md rounded-2xl border border-line bg-white p-7 shadow-[0_18px_40px_-24px_rgba(32,33,36,0.35)] lg:rotate-[1.4deg]">
            <span aria-hidden className="absolute -top-2 left-8 h-4 w-4 rounded-full bg-accent shadow-sm" />
            <p className="font-serif text-3xl">{f.title}</p>

            <p className="mt-6 text-sm text-muted">{f.plantsLabel}</p>
            <ul className="mt-3 divide-y divide-line border-y border-line">
              {f.plants.map((p) => (
                <li key={p} className="flex items-center gap-3 py-2.5 text-[15px]">
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {p}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm text-muted">{f.visitedLabel}</p>
            <p className="mt-1 font-serif text-3xl">{f.visitedValue}</p>

            <p className="mt-6 text-sm text-muted">{f.nowLabel}</p>
            <p className="mt-1 text-[15px]">{f.nowValue}</p>
          </div>
        </aside>
      </Container>
    </section>
  );
}

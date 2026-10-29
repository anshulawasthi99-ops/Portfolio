import Image from "next/image";
import Link from "next/link";
import { Container, Tag } from "./ui";
import { Diagram } from "./Diagrams";
import { showPlaceholders } from "@/lib/flags";
import { caseStudies } from "@/content/case-studies";
import type { Block, CaseStudy } from "@/content/types";

function visible(b: Block) {
  if (showPlaceholders) return true;
  if (b.type === "placeholder") return false;
  if (b.type === "screenshot" && !b.src) return false;
  return true;
}

function BlockView({ b }: { b: Block }) {
  switch (b.type) {
    case "p":
      return <p>{b.text}</p>;
    case "list":
      return (
        <div>
          {b.title ? <p className="mb-2 font-medium">{b.title}</p> : null}
          <ul className="space-y-2.5">
            {b.items.map((i) => (
              <li key={i} className="flex gap-3">
                <span aria-hidden className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    case "insight":
      return (
        <aside className="my-2 rounded-2xl bg-tint px-6 py-5">
          {b.label ? <p className="mb-1 text-sm font-medium text-accent-ink">{b.label}</p> : null}
          <p className="font-serif text-2xl leading-9">{b.text}</p>
        </aside>
      );
    case "diagram":
      return <Diagram id={b.id} caption={b.caption} />;
    case "screenshot":
      return (
        <figure className="my-4">
          {b.src ? (
            <Image
              src={b.src}
              alt={b.alt}
              width={1600}
              height={1000}
              sizes="(min-width: 1024px) 800px, 100vw"
              className="w-full rounded-xl border border-line"
            />
          ) : (
            <div className="flex aspect-[16/10] items-center justify-center rounded-xl border-2 border-dashed border-line-strong bg-white p-6 text-center text-sm text-muted">
              Screenshot slot (dev only). Add a real image and set its src in the content file.
            </div>
          )}
          <figcaption className="mt-2 text-sm text-muted">{b.caption}</figcaption>
        </figure>
      );
    case "placeholder":
      return (
        <p className="rounded-xl border border-dashed border-amber-500/70 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-950">
          <strong>Your input needed (dev only):</strong> {b.note}
        </p>
      );
  }
}

export function CaseStudyView({ cs }: { cs: CaseStudy }) {
  const sections = cs.sections
    .map((s) => ({ ...s, blocks: s.blocks.filter(visible) }))
    .filter((s) => s.blocks.length > 0);

  const idx = caseStudies.findIndex((c) => c.slug === cs.slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];

  return (
    <article>
      <header className="border-b border-line">
        <Container className="pb-14 pt-10 sm:pb-20 sm:pt-14">
          <Link href="/#work" className="text-sm text-muted underline underline-offset-4 hover:text-ink">
            Back to all work
          </Link>
          <p className="mt-10 text-sm text-muted">{cs.project}</p>
          <h1 className="mt-3 max-w-4xl font-serif text-[clamp(2.6rem,6.2vw,4.9rem)] leading-[1.03] tracking-tight">
            {cs.title}
          </h1>
          <p className="mt-5 max-w-2xl text-xl italic text-ink/80">{cs.subtitle}</p>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-ink/85">{cs.overview}</p>
          <dl className="mt-10 grid gap-6 border-t border-line pt-6 sm:grid-cols-3">
            {cs.meta.map((m) => (
              <div key={m.label}>
                <dt className="text-sm text-muted">{m.label}</dt>
                <dd className="mt-1 text-[15px] leading-6">{m.value}</dd>
              </div>
            ))}
          </dl>
          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Skills shown">
            {cs.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </ul>
        </Container>
      </header>

      <Container className="grid gap-12 py-14 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-16 lg:py-20">
        <nav aria-label="On this page" className="hidden lg:block">
          <ul className="sticky top-24 space-y-3 border-l border-line pl-4 text-sm">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-muted transition-colors hover:text-accent-ink">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="prose-case max-w-[44rem] space-y-16 text-lg leading-8 text-ink/90">
          {sections.map((s) => (
            <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`}>
              <h2 id={`${s.id}-h`} className="font-serif text-3xl leading-tight tracking-tight text-ink sm:text-4xl">
                {s.title}
              </h2>
              <div className="mt-6 space-y-5">
                {s.blocks.map((b, i) => (
                  <BlockView key={i} b={b} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>

      <section className="border-t border-line bg-white" aria-label="Next project">
        <Container className="flex flex-col gap-8 py-14 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm text-muted">Next story</p>
            <Link
              href={`/work/${next.slug}`}
              className="mt-2 block max-w-xl font-serif text-3xl leading-tight underline decoration-1 underline-offset-8 hover:text-accent-ink sm:text-4xl"
            >
              {next.title}
            </Link>
          </div>
          <Link href="/#work" className="text-[15px] font-medium underline underline-offset-4 hover:text-accent-ink">
            Back to all work
          </Link>
        </Container>
      </section>
    </article>
  );
}

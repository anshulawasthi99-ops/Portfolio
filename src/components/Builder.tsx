import { Container } from "./ui";
import { builder } from "@/content/site";

export function Builder() {
  return (
    <section aria-labelledby="builder-title" className="border-y border-line bg-white py-20 sm:py-28">
      <Container>
        <h2 id="builder-title" className="max-w-4xl font-serif text-4xl leading-[1.08] tracking-tight sm:text-5xl">
          {builder.headline}
        </h2>
        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-5 text-lg leading-8 text-ink/85 lg:col-span-6">
            {builder.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p className="rounded-xl bg-tint px-5 py-4 text-[16px] leading-7 text-ink">{builder.honesty}</p>
          </div>
          <ol className="space-y-0 lg:col-span-6" aria-label="How my role has grown">
            {builder.stages.map((s, i) => (
              <li key={s.name} className="relative flex gap-5 pb-10 last:pb-0">
                {i < builder.stages.length - 1 && (
                  <span aria-hidden className="absolute left-[0.6rem] top-6 h-full w-px bg-line-strong" />
                )}
                <span
                  aria-hidden
                  className={`relative mt-1.5 h-5 w-5 shrink-0 rounded-full border-2 ${
                    s.current ? "border-accent bg-accent" : "border-line-strong bg-white"
                  }`}
                />
                <div>
                  <p className="font-serif text-2xl">{s.name}</p>
                  <p className="mt-1 leading-7 text-muted">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

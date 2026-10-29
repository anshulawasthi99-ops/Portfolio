import { Container } from "./ui";
import { how } from "@/content/site";

export function HowIThink() {
  return (
    <section id="how-i-think" aria-labelledby="how-title" className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <h2 id="how-title" className="font-serif text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:col-span-5">
            {how.headline}
          </h2>
          <div className="space-y-6 text-lg leading-8 text-ink/85 lg:col-span-7">
            {how.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <blockquote className="border-l-2 border-accent pl-6 font-serif text-2xl leading-9 text-ink sm:text-[1.7rem]">
              {how.quote}
            </blockquote>
            <p>{how.outro}</p>
          </div>
        </div>

        <div className="mt-16 rounded-3xl border border-line bg-white p-7 sm:p-10">
          <h3 className="font-serif text-3xl">{how.stepsTitle}</h3>
          <p className="mt-2 text-muted">{how.stepsNote}</p>

          <ol className="relative mt-10 grid gap-8 lg:grid-cols-5 lg:gap-6">
            <span aria-hidden className="absolute left-[10%] right-[10%] top-[1.15rem] hidden h-px bg-line-strong lg:block" />
            {how.steps.map((s, i) => (
              <li key={s.name} className="relative flex gap-4 lg:block lg:text-center">
                <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line-strong bg-white text-sm font-medium lg:mx-auto">
                  {i + 1}
                </span>
                <div className="lg:mt-4">
                  <p className="font-serif text-2xl">{s.name}</p>
                  <p className="mt-1 text-[15px] leading-6 text-muted">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div aria-hidden className="mx-[10%] mt-8 hidden h-7 rounded-b-3xl border-x border-b border-dashed border-line-strong lg:block" />
          <p aria-hidden className="mt-2 hidden text-center text-sm text-muted lg:block">
            and around again
          </p>
        </div>
      </Container>
    </section>
  );
}

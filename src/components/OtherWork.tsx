import { Container, SectionHeading } from "./ui";
import { other } from "@/content/site";

export function OtherWork() {
  return (
    <section aria-labelledby="other-title" className="py-20 sm:py-28">
      <Container>
        <SectionHeading id="other-title" title={other.headline} sub={other.sub} />
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {other.items.map((i) => (
            <li key={i.title} className="flex flex-col rounded-2xl border border-line bg-white p-7">
              <h3 className="text-lg font-semibold">{i.title}</h3>
              {i.metric ? <p className="mt-3 font-serif text-3xl leading-tight text-accent-ink">{i.metric}</p> : null}
              <p className="mt-3 leading-7 text-muted">{i.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

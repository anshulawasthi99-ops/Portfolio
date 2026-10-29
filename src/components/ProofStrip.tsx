import { Container } from "./ui";
import { proof } from "@/content/site";

export function ProofStrip() {
  return (
    <section aria-label="Proof of work" className="border-b border-line bg-white">
      <Container className="py-12 sm:py-14">
        <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {proof.items.map((i) => (
            <li key={i.value} className="border-l-2 border-accent/70 pl-5">
              <p className="font-serif text-5xl leading-none tracking-tight">{i.value}</p>
              <p className="mt-3 text-[15px] leading-6 text-muted">{i.text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-xs text-muted">{proof.note}</p>
      </Container>
    </section>
  );
}

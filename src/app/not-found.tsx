import Link from "next/link";
import { Container } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="py-32">
      <h1 className="font-serif text-5xl">That page doesn&apos;t exist.</h1>
      <p className="mt-4 text-lg text-muted">It may have moved. The work is easy to find from the homepage.</p>
      <Link href="/" className="mt-8 inline-block underline underline-offset-4 hover:text-accent-ink">
        Back to the homepage
      </Link>
    </Container>
  );
}

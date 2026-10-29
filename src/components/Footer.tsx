import { Container } from "./ui";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <Container className="flex flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {site.name}
        </p>
        <p>Built with Next.js, and a lot of help from Claude Code.</p>
      </Container>
    </footer>
  );
}

import { Container, ButtonLink } from "./ui";
import { CopyEmail } from "./CopyEmail";
import { contact, site } from "@/content/site";

export function Contact({ resumeAvailable }: { resumeAvailable: boolean }) {
  return (
    <section id="contact" aria-labelledby="contact-title" className="pb-20 sm:pb-28">
      <Container>
        <div className="rounded-3xl bg-ink px-7 py-14 text-paper sm:px-14 sm:py-20">
          <h2 id="contact-title" className="max-w-3xl font-serif text-4xl leading-[1.06] tracking-tight sm:text-6xl">
            {contact.headline}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-paper/80">{contact.copy}</p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <ButtonLink href={`mailto:${site.email}`} variant="light">
              {site.email}
            </ButtonLink>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-paper/30 px-6 py-3 text-[15px] font-medium transition-colors hover:border-paper"
            >
              LinkedIn
            </a>
            {resumeAvailable && (
              <a
                href={site.resume.path}
                download
                className="inline-flex items-center rounded-full border border-paper/30 px-6 py-3 text-[15px] font-medium transition-colors hover:border-paper"
              >
                Download resume (PDF)
              </a>
            )}
          </div>
          <div className="mt-4">
            <CopyEmail email={site.email} />
          </div>
        </div>
      </Container>
    </section>
  );
}

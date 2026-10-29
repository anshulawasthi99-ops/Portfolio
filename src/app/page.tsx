import { Hero } from "@/components/Hero";
import { ProofStrip } from "@/components/ProofStrip";
import { HiringBrief } from "@/components/HiringBrief";
import { SelectedWork } from "@/components/SelectedWork";
import { HowIThink } from "@/components/HowIThink";
import { Builder } from "@/components/Builder";
import { OtherWork } from "@/components/OtherWork";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { resumeAvailable } from "@/lib/resume";
import { site } from "@/content/site";
import { siteUrl } from "@/lib/flags";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    worksFor: { "@type": "Organization", name: site.company },
    url: siteUrl,
    email: `mailto:${site.email}`,
    sameAs: [site.linkedin],
    address: { "@type": "PostalAddress", addressLocality: "New Delhi", addressCountry: "IN" },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <ProofStrip />
      <HiringBrief />
      <SelectedWork />
      <HowIThink />
      <Builder />
      <OtherWork />
      <About />
      <Contact resumeAvailable={resumeAvailable} />
    </>
  );
}

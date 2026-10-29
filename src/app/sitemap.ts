import type { MetadataRoute } from "next";
import { caseStudies } from "@/content/case-studies";
import { siteUrl } from "@/lib/flags";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    ...caseStudies.map((c) => ({ url: `${siteUrl}/work/${c.slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}

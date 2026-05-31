import type { MetadataRoute } from "next";
import { landingPages } from "@/content/landing-pages";

const siteUrl = "https://impactflow.pt";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = landingPages.map((page) => ({
    url: `${siteUrl}/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: page.slug === "problema" ? 0.9 : 0.7,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...pages,
  ];
}

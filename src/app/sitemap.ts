import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { landingPages } from "@/content/landing-pages";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = landingPages.map((page) => ({
    url: `${SITE_URL}/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: page.slug === "problema" ? 0.9 : 0.7,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    ...pages,
  ];
}

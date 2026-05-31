import type { Metadata } from "next";
import type { WithContext, BreadcrumbList, FAQPage } from "schema-dts";
import { notFound } from "next/navigation";

import { SITE_URL } from "@/lib/site";
import { StructuredData } from "@/components/structured-data";
import { LandingContentPage } from "@/components/landing/landing-content-page";
import { landingPageMap, landingPages } from "@/content/landing-pages";

type LandingRouteProps = Readonly<{
  params: Promise<{
    slug: string;
  }>;
}>;

export function generateStaticParams() {
  return landingPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: LandingRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const page = landingPageMap.get(slug);

  if (!page) {
    return {
      title: "Página não encontrada - Impact Flow",
    };
  }

  return {
    title: page.eyebrow,
    description: page.description || page.intro,
    openGraph: {
      title: `${page.eyebrow} - Impact Flow`,
      description: page.description || page.intro,
      url: `${SITE_URL}/${slug}`,
    },
    alternates: {
      canonical: `${SITE_URL}/${slug}`,
    },
  };
}

export default async function LandingPageRoute({ params }: LandingRouteProps) {
  const { slug } = await params;
  const page = landingPageMap.get(slug);

  if (!page) {
    notFound();
  }

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: page.eyebrow,
        item: `${SITE_URL}/${slug}`,
      },
    ],
  } satisfies WithContext<BreadcrumbList>;

  let faq: WithContext<FAQPage> | null = null;

  if (slug === "faq") {
    faq = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.blocks.map((block) => ({
        "@type": "Question" as const,
        name: block.title,
        acceptedAnswer: {
          "@type": "Answer" as const,
          text: block.body?.join(" ") ?? "",
        },
      })),
    };
  }

  return (
    <>
      <StructuredData data={breadcrumb} id={`breadcrumb-${slug}`} />
      {faq ? <StructuredData data={faq} id="faq-page" /> : null}
      <LandingContentPage page={page} />
    </>
  );
}

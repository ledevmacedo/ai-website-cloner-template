import type { Metadata } from "next";
import { notFound } from "next/navigation";

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
    title: `${page.eyebrow} - Impact Flow`,
    description: page.description,
  };
}

export default async function LandingPageRoute({ params }: LandingRouteProps) {
  const { slug } = await params;
  const page = landingPageMap.get(slug);

  if (!page) {
    notFound();
  }

  return <LandingContentPage page={page} />;
}

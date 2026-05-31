import type { Metadata } from "next";
import "./globals.css";
import { StructuredData } from "@/components/structured-data";

const siteUrl = "https://impactflow.pt";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Impact Flow - Torne a qualificação em movimento de carreira",
    template: "%s - Impact Flow",
  },
  description:
    "O Impact Flow ajuda fundações, ONGs e instituições de formação social a organizar candidaturas, acompanhar formandos e provar resultados sem depender de folhas de cálculo, mensagens dispersas e relatórios montados à mão.",
  icons: {
    icon: "/seo/31-698a386255086c519eaa48cd_fav.png",
    apple: "/seo/32-698a3864caf4c5bbba1e1f4f_webclip.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    siteName: "Impact Flow",
    title: "Impact Flow - Torne a qualificação em movimento de carreira",
    description:
      "O Impact Flow ajuda fundações, ONGs e instituições de formação social a organizar candidaturas, acompanhar formandos e provar resultados.",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Impact Flow - Torne a qualificação em movimento de carreira",
    description:
      "O Impact Flow ajuda fundações, ONGs e instituições de formação social a organizar candidaturas, acompanhar formandos e provar resultados.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="h-full antialiased ">
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/zerodrift/26-6983902256e7c4da0df2ff82_orange-gradient_poster.0000000.jpg"
        />
        <link
          rel="preload"
          as="video"
          href="/images/zerodrift/21-6983902256e7c4da0df2ff82_orange-gradient_mp4.mp4"
        />
      </head>
      <body className="w-full min-h-full flex flex-col ">
        <StructuredData
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Impact Flow",
            url: siteUrl,
            description:
              "Plataforma que liga formação social, dados de competência e empregabilidade real.",
            sameAs: [
              siteUrl,
            ],
          }}
        />
        {children}
      </body>
    </html>
  );
}

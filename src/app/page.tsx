import type { Metadata } from "next";
import type { WithContext, BreadcrumbList, FAQPage, Organization } from "schema-dts";
import { SITE_URL } from "@/lib/site";
import { ImpactFlowPage } from "@/components/zerodrift/impact-flow-page";
import { StructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Impact Flow - Torne a qualificação em movimento de carreira",
  description:
    "O Impact Flow ajuda fundações, ONGs e instituições de formação social a organizar candidaturas, acompanhar formandos e provar resultados sem depender de folhas de cálculo, mensagens dispersas e relatórios montados à mão.",
  openGraph: {
    title: "Impact Flow - Torne a qualificação em movimento de carreira",
    description:
      "O Impact Flow ajuda fundações, ONGs e instituições de formação social a organizar candidaturas, acompanhar formandos e provar resultados.",
    url: SITE_URL,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
  ],
} satisfies WithContext<BreadcrumbList>;

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Impact Flow",
  url: SITE_URL,
  description:
    "Plataforma que liga formação social, dados de competência e empregabilidade real.",
} satisfies WithContext<Organization>;

const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "O Impact Flow já está desenvolvido?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O projeto está em fase de ideação avançada. O framework de negócio, a proposta de valor e o escopo inicial do MVP já estão definidos.",
      },
    },
    {
      "@type": "Question",
      name: "Qual é o primeiro produto a validar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O MVP começa com ATS Social e Perfil de Competências, porque estes dois módulos atacam a dor operacional e criam a primeira base de evidências dos formandos.",
      },
    },
    {
      "@type": "Question",
      name: "Quem deve usar primeiro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fundações, ONGs e instituições com programas de empregabilidade, capacitação digital ou requalificação profissional.",
      },
    },
    {
      "@type": "Question",
      name: "O Impact Flow substitui um LMS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não necessariamente. A proposta inicial é cobrir o que muitos LMS não resolvem bem: recrutamento social, prova de competências, dados de impacto e ligação ao mercado.",
      },
    },
    {
      "@type": "Question",
      name: "A instituição precisa mudar todo o processo para testar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não. O piloto deve começar com um recorte controlado, como uma turma, um programa ou uma fase do processo.",
      },
    },
  ],
} satisfies WithContext<FAQPage>;

export default function Home() {
  return (
    <>
      <StructuredData data={breadcrumb} id="breadcrumb-home" />
      <StructuredData data={organization} id="organization" />
      <StructuredData data={faq} id="faq-home" />
      <ImpactFlowPage />
    </>
  );
}

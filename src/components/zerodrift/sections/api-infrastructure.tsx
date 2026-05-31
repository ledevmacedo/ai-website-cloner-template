import Link from "next/link";

import { SectionFrame } from "../section-frame";

const impactItems = [
  "Tempo administrativo poupado.",
  "Taxa de conclusão.",
  "Progresso por competências.",
  "Perfis com evidências validadas.",
  "Empresas parceiras ativas.",
  "Oportunidades geradas.",
  "Contratação pós-formação.",
];

const businessItems = [
  "Subscrição SaaS para instituições.",
  "Setup e implementação inicial.",
  "Serviços de formação e suporte premium.",
  "Licenças para empresas recrutadoras.",
  "Relatórios agregados e anonimizados em fases futuras.",
  "Selos para instituições ou empresas.",
];

export function ApiInfrastructure() {
  return (
    <SectionFrame className="mt-8" id="mercado">
      <div className="zd-grid rounded-[7px] bg-white px-8 py-12">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-center">
            <h2 className="max-w-[480px] text-[38px] font-light leading-[1.05]">
              O setor social precisa de ferramentas próprias para provar resultado
            </h2>
            <p className="mt-5 max-w-[500px] text-[15px] leading-[1.45] text-[#6c7078]">
              O Impact Flow posiciona dados confiáveis entre formação social,
              prestação de contas e empregabilidade.
            </p>
            <Link
              className="mt-7 inline-flex h-9 w-fit items-center rounded-[6px] bg-[#6F5BEF] px-5 text-[10px] font-bold uppercase text-white"
              href="/modelo-negocio"
            >
              Ver modelo
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2" id="modelo">
            <InfoList title="Indicadores acompanháveis" items={impactItems} />
            <InfoList title="Modelo de negócio" items={businessItems} />
          </div>
        </div>
      </div>
    </SectionFrame>
  );
}

function InfoList({ title, items }: Readonly<{ title: string; items: string[] }>) {
  return (
    <article className="rounded-[8px] bg-[#f5f5f5] p-5">
      <h3 className="text-[16px] font-medium text-[#171719]">{title}</h3>
      <ul className="mt-4 flex flex-col gap-3 text-[13px] leading-[1.4] text-[#6c7078]">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

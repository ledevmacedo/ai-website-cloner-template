import { SectionFrame } from "../section-frame";

export function SeeItWork() {
  const steps = [
    {
      title: "1. Recrutamento Social",
      body: "As instituições gerem candidaturas, critérios de elegibilidade e documentação num funil organizado.",
    },
    {
      title: "2. Acompanhamento Pedagógico",
      body: "Formadores registam presença, progresso, desafios práticos e avaliações. A equipa identifica quem precisa de apoio e personaliza o que for preciso.",
    },
    {
      title: "3. Perfil de Competências",
      body: "Cada formando constrói um perfil digital com evidências técnicas e comportamentais, validado por dados, mentores e atividades reais.",
    },
    {
      title: "4. Ligação ao Mercado",
      body: "Empresas acedem a perfis mais claros, com contexto e histórico de desempenho personalizado e com clareza.",
    },
  ];

  return (
    <SectionFrame className="mt-8" id="como-funciona">
      <div className="zd-grid rounded-[7px] bg-white px-8 py-12">
        <h2 className="text-center text-[38px] font-light leading-none">
          Um fluxo simples, da candidatura à oportunidade.
        </h2>
        <p className="mx-auto mt-3 max-w-[520px] text-center text-[13px] leading-[1.4] text-[#6c7078]">
          O Impact Flow organiza a informação para que ela acompanhe o formando durante todo o processo.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {steps.map((step) => (
            <article
              className="min-h-[188px] rounded-[8px] border border-[#e3e3e3] bg-white p-5 shadow-[0_10px_30px_rgba(20,20,20,0.06)]"
              key={step.title}
            >
              <h3 className="text-[16px] font-medium text-[#171719]">{step.title}</h3>
              <p className="mt-4 text-[13px] leading-[1.45] text-[#6c7078]">
                {step.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </SectionFrame>
  );
}

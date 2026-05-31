import { ZERODRIFT_ASSET_PATH } from "../constants";
import { SectionFrame } from "../section-frame";

export function TrustAndCta() {
  const pilotChecks = [
    "Se a instituição ganha tempo na operação.",
    "Se a instituição consegue ter uma gestão mais eficaz da turma.",
    "Se os dados ficam mais completos e confiáveis.",
    "Se os formandos conseguem construir perfis mais claros.",
    "Se as empresas percebem valor em perfis validados por evidências.",
  ];

  const faqs = [
    {
      question: "O Impact Flow já está desenvolvido?",
      answer:
        "O projeto está em fase de ideação avançada. O framework de negócio, a proposta de valor e o escopo inicial do MVP já estão definidos.",
    },
    {
      question: "Qual é o primeiro produto a validar?",
      answer:
        "O MVP começa com ATS Social e Perfil de Competências, porque estes dois módulos atacam a dor operacional do inicio do fluxo que o Impact Flow quer potencializar e criam a primeira base de evidências dos formandos.",
    },
    {
      question: "A instituição precisa mudar todo o processo para testar?",
      answer:
        "Não. O piloto deve começar com um recorte controlado, como uma turma, um programa ou uma fase do processo. A Impact Flow adequa-se a necessidades que encontre, a ser uma plataforma que busque cada vez mais algo personalizado e exclusivo.",
    },
  ];

  return (
    <>
      <SectionFrame className="mt-8" id="impacto">
        <div className="zd-grid flex min-h-[658px] flex-col items-center justify-center rounded-[7px] bg-white px-8 py-20 text-center">
          <h2 className="max-w-[430px] text-[40px] font-light leading-[1.05]">
            Mais transparência para as instituições. Mais oportunidades para os formandos.
          </h2>
          <p className="mt-24 max-w-[520px] text-[14px] leading-[1.5] text-[#747780]">
            Quando os dados estão organizados, fica mais fácil acompanhar resultados, provar valor a financiadores e criar pontes reais com empresas.
          </p>
          <div className="mt-10 grid w-full max-w-[840px] gap-3 text-left md:grid-cols-2">
            {pilotChecks.map((item) => (
              <p
                className="rounded-[8px] border border-[#e7e7e7] bg-white px-4 py-3 text-[13px] leading-[1.4] text-[#747780]"
                key={item}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </SectionFrame>
      <SectionFrame className="mt-8" id="piloto">
        <div className="relative overflow-hidden rounded-[7px] bg-[#6F5BEF] px-8 py-12 text-white md:px-10">
          <video
            aria-label="Animação de fundo do piloto Impact Flow"
            autoPlay
            className="absolute inset-0 size-full object-cover"
            loop
            muted
            playsInline
            poster={`${ZERODRIFT_ASSET_PATH}30-69839085edb11a12b2ad6a95_blocker-gradient_poster.0000000.jpg`}
          >
            <source
              src={`${ZERODRIFT_ASSET_PATH}25-69839085edb11a12b2ad6a95_blocker-gradient_mp4.mp4`}
              type="video/mp4"
            />
          </video>
          <div className="relative grid gap-8 md:grid-cols-[1fr_430px]">
            <div>
              <p className="text-[11px] font-bold uppercase">
                6 a 8 semanas. Uma turma. Métricas simples.
              </p>
              <h2 className="mt-5 max-w-[470px] text-[42px] font-light leading-[1.05]">
                Vamos validar o Impact Flow com uma instituição real?
              </h2>
              <p className="mt-5 max-w-[530px] text-[15px] font-medium leading-[1.45]">
                Estamos em fase de ideação avançada e preparados para validar o MVP com parceiros institucionais.
              </p>
              <div className="mt-8 flex max-w-[470px] flex-col gap-3 sm:flex-row" id="contato">
                <input
                  aria-label="Email institucional"
                  className="h-11 flex-1 rounded-[6px] bg-white px-4 text-[13px] text-[#171719] outline-none"
                  placeholder="Email institucional"
                />
                <button
                  className="h-11 rounded-[6px] bg-white px-6 text-[11px] font-bold uppercase text-[#171719]"
                  type="button"
                >
                  Quero conversar
                </button>
              </div>
              <p className="mt-5 text-[10px] font-bold uppercase">
                Sem mudança total do processo - validação controlada - foco em ROI social
              </p>
            </div>
            <blockquote className="self-center rounded-[8px] bg-white p-8 text-[#171719]">
              <p className="text-[20px] font-light leading-[1.35]">
                {`"Conte um pouco sobre o programa que quer validar. A ideia é perceber se o Impact Flow pode te ajudar a organizar e ter sucesso nesso fluxo todo, numa fase do processo ou num piloto mais completo."`}
              </p>
              <footer className="mt-8 text-[11px] font-bold uppercase text-[#555]">
                Impact Flow
                <br />
                Piloto institucional
              </footer>
            </blockquote>
          </div>
        </div>
      </SectionFrame>
      <SectionFrame className="mt-8" id="faq">
        <div className="rounded-[7px] bg-white px-8 py-12">
          <h2 className="text-[38px] font-light leading-none">Perguntas frequentes</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {faqs.map((item) => (
              <article className="rounded-[8px] bg-[#f5f5f5] p-5" key={item.question}>
                <h3 className="text-[16px] font-medium text-[#171719]">{item.question}</h3>
                <p className="mt-3 text-[13px] leading-[1.45] text-[#747780]">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </SectionFrame>
    </>
  );
}

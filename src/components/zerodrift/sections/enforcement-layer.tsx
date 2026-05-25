import Image from "next/image";
import Link from "next/link";

import { layerFeatures, layerSteps } from "../data";
import { SectionFrame } from "../section-frame";

export function EnforcementLayer() {
  return (
    <SectionFrame id="problema">
      <div className="zd-grid rounded-[7px] bg-white px-8 py-16 md:px-12">
        <h2 className="mb-12 text-[40px] font-light leading-none md:text-[56px]">
          Formação social, dados e empregabilidade no mesmo fluxo
        </h2>
        <div className="mb-16 grid border-t border-[#d9d9d9] md:grid-cols-3">
          {layerSteps.map((step) => (
            <div className="border-r border-[#e3e3e3] py-6 last:border-r-0" key={step.title}>
              <h3 className="text-[22px] font-light text-[#64666d]">{step.title}</h3>
              <p className="mt-2 text-[16px] text-[#64666d]">{step.body}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-16">
          {layerFeatures.map((feature) => (
            <article
              className="grid items-center gap-10 md:grid-cols-2"
              id={feature.eyebrow === "Solução" ? "solucao" : undefined}
              key={feature.title}
            >
              <div className={feature.reverse ? "md:order-2" : ""}>
                <h3 className="max-w-[360px] text-[26px] font-light leading-[1.05] text-[#171719]">
                  {feature.title}
                </h3>
                <p className="mt-4 max-w-[480px] text-[16px] leading-[1.45] text-[#6c7078]">
                  {feature.body}
                </p>
                <Link
                  className="mt-6 inline-flex h-9 items-center rounded-[6px] bg-[#171719] px-5 text-[10px] font-bold uppercase text-white"
                  href={feature.eyebrow === "Problema" ? "/solucao" : "/produto"}
                >
                  Ver próximo passo
                </Link>
              </div>
              <div className={feature.reverse ? "md:order-1" : ""}>
                <Image
                  className="mx-auto h-auto w-full max-w-[500px]"
                  src={feature.image}
                  alt={feature.imageAlt}
                  width={550}
                  height={420}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionFrame>
  );
}

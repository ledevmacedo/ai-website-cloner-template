import Image from "next/image";

import { complianceCards } from "../data";
import { SectionFrame } from "../section-frame";

export function ComplianceLooks() {
  return (
    <SectionFrame className="mt-8" id="produto">
      <div className="rounded-[7px] bg-white px-8 py-14">
        <h2 className="mb-10 text-center text-[34px] font-light leading-none">
          O que a plataforma organiza
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {complianceCards.map((card) => (
            <article key={card.title}>
              <div className="mb-6 aspect-[1.1] overflow-hidden rounded-[4px] bg-[#f5f5f5]">
                <Image
                  className="size-full object-cover"
                  src={card.image}
                  alt=""
                  width={380}
                  height={340}
                />
              </div>
              <h3 className="text-[16px] font-medium text-[#171719]">{card.title}</h3>
              <p className="mt-2 text-[13px] leading-[1.45] text-[#6c7078]">{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionFrame>
  );
}

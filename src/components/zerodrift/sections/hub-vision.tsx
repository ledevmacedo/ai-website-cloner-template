import Image from "next/image";

import { SectionFrame } from "../section-frame";

interface HubItem {
  label: string;
  subtitle: string;
  initials: string;
}

const hubItems: HubItem[] = [
  { label: "Candidaturas", subtitle: "ATS Social", initials: "CA" },
  { label: "Formação", subtitle: "Gestão Pedagógica", initials: "FO" },
  { label: "Competências", subtitle: "Perfil Digital", initials: "CP" },
  { label: "Dados", subtitle: "Evidências", initials: "DA" },
  { label: "Empregabilidade", subtitle: "Conexão com Mercado", initials: "EM" },
  { label: "Mercado", subtitle: "Empresas & RH", initials: "ME" },
];

function HubBadge({ item }: { item: HubItem }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="flex size-14 items-center justify-center rounded-full border border-[#e3e3e3] bg-[#f5f5f5] text-[13px] font-bold text-[#6F5BEF]">
        {item.initials}
      </span>
      <span className="text-center text-[13px] font-medium leading-tight text-[#171719]">
        {item.label}
      </span>
      <span className="text-center text-[11px] leading-tight text-[#6c7078]">
        {item.subtitle}
      </span>
    </div>
  );
}

export function HubVision() {
  return (
    <SectionFrame className="mt-8" id="visao">
      <div className="zd-grid rounded-[7px] bg-white px-8 py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-3xl">
          {/* Desktop: circular orbit */}
          <div className="relative mx-auto hidden aspect-square w-full max-w-[580px] md:block">
            <div
              className="absolute rounded-full border border-[#e3e3e3]"
              style={{ inset: "22%" }}
            />
            <div
              className="absolute rounded-full border border-dashed border-[#e3e3e3]"
              style={{ inset: "10%" }}
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex size-28 items-center justify-center rounded-full bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)]">
                <Image
                  alt="Impact Flow"
                  className="h-12 w-auto"
                  height={200}
                  src="/logo.svg"
                  width={900}
                />
              </div>
            </div>

            {hubItems.map((item, i) => {
              const angle = (i * 60 - 90) * (Math.PI / 180);
              const radiusPct = 34;
              const x = 50 + radiusPct * Math.cos(angle);
              const y = 50 + radiusPct * Math.sin(angle);

              return (
                <div
                  className="absolute"
                  key={item.label}
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <HubBadge item={item} />
                </div>
              );
            })}
          </div>

          {/* Mobile: simplified grid */}
          <div className="md:hidden">
            <div className="mb-8 flex justify-center">
              <Image
                alt="Impact Flow"
                className="h-10 w-auto"
                height={200}
                src="/logo.svg"
                width={900}
              />
            </div>
            <div className="grid grid-cols-3 gap-5">
              {hubItems.map((item) => (
                <HubBadge item={item} key={item.label} />
              ))}
            </div>
          </div>

          <p className="mx-auto mt-12 max-w-[500px] text-center text-[15px] leading-relaxed text-[#6c7078] md:mt-16">
            Da candidatura ao emprego, um fluxo contínuo de oportunidades.
          </p>
        </div>
      </div>
    </SectionFrame>
  );
}

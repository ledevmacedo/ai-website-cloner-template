import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";

import { SectionFrame } from "../section-frame";

const team = [
  {
    name: "Leandro Macedo",
    role: "Formador Sênior de Programação",
    subtitle: "Fundação Aga Khan",
    tag: "Fullstack Developer",
    photo: "/images/leandro-macedo.jpg",
    email: "mailto:leandro.smacedo@live.com",
    linkedin: "https://www.linkedin.com/in/devmacedo",
  },
  {
    name: "Paula Guollo",
    role: "Especialista em Sustentabilidade",
    subtitle: "Economista",
    tag: undefined,
    photo: "/images/paula-guollo.jpg",
    linkedin: "https://www.linkedin.com/in/paula-guollo",
  },
];

export function WhoWeAre() {
  return (
    <SectionFrame className="mt-8" id="quem-somos">
      <div className="rounded-[7px] bg-white px-8 py-16 text-center md:px-12 md:py-20">
        <h2 className="text-[38px] font-light leading-none">Quem somos</h2>
        <p className="mx-auto mt-4 max-w-[500px] text-[14px] leading-relaxed text-[#6c7078]">
          Conheça a equipa por trás do Impact Flow.
        </p>
        <div className="mx-auto mt-12 grid max-w-2xl gap-8 md:grid-cols-2">
          {team.map((person) => (
            <div
              className="group flex flex-col items-center gap-6 rounded-[16px] border border-[#e3e3e3] bg-white px-8 pb-8 pt-10 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(111,91,239,0.10)]"
              key={person.name}
            >
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-b from-[#6F5BEF]/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <Image
                  alt={person.name}
                  className="relative size-32 rounded-full border-2 border-[#f0f0f0] object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  height={128}
                  src={person.photo}
                  width={128}
                />
              </div>
              <div>
                <p className="text-[18px] font-medium text-[#171719]">{person.name}</p>
                <p className="mt-1.5 text-[15px] font-medium text-[#6F5BEF]">{person.role}</p>
                <p className="mt-0.5 text-[13px] leading-relaxed text-[#6c7078]">{person.subtitle}</p>
                {person.tag && (
                  <p className="mt-1.5 inline-block rounded-[4px] border border-[#e3e3e3] px-2.5 py-0.5 text-[11px] font-medium text-[#6c7078]">
                    {person.tag}
                  </p>
                )}
              </div>
              <div className="flex gap-2.5">
                {person.email && (
                  <Link
                    className="inline-flex size-10 items-center justify-center rounded-full border border-[#e3e3e3] text-[#6F5BEF] transition-colors hover:border-[#6F5BEF] hover:bg-[#6F5BEF] hover:text-white"
                    href={person.email}
                    aria-label={`Email ${person.name}`}
                  >
                    <Mail size={16} />
                  </Link>
                )}
                <Link
                  className="inline-flex size-10 items-center justify-center rounded-full border border-[#e3e3e3] text-[#6F5BEF] transition-colors hover:border-[#6F5BEF] hover:bg-[#6F5BEF] hover:text-white"
                  href={person.linkedin}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={`LinkedIn ${person.name}`}
                >
                  <svg fill="currentColor" height={16} viewBox="0 0 24 24" width={16}>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionFrame>
  );
}

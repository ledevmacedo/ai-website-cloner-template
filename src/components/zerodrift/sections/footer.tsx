import Image from "next/image";
import Link from "next/link";

import { footerColumns } from "../data";

export function Footer() {
  return (
    <footer className="mx-auto my-8 w-full max-w-[1360px] px-3 md:px-0">
      <div className="rounded-[7px] bg-white px-8 py-10 md:px-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_2fr]">
          <div>
            <Link className="flex items-center" href="/" aria-label="Impact Flow home">
              <Image
                alt="Impact Flow"
                className="h-10 w-auto"
                height={200}
                src="/logo.svg"
                width={900}
              />
            </Link>
            <div className="mt-8 text-[14px] leading-[1.5] text-[#6c7078]">
              <p className="font-medium text-[#171719]">
                Formação social, dados de competência e empregabilidade real.
              </p>
              <p className="mt-7 font-medium text-[#171719]">Contato</p>
              <div className="mt-3 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <Image
                    alt="Leandro Macedo"
                    className="size-10 rounded-full object-cover"
                    height={40}
                    src="/images/leandro-macedo.jpg"
                    width={40}
                  />
                  <div>
                    <p className="font-medium text-[#171719]">Leandro Macedo</p>
                    <a
                      className="block text-[#6F5BEF] hover:underline"
                      href="mailto:leandro.smacedo@live.com"
                    >
                      leandro.smacedo@live.com
                    </a>
                    <a
                      className="block text-[#6F5BEF] hover:underline"
                      href="https://www.linkedin.com/in/devmacedo"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Image
                    alt="Paula Guollo"
                    className="size-10 rounded-full object-cover"
                    height={40}
                    src="/images/paula-guollo.jpg"
                    width={40}
                  />
                  <div>
                    <p className="font-medium text-[#171719]">Paula Guollo</p>
                    <a
                      className="block text-[#6F5BEF] hover:underline"
                      href="https://www.linkedin.com/in/paula-guollo"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="mb-4 text-[13px] font-medium text-[#171719]">
                  {column.title}
                </h3>
                <ul className="flex flex-col gap-3 text-[13px] text-[#6c7078]">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link className="hover:text-[#6F5BEF]" href={link.href}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 grid gap-8 border-t border-[#e3e3e3] pt-8 text-[13px] text-[#6c7078] md:grid-cols-[1fr_1fr]">
          <p>
            MVP em validação com foco em ATS Social + Perfil de Competências.{" "}
            <Link className="underline" href="/piloto">
              Falar sobre piloto.
            </Link>
          </p>
          <div className="grid gap-2 md:grid-cols-3">
            <p>
              Instituições
              <br />
              piloto e validação
            </p>
            <p>
              Empresas
              <br />
              portal de talentos
            </p>
            <p>
              Apoio
              <br />
              FAQ e apresentação
            </p>
          </div>
        </div>
        <p className="mt-9 text-[12px] text-[#6c7078]">
          (c) 2026 Impact Flow. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

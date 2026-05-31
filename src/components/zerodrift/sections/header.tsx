import Image from "next/image";
import Link from "next/link";

import StaggeredMenu from "@/components/StaggeredMenu";
import { navLinks } from "../data";

const menuItems = [
  { label: "Home", ariaLabel: "Ir para a página inicial", link: "/" },
  ...navLinks.map((item) => ({
    label: item.label,
    ariaLabel: `Ir para ${item.label}`,
    link: item.href,
  })),
  { label: "Piloto", ariaLabel: "Ir para a página de piloto", link: "/piloto" },
  { label: "Contato", ariaLabel: "Ir para a página de contato", link: "/contato" },
  {
    label: "Mapa do site",
    ariaLabel: "Ir para o mapa do site",
    link: "/mapa-do-site",
  },
];

export function Header() {
  return (
    <header className="mx-auto flex h-[86px] w-full max-w-[1360px] items-center justify-between px-3 md:px-0">
      <Link className="flex items-center" href="/" aria-label="Impact Flow home">
        <Image
          alt="Impact Flow"
          className="h-8 w-auto"
          height={200}
          priority
          src="/logo.svg"
          width={900}
        />
      </Link>
      <nav className="hidden items-center gap-7 text-[15px] font-normal text-[#171719] md:flex">
        {navLinks.slice(0, 6).map((item) => (
          <Link className="hover:text-[#6F5BEF]" href={item.href} key={item.label}>
            {item.label}
          </Link>
        ))}
      </nav>
      <Link
        className="hidden h-11 items-center justify-center rounded-[8px] bg-[#6F5BEF] px-7 text-[12px] font-bold uppercase text-white md:inline-flex"
        href="/piloto"
      >
        Validar piloto
      </Link>
      <div className="md:hidden">
        <StaggeredMenu
          accentColor="#6F5BEF"
          changeMenuColorOnOpen
          colors={["#CDFE3E", "#6F5BEF", "#171719"]}
          displayItemNumbering
          displayLogo={false}
          displaySocials={false}
          isFixed
          items={menuItems}
          menuButtonColor="#6F5BEF"
          openMenuButtonColor="#6F5BEF"
          position="right"
        />
      </div>
    </header>
  );
}

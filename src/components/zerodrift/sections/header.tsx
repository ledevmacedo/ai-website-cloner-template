import Link from "next/link";

import StaggeredMenu from "@/components/StaggeredMenu";
import { BRAND_NAME } from "../constants";
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
    <header className="mx-auto flex h-[86px] w-full max-w-[1360px] items-center justify-between px-5 md:px-0">
      <Link className="flex items-center gap-3" href="/" aria-label="Impact Flow home">
        <span className="inline-flex size-9 items-center justify-center rounded-[8px] bg-[#171719] text-[13px] font-bold text-white">
          IF
        </span>
        <span className="text-[24px] font-medium leading-none text-[#171719]">
          {BRAND_NAME}
        </span>
      </Link>
      <nav className="hidden items-center gap-7 text-[15px] font-normal text-[#0b1020] md:flex">
        {navLinks.slice(0, 6).map((item) => (
          <Link className="hover:text-[#f15b37]" href={item.href} key={item.label}>
            {item.label}
          </Link>
        ))}
      </nav>
      <Link
        className="hidden h-12 items-center justify-center rounded-[8px] bg-[#171719] px-7 text-[12px] font-bold uppercase text-white md:inline-flex"
        href="/piloto"
      >
        Validar piloto
      </Link>
      <div className="md:hidden">
        <StaggeredMenu
          accentColor="#f15b37"
          changeMenuColorOnOpen
          colors={["#f8b69c", "#f15b37", "#171719"]}
          displayItemNumbering
          displayLogo={false}
          displaySocials={false}
          isFixed
          items={menuItems}
          menuButtonColor="#171719"
          openMenuButtonColor="#171719"
          position="right"
        />
      </div>
    </header>
  );
}

import Link from "next/link";
import { Menu } from "lucide-react";

import { BRAND_NAME } from "../constants";
import { navLinks } from "../data";

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
          <a className="hover:text-[#f15b37]" href={item.href} key={item.label}>
            {item.label}
          </a>
        ))}
      </nav>
      <a
        className="hidden h-12 items-center justify-center rounded-[8px] bg-[#171719] px-7 text-[12px] font-bold uppercase text-white md:inline-flex"
        href="#piloto"
      >
        Validar piloto
      </a>
      <button
        aria-label="Abrir menu"
        className="inline-flex size-10 items-center justify-center rounded-[8px] md:hidden"
        type="button"
      >
        <Menu className="size-5" />
      </button>
    </header>
  );
}

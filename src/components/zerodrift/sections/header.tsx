import Image from "next/image";
import { ChevronDown, Menu } from "lucide-react";

import { ZERODRIFT_LOGO } from "../constants";

const dropdownLinks = ["Platform", "Solutions"];
const primaryLinks = ["Developers", "Security", "Company"];

export function Header() {
  return (
    <header className="mx-auto flex h-[86px] w-full max-w-[1360px] items-center justify-between px-5 md:px-0">
      <Image
        src={ZERODRIFT_LOGO}
        alt="ZeroDrift"
        width={184}
        height={31}
        priority
      />
      <nav className="hidden items-center gap-10 text-[16px] font-normal text-[#0b1020] md:flex">
        {dropdownLinks.map((item) => (
          <a
            className="flex items-center gap-2 hover:text-[#f15b37]"
            href="#"
            key={item}
          >
            {item}
            <ChevronDown aria-hidden className="size-4" />
          </a>
        ))}
        {primaryLinks.map((item) => (
          <a className="hover:text-[#f15b37]" href="#" key={item}>
            {item}
          </a>
        ))}
      </nav>
      <a
        className="hidden h-12 items-center justify-center rounded-[8px] bg-[#171719] px-7 text-[12px] font-bold uppercase text-white md:inline-flex"
        href="#demo"
      >
        Get Demo
      </a>
      <button
        aria-label="Open menu"
        className="inline-flex size-10 items-center justify-center rounded-[8px] md:hidden"
        type="button"
      >
        <Menu className="size-5" />
      </button>
    </header>
  );
}

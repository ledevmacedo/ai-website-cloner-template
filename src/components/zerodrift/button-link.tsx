import type { ReactNode } from "react";

type ButtonLinkProps = Readonly<{
  children: ReactNode;
  dark?: boolean;
}>;

export function ButtonLink({ children, dark = false }: ButtonLinkProps) {
  return (
    <a
      className={
        dark
          ? "inline-flex h-11 items-center justify-center rounded-[8px] bg-[#171719] px-7 text-[12px] font-bold uppercase tracking-normal text-white transition hover:bg-[#2b2b2e]"
          : "inline-flex h-11 items-center justify-center rounded-[8px] bg-white px-7 text-[12px] font-bold uppercase tracking-normal text-[#171719] transition hover:bg-white/90"
      }
      href="#demo"
    >
      {children}
    </a>
  );
}

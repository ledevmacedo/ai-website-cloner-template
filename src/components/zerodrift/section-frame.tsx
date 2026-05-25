import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionFrameProps = Readonly<{
  children: ReactNode;
  className?: string;
  id?: string;
}>;

export function SectionFrame({ children, className, id }: SectionFrameProps) {
  return (
    <section
      className={cn("mx-auto w-full max-w-[1360px] px-3 md:px-0", className)}
      id={id}
    >
      {children}
    </section>
  );
}

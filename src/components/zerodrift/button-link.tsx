"use client";

import Link from "next/link";
import type { ReactNode } from "react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ButtonLinkProps = Readonly<{
  children: ReactNode;
  className?: string;
  href?: string;
  variant?: "default" | "outline" | "secondary";
}>;

export function ButtonLink({
  children,
  className,
  href = "/piloto",
  variant = "default",
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        buttonVariants({ variant, size: "lg" }),
        "h-11 rounded-[8px] px-7 text-[12px] font-bold uppercase tracking-normal",
        className
      )}
      href={href}
    >
      {children}
    </Link>
  );
}

import type { ReactNode } from "react";

type PageShellProps = Readonly<{
  children: ReactNode;
}>;

export function PageShell({ children }: PageShellProps) {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white font-sans text-[#171719]">
      {children}
    </main>
  );
}

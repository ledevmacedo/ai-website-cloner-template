import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Impact Flow - Torne a qualificação em movimento de carreira",
  description:
    "O Impact Flow ajuda fundações, ONGs e instituições de formação social a organizar candidaturas, acompanhar formandos e provar resultados sem depender de folhas de cálculo, mensagens dispersas e relatórios montados à mão.",
  icons: {
    icon: "/seo/31-698a386255086c519eaa48cd_fav.png",
    apple: "/seo/32-698a3864caf4c5bbba1e1f4f_webclip.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased ">
      <body className="w-full min-h-full flex flex-col ">{children}</body>
    </html>
  );
}

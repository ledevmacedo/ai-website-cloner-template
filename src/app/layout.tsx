import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Impact Flow - Formação social, dados e empregabilidade",
  description:
    "Impact Flow organiza candidaturas, acompanha formandos e prova resultados de programas de formação social.",
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

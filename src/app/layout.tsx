import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZeroDrift - The AI Compliance Firewall",
  description:
    "ZeroDrift enforces SEC, FINRA, and firm policies on every message in real-time.",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

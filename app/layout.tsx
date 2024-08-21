import type { Metadata } from "next";
import { Noto_Sans_Cherokee } from "next/font/google";
import "./globals.css";

const suez = Noto_Sans_Cherokee({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Invata cu Snep",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={suez.className}>{children}</body>
    </html>
  );
}

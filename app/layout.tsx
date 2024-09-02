import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

import { cx } from "@/libs/cx";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const migha = localFont({ src: "./Migha.woff2", variable: "--font-migha" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cx(inter.className, migha.variable)}>{children}</body>
    </html>
  );
}

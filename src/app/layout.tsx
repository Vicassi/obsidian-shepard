import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vekaizen.™ // Soluções B2B",
  description: "Transformamos sua operação comercial com inteligência, tecnologia e growth marketing. Parceiros de crescimento focados em resultados práticos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${inter.variable} antialiased bg-zinc-950 text-zinc-50 selection:bg-accent selection:text-accent-foreground`}
      >
        {children}
      </body>
    </html>
  );
}

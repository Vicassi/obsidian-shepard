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
  openGraph: {
    title: "Vekaizen.™ // Soluções B2B",
    description: "Transformamos sua operação comercial com inteligência, tecnologia e growth marketing.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vekaizen Hero",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.png" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.png",
  },
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

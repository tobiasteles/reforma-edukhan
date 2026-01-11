import type { Metadata } from "next";
import { Kode_Mono } from "next/font/google"; // Importando a Kode Mono
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

// Configuração da Kode Mono
const kodeMono = Kode_Mono({
  variable: "--font-kode-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Reforma da Sede",
  description: "Campanha de reforma da sede do Edukhan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${kodeMono.variable} font-mono antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
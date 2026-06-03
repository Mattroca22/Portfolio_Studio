import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { LangProvider } from "@/hooks/useLang";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "DataCraft | Consultor Digital & Soluciones con IA",
  description: "Convierto tu caos digital en un negocio que crece solo. Especialista en desarrollo web, datos e inteligencia artificial.",
  icons: {
    icon: "/images/Logo_Mattro22_Studio.png",
    shortcut: "/images/Logo_Mattro22_Studio.png",
    apple: "/images/Logo_Mattro22_Studio.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="antialiased">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
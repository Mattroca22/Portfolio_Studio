import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { LangProvider } from "@/hooks/useLang";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "DataCraft | Data Engineer & Data Scientist",
  description: "I transform data into strategic decisions. Specialist in Data Engineering, Analytics and Machine Learning.",
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
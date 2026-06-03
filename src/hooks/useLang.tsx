"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { Lang, translations, Translations } from "@/lib/i18n";

interface LangContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

// CORREGIDO: Se quitó el doble <<
const LangContext = createContext<LangContextType | undefined>(undefined);

export function LangProvider({ children }: { children: ReactNode }) {
  // CORREGIDO: Se quitó el doble <<
  const [lang, setLangState] = useState<Lang>("ES");

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
    document.documentElement.lang = newLang.toLowerCase();
  }, []);

  const t = translations[lang];

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error("useLang must be used within a LangProvider");
  }
  return context;
}
"use client";

import { motion } from "framer-motion";
import { useLang } from "@/hooks/useLang";
import { Lang } from "@/lib/i18n";

export function LanguageToggle() {
  const { lang, setLang } = useLang();

  return (
    <div className="flex items-center gap-1 border border-white/10 rounded-md overflow-hidden">
      <button
        onClick={() => setLang("EN" as Lang)}
        className={`relative px-3 py-1.5 text-xs font-medium transition-colors ${
          lang === "EN" ? "text-white" : "text-white/40 hover:text-white/60"
        }`}
      >
        {lang === "EN" && (
          <motion.div
            layoutId="lang-active"
            className="absolute inset-0 border border-[#00d4ff] rounded-sm"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
        <span className="relative z-10">EN</span>
      </button>
      
      <button
        onClick={() => setLang("ES" as Lang)}
        className={`relative px-3 py-1.5 text-xs font-medium transition-colors ${
          lang === "ES" ? "text-white" : "text-white/40 hover:text-white/60"
        }`}
      >
        {lang === "ES" && (
          <motion.div
            layoutId="lang-active"
            className="absolute inset-0 border border-[#00d4ff] rounded-sm"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
        <span className="relative z-10">ES</span>
      </button>
    </div>
  );
}
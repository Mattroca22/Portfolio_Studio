"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useLang } from "@/hooks/useLang";

export function Hero() {
  const { t } = useLang();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4 sm:px-6">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#8b5cf6]/5 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-1 py-1 pr-4 rounded-full bg-[rgba(139,92,246,0.15)] border border-[rgba(139,92,246,0.2)] mb-6 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="px-3 py-1 rounded-full bg-[#8b5cf6] text-xs font-bold text-white">Nuevo</span>
            <span className="text-sm text-white/60">{t.hero.badge}</span>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 md:mb-6">
            <span className="text-white">{t.hero.headline1}</span>
            <br />
            <span className="text-white"> </span>
            <span className="text-[#00d4ff]">{t.hero.headline2.split(" ")[0]}</span>
            <span className="text-white"> {t.hero.headline2.split(" ").slice(1).join(" ")}</span>
          </h1>

          <p className="text-base md:text-lg text-white/60 mb-2 md:mb-4">
            {t.hero.subtitle}
          </p>
          <p className="text-sm md:text-base text-white/40 mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <Button variant="primary" size="md" className="sm:size-lg" href="#proyectos">
              {t.hero.ctaProjects}
            </Button>
            <Button variant="outline" size="md" className="sm:size-lg" href="#contacto">
              {t.hero.ctaCall}
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="hidden lg:flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="relative w-64 h-64 xl:w-80 xl:h-80">
            <div className="absolute inset-0 rounded-full border border-[#00d4ff]/20 animate-pulse" />
            <div className="absolute inset-4 rounded-full border border-[#8b5cf6]/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 xl:w-32 xl:h-32 rounded-full bg-gradient-to-br from-[#00d4ff]/20 to-[#8b5cf6]/20 flex items-center justify-center">
                <span className="text-4xl xl:text-6xl">📊</span>
              </div>
            </div>
            <motion.div
              className="absolute -right-4 top-10 bg-[rgba(255,255,255,0.03)] border border-[rgba(0,212,255,0.2)] rounded-xl p-3 xl:p-4 backdrop-blur-sm"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <code className="text-[10px] xl:text-xs font-mono">
                <span className="text-[#00d4ff]">df</span> = pd.read_sql(...)
                <br />
                <span className="text-[#8b5cf6]">model</span>.fit(X_train)
                <br />
                <span className="text-white/40">predictions = model</span>
              </code>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
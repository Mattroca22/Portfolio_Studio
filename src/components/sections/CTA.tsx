"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useLang } from "@/hooks/useLang";

export function CTA() {
  const { t } = useLang();

  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(139,92,246,0.05)] to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="rounded-3xl bg-[#0f0c19] border border-[rgba(139,92,246,0.2)] p-8 md:p-16 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-10 left-10 w-20 h-[2px] bg-[#8b5cf6]" />
          <div className="absolute bottom-10 right-10 w-20 h-[2px] bg-[#00d4ff]" />
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.cta.title}
          </h2>
          <p className="text-[rgba(255,255,255,0.6)] mb-2">
            {t.cta.subtitle}
          </p>
          <p className="text-[rgba(255,255,255,0.4)] mb-8">
            {t.cta.description}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Button variant="secondary" size="lg" href="https://calendly.com">
              {t.cta.schedule}
            </Button>
            <Button variant="outline" size="lg" href="mailto:tu@email.com">
              {t.cta.email}
            </Button>
          </div>
          
          <p className="text-sm text-[rgba(255,255,255,0.4)]">
            {t.cta.direct} <a href="mailto:tu@email.com" className="text-[#00d4ff] hover:underline">tu@email.com</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
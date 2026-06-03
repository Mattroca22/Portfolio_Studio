"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TrendingUp, Clock, DollarSign, Users } from "lucide-react";
import { useLang } from "@/hooks/useLang";

const icons = [TrendingUp, Clock, DollarSign, Users];

export function Results() {
  const { t } = useLang();

  const results = [
    { icon: TrendingUp, stat: "+40%", label: t.results.sales },
    { icon: Clock, stat: "-60%", label: t.results.time },
    { icon: DollarSign, stat: "$50K", label: t.results.savings },
    { icon: Users, stat: "3x", label: t.results.clients },
  ];

  return (
    <section className="py-16 md:py-24 bg-[rgba(139,92,246,0.03)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionLabel text={t.results.label} />
        
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t.results.title}
        </motion.h2>
        
        <motion.p
          className="text-white/60 mb-8 md:mb-12 max-w-2xl text-sm md:text-base"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {t.results.subtitle}
        </motion.p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {results.map((item, i) => (
            <motion.div
              key={item.label}
              className="rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] p-6 md:p-8 text-center hover:border-[rgba(0,212,255,0.3)] transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/30 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-[#00d4ff]" />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-[#00d4ff] mb-2">{item.stat}</p>
              <p className="text-sm text-white/60">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
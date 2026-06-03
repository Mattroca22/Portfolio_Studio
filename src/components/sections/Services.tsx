"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Card } from "@/components/ui/Card";
import { Database, BarChart3, Brain, ArrowRight } from "lucide-react";
import { useLang } from "@/hooks/useLang";

export function Services() {
  const { t } = useLang();

  const services = [
    {
      icon: Database,
      title: t.services.engineering.title,
      items: t.services.engineering.items,
    },
    {
      icon: BarChart3,
      title: t.services.analytics.title,
      items: t.services.analytics.items,
    },
    {
      icon: Brain,
      title: t.services.science.title,
      items: t.services.science.items,
    },
  ];

  return (
    <section id="servicios" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionLabel text={t.services.label} />
        
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t.services.title}
        </motion.h2>
        
        <motion.p
          className="text-white/60 mb-8 md:mb-12 max-w-2xl text-sm md:text-base"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {t.services.subtitle}
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <Card className="h-full">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/30 flex items-center justify-center mb-4 md:mb-6">
                  <service.icon className="w-5 h-5 md:w-6 md:h-6 text-[#00d4ff]" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-white mb-3 md:mb-4">{service.title}</h3>
                <ul className="space-y-2 md:space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs md:text-sm text-white/60">
                      <span className="w-1 h-1 rounded-full bg-[#00d4ff]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="#" className="inline-flex items-center gap-2 mt-4 md:mt-6 text-sm font-semibold text-[#00d4ff] hover:gap-3 transition-all">
                  {t.services.more} <ArrowRight className="w-4 h-4" />
                </a>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
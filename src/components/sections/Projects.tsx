"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Card } from "@/components/ui/Card";
import { ArrowRight, TrendingUp, Zap, Brain, Globe } from "lucide-react";
import { useLang } from "@/hooks/useLang";

const icons = [TrendingUp, Zap, Brain, Globe];

export function Projects() {
  const { t } = useLang();

  return (
    <section id="proyectos" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionLabel text={t.projects.label} />
        
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t.projects.title}
        </motion.h2>
        
        <motion.p
          className="text-white/60 mb-8 md:mb-12 max-w-2xl text-sm md:text-base"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {t.projects.subtitle}
        </motion.p>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {t.projects.cases.map((project, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <Card className="h-full group">
                  <div className="h-24 md:h-32 rounded-xl bg-[#0f1117] border border-[#00d4ff]/10 mb-4 flex items-end justify-around px-4 pb-4 overflow-hidden">
                    {[40, 65, 45, 80, 55, 90, 70].map((h, j) => (
                      <motion.div
                        key={j}
                        className="w-6 md:w-8 rounded-t bg-gradient-to-t from-[#00d4ff]/20 to-[#00d4ff]/60"
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + j * 0.1, duration: 0.5 }}
                      />
                    ))}
                  </div>
                  
                  <span className="inline-block px-3 py-1 rounded-lg bg-[#8b5cf6]/15 border border-[#8b5cf6]/20 text-xs text-[#a78bfa] mb-3">
                    {project.tag}
                  </span>
                  
                  <h3 className="text-base md:text-lg font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-xs md:text-sm text-[#00d4ff] mb-2 md:mb-3">{project.stack}</p>
                  <p className="text-xs md:text-sm text-white/40 mb-3 md:mb-4">{project.desc}</p>
                  
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 group-hover:text-[#00d4ff] transition-colors">
                    {t.projects.viewCase} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
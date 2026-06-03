"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useLang } from "@/hooks/useLang";

const techs = [
  { name: "Python", color: "#00d4ff" },
  { name: "SQL", color: "#ffffff" },
  { name: "AWS", color: "#ff9900" },
  { name: "Azure", color: "#0089d6" },
  { name: "GCP", color: "#4285f4" },
  { name: "Spark", color: "#e34f26" },
  { name: "Kafka", color: "#231f20" },
  { name: "dbt", color: "#ff6432" },
  { name: "Pandas", color: "#8080c8" },
  { name: "NumPy", color: "#4c70ac" },
  { name: "Scikit-learn", color: "#f0a030" },
  { name: "TensorFlow", color: "#ff6432" },
  { name: "PyTorch", color: "#ef6432" },
  { name: "Tableau", color: "#1e6496" },
  { name: "Power BI", color: "#f0b432" },
  { name: "Docker", color: "#0078c8" },
  { name: "Kubernetes", color: "#3264c8" },
  { name: "Airflow", color: "#00b4c8" },
];

export function TechStack() {
  const { t } = useLang();

  return (
    <section id="stack" className="py-24 bg-[rgba(255,255,255,0.02)]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel text={t.techStack.label} />
        
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t.techStack.title}
        </motion.h2>
        
        <motion.p
          className="text-[rgba(255,255,255,0.6)] mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {t.techStack.subtitle}
        </motion.p>

        <div className="flex flex-wrap gap-3 justify-center">
          {techs.map((tech, i) => (
            <motion.div
              key={tech.name}
              className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(0,212,255,0.3)] transition-all cursor-default"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: tech.color }} />
              <span className="text-sm font-semibold text-[rgba(255,255,255,0.6)]">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
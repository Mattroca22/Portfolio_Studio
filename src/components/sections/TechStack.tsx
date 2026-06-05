"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useLang } from "@/hooks/useLang";

// Slugs corregidos exactamente según la base de datos de Simple Icons
const techs = [
  { name: "Python", slug: "python", color: "#3776AB" },
  { name: "SQL", slug: "postgresql", color: "#4169E1" }, // Cambiado a postgresql que sí tiene un logo limpio de BD
  { name: "AWS", slug: "amazonwebservices", color: "#FF9900" }, // Corregido el slug oficial
  { name: "Azure", slug: "microsoftazure", color: "#0089D6" }, // Corregido el slug oficial
  { name: "GCP", slug: "googlecloud", color: "#4285F4" }, // Corregido el slug oficial
  { name: "Spark", slug: "apachespark", color: "#E25A1B" },
  { name: "Kafka", slug: "apachekafka", color: "#231F20" },
  { name: "dbt", slug: "dbt", color: "#FF694B" },
  { name: "Pandas", slug: "pandas", color: "#150458" },
  { name: "NumPy", slug: "numpy", color: "#013243" },
  { name: "Scikit-learn", slug: "scikitlearn", color: "#F7931E" }, // Corregido el slug oficial
  { name: "TensorFlow", slug: "tensorflow", color: "#FF6F00" },
  { name: "PyTorch", slug: "pytorch", color: "#EE4C2C" },
  { name: "Tableau", slug: "tableau", color: "#E97627" },
  { name: "Power BI", slug: "powerbi", color: "#F2C811" },
  { name: "Docker", slug: "docker", color: "#2496ED" },
  { name: "Git", slug: "git", color: "#F05032" },
];

export function TechStack() {
  const { t } = useLang();

  return (
    <section id="stack" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 relative overflow-hidden">
      <div className="flex flex-col items-center text-center mb-12">
        <SectionLabel>{t.techStack.label || "Stack"}</SectionLabel>
        
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

        {/* Contenedor Grid optimizado */}
        <div className="flex flex-wrap gap-4 justify-center max-w-4xl">
          {techs.map((tech, i) => {
            // Quitamos el "/ffffff" final para traer el SVG con el color real de la marca
            const iconUrl = `https://cdn.simpleicons.org/${tech.slug}`;

            return (
              <motion.div
                key={tech.name}
                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] transition-all duration-300 cursor-default group relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                whileHover={{ 
                  scale: 1.05,
                  borderColor: tech.color,
                  boxShadow: `0px 0px 20px -5px ${tech.color}40`
                }}
              >
                {/* Efecto Glow sutil en el fondo usando el color de la marca */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"
                  style={{ backgroundColor: tech.color }}
                />

                {/* Renderizado del Icono SVG a color */}
                <img 
                  src={iconUrl} 
                  alt={`${tech.name} logo`}
                  className="w-5 h-5 object-contain transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback por si acaso algún entorno bloquea el CDN de Simple Icons
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />

                <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
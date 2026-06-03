"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Star } from "lucide-react";
import { useLang } from "@/hooks/useLang";

function TestimonialCard({ testimonial }: { testimonial: any }) {
  return (
    <div className="flex-shrink-0 w-[400px] md:w-[500px] rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] p-8 mx-3">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-white/80 mb-6 leading-relaxed text-sm">"{testimonial.quote}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#8b5cf6] flex items-center justify-center text-white font-bold text-sm">
          {testimonial.author.charAt(0)}
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{testimonial.author}</p>
          <p className="text-white/40 text-xs">{testimonial.role} — {testimonial.location}</p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const { t } = useLang();
  const duplicated = [...t.testimonials.items, ...t.testimonials.items, ...t.testimonials.items];

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <SectionLabel text={t.testimonials.label} />
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t.testimonials.title}
        </motion.h2>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0f] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0f] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex"
          animate={{ x: [0, -1500] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {duplicated.map((item, i) => (
            <TestimonialCard key={i} testimonial={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
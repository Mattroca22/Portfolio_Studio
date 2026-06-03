"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useLang } from "@/hooks/useLang";

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00d4ff]">
      {count}{suffix}
    </span>
  );
}

export function Stats() {
  const { t } = useLang();
  
  const stats = [
    { value: 150, suffix: "+", label: t.stats.projects },
    { value: 8, suffix: "+", label: t.stats.experience },
    { value: 38, suffix: "", label: t.stats.clients },
    { value: 6, suffix: "x", label: t.stats.awards },
  ];

  return (
    <section className="py-12 md:py-16 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className={`text-center ${i > 0 ? "lg:border-l lg:border-white/5" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-xs md:text-sm text-white/40">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
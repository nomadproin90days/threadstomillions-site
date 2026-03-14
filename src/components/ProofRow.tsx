"use client";

import { motion } from "framer-motion";
import { reveal, revealWithDelay } from "@/lib/motion";

const stats = [
  { value: "5,200+", label: "Members", color: "hsl(var(--primary))" },
  { value: "25", label: "Course Modules", color: "hsl(var(--text))" },
  { value: "80%", label: "Affiliate Commission", color: "hsl(var(--primary))" },
  { value: "$97", label: "Lifetime Access", color: "hsl(var(--text))" },
];

export const ProofRow = () => {
  return (
    <section className="py-16 md:py-20 border-y border-[hsl(var(--border))] section-glow">
      <div className="editorial-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              {...revealWithDelay(i * 0.1)}
              className="text-center md:border-r md:last:border-r-0 border-[hsl(var(--border))]"
            >
              <div
                className="font-mono text-3xl md:text-4xl font-semibold mb-2"
                style={{ color: stat.color }}
              >
                {stat.value}
              </div>
              <div className="text-[12px] uppercase tracking-[0.2em] text-[hsl(var(--muted-text))]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

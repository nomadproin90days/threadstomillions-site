"use client";

import { motion } from "framer-motion";

export const ProofRow = () => {
  return (
    <section className="py-12 border-y border-[var(--border)] bg-white">
      <div className="editorial-container">
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full justify-center">
            <div className="text-center md:text-left">
              <div className="font-mono text-3xl font-semibold text-[var(--foreground)] mb-1">10,000+</div>
              <div className="text-micro text-[var(--muted-foreground)]">Active Members</div>
            </div>
            
            <div className="hidden md:block w-px h-12 bg-[var(--border)]"></div>
            
            <div className="text-center md:text-left">
              <div className="font-mono text-3xl font-semibold text-[var(--foreground)] mb-1">500+</div>
              <div className="text-micro text-[var(--muted-foreground)]">Verified Case Studies</div>
            </div>

            <div className="hidden md:block w-px h-12 bg-[var(--border)]"></div>
            
            <div className="text-center md:text-left">
              <div className="font-mono text-3xl font-semibold text-[var(--success)] mb-1">+142%</div>
              <div className="text-micro text-[var(--muted-foreground)]">Avg Reply Rate Uplift</div>
            </div>
          </div>

          <div className="text-center md:text-right shrink-0">
            <a href="#faq" className="text-small text-[var(--muted-foreground)] underline decoration-[var(--border)] hover:text-[var(--foreground)] hover:decoration-[var(--foreground)] transition-colors">
              How we calculate this
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

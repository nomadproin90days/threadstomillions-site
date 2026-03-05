"use client";

import { motion } from "framer-motion";
import { reveal } from "@/lib/motion";

export const ProofRow = () => {
  return (
    <section className="py-12 border-y border-[var(--border)] bg-white">
      <div className="editorial-container">
        <motion.div
          {...reveal}
          className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full justify-center">
            <div className="text-center md:text-left">
              <div className="font-mono text-3xl font-semibold text-[var(--foreground)] mb-1">5,200+</div>
              <div className="text-micro text-[var(--muted-foreground)]">Community Members</div>
            </div>

            <div className="hidden md:block w-px h-12 bg-[var(--border)]"></div>

            <div className="text-center md:text-left">
              <div className="font-mono text-3xl font-semibold text-[var(--foreground)] mb-1">Aug 2024</div>
              <div className="text-micro text-[var(--muted-foreground)]">Community Established</div>
            </div>

            <div className="hidden md:block w-px h-12 bg-[var(--border)]"></div>

            <div className="text-center md:text-left">
              <div className="font-mono text-3xl font-semibold text-[var(--success)] mb-1">Active Daily</div>
              <div className="text-micro text-[var(--muted-foreground)]">
                <a href="https://www.skool.com/threads-to-millions-community-1202" target="_blank" rel="noopener noreferrer" className="underline decoration-[var(--border)] hover:text-[var(--foreground)] hover:decoration-[var(--foreground)] transition-colors">
                  Verified on Skool
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

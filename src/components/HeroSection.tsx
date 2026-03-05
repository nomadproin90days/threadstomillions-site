"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { NOMAD_URL } from "@/lib/constants";
import { useSearchParams } from "@/lib/useSearchParams";
import { reveal, revealWithDelay } from "@/lib/motion";

const HeroSection = () => {
  const searchParams = useSearchParams();

  return (
    <section className="pt-40 pb-20 md:pt-48 md:pb-24 bg-[var(--background)]">
      <div className="editorial-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Copy */}
          <motion.div
            initial={reveal.initial}
            animate={{ opacity: 1, y: 0 }}
            transition={reveal.transition}
            className="max-w-2xl"
          >
            <h1 className="text-h1 text-[var(--foreground)] mb-6">
              Turn Threads Into Qualified Leads in 30 Days
            </h1>

            <p className="text-body-l text-[var(--muted-foreground)] mb-10 max-w-lg">
              A step-by-step system for creators and service businesses to grow audience, start real conversations, and convert without spammy posts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href={`${NOMAD_URL}${searchParams}`} className="w-full sm:w-auto">
                <button className="w-full sm:w-auto btn-primary text-[15px] px-8 py-4 flex items-center justify-center gap-2 shadow-sm">
                  See How It Works
                  <ArrowRight size={18} />
                </button>
              </a>
              <a href="#results" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto btn-secondary text-[15px] px-8 py-4">
                  View Real Results
                </button>
              </a>
            </div>
          </motion.div>

          {/* Right: Proof Visual */}
          <motion.div
            initial={reveal.initial}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...reveal.transition, delay: 0.05 }}
            className="relative lg:h-[600px] w-full rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--surface)] shadow-card flex items-center justify-center p-6"
          >
            <img 
              src="/lexie.jpg" 
              alt="Lexie - Threads to Millions Creator" 
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 rounded-xl"
            />
            {/* Overlay Metric Badge */}
            <div className="absolute bottom-10 left-10 bg-white p-4 rounded-xl border border-[var(--border)] shadow-lg max-w-[200px]">
              <div className="font-mono text-[var(--success)] font-semibold mb-1">5,200+</div>
              <div className="text-micro text-[var(--muted-foreground)]">Active Members on Skool</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;

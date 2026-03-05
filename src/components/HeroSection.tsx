"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { NOMAD_URL } from "@/lib/constants";
import { useSearchParams } from "@/lib/useSearchParams";

const HeroSection = () => {
  const searchParams = useSearchParams();

  return (
    <section className="pt-40 pb-20 md:pt-48 md:pb-24 bg-[var(--background)]">
      <div className="editorial-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
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
                <button className="w-full sm:w-auto bg-[var(--primary)] text-white px-8 py-4 rounded-[var(--radius-button-primary)] font-semibold text-[15px] hover:bg-[var(--primary-hover)] hover:-translate-y-[1px] transition-all flex items-center justify-center gap-2 shadow-sm">
                  See How It Works
                  <ArrowRight size={18} />
                </button>
              </a>
              <a href="#results" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-transparent border border-[var(--border)] text-[var(--foreground)] px-8 py-4 rounded-[var(--radius-button-secondary)] font-semibold text-[15px] hover:bg-[#F0EFEC] transition-colors">
                  View Real Results
                </button>
              </a>
            </div>
          </motion.div>

          {/* Right: Proof Visual */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05, ease: "easeOut" }}
            className="relative lg:h-[600px] w-full rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--surface)] shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-center justify-center p-6"
          >
            {/* Using Lexie's image for now to represent the real proof visual instead of abstract gradients */}
            <img 
              src="/Lexie.jpg" 
              alt="Lexie - Threads to Millions Creator" 
              className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
            />
            
            {/* Overlay Metric Badge */}
            <div className="absolute bottom-10 left-10 bg-white p-4 rounded-xl border border-[var(--border)] shadow-lg max-w-[200px]">
              <div className="font-mono text-[var(--success)] font-semibold mb-1">+142% Uplift</div>
              <div className="text-micro text-[var(--muted-foreground)]">Avg Reply Rate</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;

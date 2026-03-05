"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { NOMAD_URL } from "@/lib/constants";
import { useSearchParams } from "@/lib/useSearchParams";

const HeroSection = () => {
  const searchParams = useSearchParams();

  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 bg-white">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Verified 2026 Strategy</span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl mb-8 leading-[0.9] text-slate-950 italic">
              Turn Threads Into Qualified Leads in 30 Days
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              A step-by-step system for creators and service businesses to grow an audience and convert without spammy posts.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a href={`${NOMAD_URL}${searchParams}`} className="w-full sm:w-auto">
                <Button size="lg" className="h-14 px-10 text-lg bg-slate-950 text-white hover:bg-slate-800 rounded-none w-full font-medium transition-all">
                  See How It Works
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="#results" className="w-full sm:w-auto">
                <Button size="lg" variant="ghost" className="h-14 px-10 text-lg text-slate-600 hover:text-slate-950 w-full font-medium italic">
                  View Real Results
                </Button>
              </a>
            </div>

            {/* Proof Strip - Ultra Clean */}
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4 pt-12 border-t border-slate-100 text-slate-400 text-xs font-medium uppercase tracking-[0.2em]">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500" />
                <span>10,000+ Members</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500" />
                <span>Verified Case Studies</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500" />
                <span>30-Day Guarantee</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

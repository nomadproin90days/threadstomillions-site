"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Users, CheckCircle2 } from "lucide-react";
import { NOMAD_URL } from "@/lib/constants";
import { useSearchParams } from "@/lib/useSearchParams";

const HeroSection = () => {
  const searchParams = useSearchParams();

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-950">
      {/* Background Effects - Subtle and Professional */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-slate-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-tight">
              Turn Threads Into <span className="text-primary">Qualified Leads</span> in 30 Days
            </h1>

            <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
              A step-by-step system for creators and service businesses to grow an audience, start real conversations, and convert without spammy posts.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a href="#roadmap" className="w-full sm:w-auto">
                <Button size="lg" className="h-14 px-10 text-lg bg-white text-slate-900 hover:bg-slate-200 rounded-full w-full font-bold">
                  See How It Works
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="#results" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="h-14 px-10 text-lg border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white rounded-full w-full font-bold">
                  View Real Results
                </Button>
              </a>
            </div>

            {/* Proof Strip - Skepticism Killer */}
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 py-6 border-y border-slate-900/50 text-slate-500 text-sm font-medium">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-500" />
                <span>Used by 10,000+ members</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Verified case studies inside</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>30-day money-back guarantee</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { NOMAD_URL } from "@/lib/constants";
import { useSearchParams } from "@/lib/useSearchParams";
import { reveal } from "@/lib/motion";

export const CTASection = () => {
  const searchParams = useSearchParams();

  return (
    <section className="section-dark py-32 md:py-48">
      <div className="reading-container text-center relative z-10">
        <motion.div {...reveal}>
          <h2 className="text-h1 mb-6 text-white">
            Start the System. Build the Pipeline.
          </h2>

          <p className="text-lg text-white/60 mb-12 max-w-xl mx-auto">
            If you want qualified leads from Threads without guessing what to
            post next, this is your operating system.
          </p>

          <div className="flex flex-col items-center gap-6">
            <a
              href={`${NOMAD_URL}${searchParams}`}
              className="w-full sm:w-auto"
            >
              <button className="w-full sm:w-auto btn-primary text-[16px] px-10 py-5 flex items-center justify-center gap-2 shadow-lg shadow-[hsl(var(--primary))]/20">
                Start the System
                <ArrowRight size={18} />
              </button>
            </a>

            <div className="text-sm text-white/40 max-w-md mx-auto leading-relaxed">
              Try it for 30 days. If it&apos;s not a fit, email{" "}
              <a
                href="mailto:hello@threadstomillions.com"
                className="text-white/70 underline decoration-white/20 hover:decoration-white/50 transition-colors"
              >
                hello@threadstomillions.com
              </a>{" "}
              for a refund.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { NOMAD_URL } from "@/lib/constants";
import { useSearchParams } from "@/lib/useSearchParams";
import { reveal } from "@/lib/motion";

export const CTASection = () => {
  const searchParams = useSearchParams();

  return (
    <section className="py-32 md:py-48 bg-[var(--surface)] border-y border-[var(--border)]">
      <div className="reading-container text-center">
        <motion.div {...reveal}>
          <h2 className="text-h1 mb-6 text-[var(--foreground)]">
            Start the System. Build the Pipeline.
          </h2>

          <p className="text-body-l text-[var(--muted-foreground)] mb-12">
            If you want qualified leads from Threads without guessing what to post next, this is your operating system.
          </p>

          <div className="flex flex-col items-center gap-6">
            <a href={`${NOMAD_URL}${searchParams}`} className="w-full sm:w-auto">
              <button className="w-full sm:w-auto btn-primary text-[16px] px-10 py-5 flex items-center justify-center gap-2 shadow-sm">
                Start the System
                <ArrowRight size={18} />
              </button>
            </a>

            <div className="text-small text-[var(--muted-foreground)] max-w-md mx-auto leading-relaxed">
              Try it for 30 days. If it's not a fit, email <a href="mailto:hello@threadstomillions.com" className="text-[var(--foreground)] underline decoration-[var(--border)] hover:decoration-[var(--foreground)] transition-colors">hello@threadstomillions.com</a> for a refund.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { NOMAD_URL } from "@/lib/constants";
import { useSearchParams } from "@/lib/useSearchParams";

const CTASection = () => {
  const searchParams = useSearchParams();

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium text-sm">30-Day Money-Back Guarantee</span>
          </div>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-6 text-balance">
            Ready to Transform Your{" "}
            <span className="ttm-gradient-text">Threads Game?</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
            Join thousands of creators who are building profitable businesses on Threads.
            Your journey starts with a single step.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`${NOMAD_URL}${searchParams}`}
              className="ttm-cta px-8 py-4 text-base md:text-lg text-center"
            >
              Get Instant Access
            </a>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            Cancel anytime &middot; 30-day money-back guarantee &middot; Instant access
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            Secure checkout powered by Nomad Pro
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

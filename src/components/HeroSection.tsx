"use client";

import { motion } from "framer-motion";
import { NOMAD_URL } from "@/lib/constants";
import { useSearchParams } from "@/lib/useSearchParams";

const HeroSection = () => {
  const searchParams = useSearchParams();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a1118]">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1118] via-[#0f1d2a] to-[#0a1118]" aria-hidden="true" />
      <div className="absolute inset-0 ttm-hero-overlay" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-card/50 backdrop-blur-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
            <span className="text-sm text-muted-foreground">Join 10,000+ Creators Growing on Threads</span>
          </motion.div>

          {/* Main Headline */}
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl leading-tight mb-6 text-balance">
            Turn Your{" "}
            <span className="ttm-gradient-text">Threads</span>
            <br />
            Into a Business
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 font-light leading-relaxed">
            The proven roadmap to turn your content into conversions — without feeling spammy or salesy.
          </p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <a
              href={`${NOMAD_URL}${searchParams}`}
              className="ttm-cta px-8 py-4 text-base md:text-lg text-center"
            >
              Start Growing on Threads
            </a>
            <a
              href="#strategy"
              className="px-8 py-4 border border-primary/30 text-primary hover:bg-primary/10 rounded-full font-medium transition-all text-center text-base"
            >
              See the Method
            </a>
          </motion.div>

          {/* Social Proof Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-8 md:gap-12"
          >
            {[
              { number: "10K+", label: "Active Members" },
              { number: "$2M+", label: "Revenue Generated" },
              { number: "500%", label: "Avg. Growth Rate" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading text-2xl md:text-3xl font-bold ttm-gold-gradient-text">
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          aria-hidden="true"
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
            >
              <div className="w-1 h-2 rounded-full bg-primary" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

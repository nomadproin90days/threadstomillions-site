"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { NOMAD_URL } from "@/lib/constants";
import { useSearchParams } from "@/lib/useSearchParams";

const letterVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: i * 0.03, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  }),
};

function AnimatedHeadline({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={className}>
      {text.split("").map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          custom={i}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          className="inline-block"
          style={char === " " ? { width: "0.3em" } : undefined}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

const HeroSection = () => {
  const searchParams = useSearchParams();

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/beach-hero.png"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(215,25%,8%,0.75)] via-[hsl(215,25%,8%,0.85)] to-[hsl(215,25%,8%,1)]" />
      </div>

      {/* Content */}
      <div className="editorial-container relative z-10 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.2em] text-[hsl(var(--primary))] font-semibold">
              <span className="w-8 h-px bg-[hsl(var(--primary))]" />
              The proven Threads growth system
            </span>
          </motion.div>

          {/* Main headline — cinematic text reveal */}
          <h1 className="text-[clamp(3rem,8vw,7rem)] leading-[0.95] tracking-[0.01em] mb-8">
            <AnimatedHeadline text="TURN YOUR " />
            <br className="hidden md:block" />
            <AnimatedHeadline text="THREADS INTO " />
            <span className="accent-italic text-[1.05em]">
              <AnimatedHeadline text="Revenue" className="accent-italic" />
            </span>
          </h1>

          {/* Sub copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-[18px] md:text-[20px] leading-relaxed text-[hsl(var(--text)/0.6)] mb-10 max-w-xl"
          >
            The step-by-step system 5,200+ creators use to get leads, sales, and real engagement from Threads. No ads. No fluff. Just a daily playbook that works.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a href={`${NOMAD_URL}${searchParams}`}>
              <button className="btn-primary text-[16px] px-10 py-5 flex items-center gap-3 shadow-lg shadow-[hsl(var(--primary))]/15">
                Get Instant Access
                <ArrowRight size={18} />
              </button>
            </a>
            <a href="#results">
              <button className="btn-secondary text-[16px] px-10 py-5">
                See Real Results
              </button>
            </a>
          </motion.div>

          {/* Social proof strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="flex items-center gap-5 text-[14px] text-[hsl(var(--text)/0.4)]"
          >
            <div className="flex -space-x-2">
              {["C", "S", "D", "K", "V"].map((letter, i) => (
                <div
                  key={letter}
                  className="w-9 h-9 rounded-full border-2 border-[hsl(var(--bg))] bg-[hsl(var(--primary)/0.2)] flex items-center justify-center text-[hsl(var(--primary))] text-[11px] font-bold"
                  style={{ zIndex: 5 - i }}
                >
                  {letter}
                </div>
              ))}
            </div>
            <div>
              <span className="text-[hsl(var(--primary))] font-semibold">5,200+</span> creators already inside
              <span className="mx-2 opacity-30">|</span>
              <span>80% affiliate commission</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border border-[hsl(var(--text)/0.2)] flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 rounded-full bg-[hsl(var(--primary))]" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

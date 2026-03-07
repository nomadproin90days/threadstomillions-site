"use client";

import { motion } from "framer-motion";
import { NOMAD_URL } from "@/lib/constants";
import { useSearchParams } from "@/lib/useSearchParams";
import { reveal, revealWithDelay, slideInLeft } from "@/lib/motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    letter: "S",
    title: "Story First",
    desc: "Post one credibility story daily. 15 min.",
    result: "More profile visits and trust signals.",
  },
  {
    letter: "T",
    title: "Teach for Free",
    desc: "Publish one tactical framework post daily. 20 min.",
    result: "Authority and saves from the right audience.",
  },
  {
    letter: "A",
    title: "80/20 Engagement",
    desc: "Spend 80% of time on strategic replies. 25 min.",
    result: "Better reach + warmer inbound DMs.",
  },
  {
    letter: "R",
    title: "Sell in the Downthread",
    desc: "Place your offer after value, not before. 5 min.",
    result: "More qualified clicks, lower resistance.",
  },
];

export const MethodSection = () => {
  const searchParams = useSearchParams();

  return (
    <section id="method" className="py-24 md:py-32 section-glow relative">
      <div className="editorial-container relative z-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-16 md:mb-20">
          <motion.div {...reveal}>
            <span className="inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.2em] text-[hsl(var(--primary))] font-semibold mb-6">
              <span className="w-8 h-px bg-[hsl(var(--primary))]" />
              The Method
            </span>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95]">
              THE <span className="accent-italic">STAR</span> SYSTEM
            </h2>
          </motion.div>
          <motion.div {...revealWithDelay(0.15)} className="flex items-end">
            <p className="text-[18px] text-[hsl(var(--text)/0.5)] leading-relaxed">
              Most Threads accounts post and pray. This is the operating system that replaces hope with a repeatable daily conversion process.
            </p>
          </motion.div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.letter}
              {...revealWithDelay(i * 0.1)}
              className="relative group"
            >
              <div className="glass-card p-8 h-full hover:border-[hsl(var(--primary)/0.3)] transition-all duration-500">
                {/* Big letter */}
                <div
                  className="text-[5rem] leading-none font-bold text-[hsl(var(--primary)/0.1)] group-hover:text-[hsl(var(--primary)/0.2)] transition-colors absolute top-4 right-6"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {step.letter}
                </div>

                <div className="relative">
                  <h3 className="text-[1.5rem] mb-4">{step.title}</h3>
                  <p className="text-[15px] text-[hsl(var(--text)/0.6)] mb-6">
                    {step.desc}
                  </p>
                  <div className="pt-4 border-t border-[hsl(var(--border))]">
                    <span className="text-[12px] uppercase tracking-[0.15em] text-[hsl(var(--primary))]">Result: </span>
                    <span className="text-[14px] text-[hsl(var(--text)/0.8)]">{step.result}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div {...revealWithDelay(0.5)} className="mt-12 text-center">
          <a href={`${NOMAD_URL}${searchParams}`}>
            <button className="btn-primary text-[16px] px-10 py-5 flex items-center gap-3 mx-auto shadow-lg shadow-[hsl(var(--primary))]/15">
              Start the STAR System
              <ArrowRight size={18} />
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MethodSection;

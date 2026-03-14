"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { reveal, revealWithDelay, slideInLeft, slideInRight } from "@/lib/motion";

export const AboutCreator = () => {
  return (
    <section className="py-24 md:py-32 section-glow relative">
      <div className="editorial-container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left: Photo */}
          <motion.div {...slideInLeft} className="lg:col-span-5">
            <div className="relative">
              <Image
                src="/lexie.jpg"
                alt="Lexie, founder of Threads to Millions and creator of the STAR Method for Threads growth"
                width={600}
                height={600}
                className="w-full rounded-[var(--radius-card)] border border-[hsl(var(--border))]"
              />
              <div className="absolute -bottom-4 -right-4 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] px-5 py-3 rounded-[var(--radius-ui)] font-bold text-[14px] uppercase tracking-wider">
                @getdigitalwithlexie
              </div>
            </div>
          </motion.div>

          {/* Right: Story */}
          <div className="lg:col-span-7">
            <motion.div {...reveal}>
              <span className="inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.2em] text-[hsl(var(--primary))] font-semibold mb-6">
                <span className="w-8 h-px bg-[hsl(var(--primary))]" />
                Meet Lexie
              </span>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] mb-8">
                BUILT BY A CREATOR WHO HAD TO <span className="accent-italic">Make It Work</span>
              </h2>
            </motion.div>

            <motion.div {...revealWithDelay(0.1)} className="space-y-5 text-[16px] text-[hsl(var(--text)/0.6)] leading-relaxed mb-10">
              <p>
                In August 2024, I was trading time for money and needed a repeatable way to turn content into clients.
              </p>
              <p>
                Random posting, no conversion path, and relying on hope instead of a DM system. That all failed. So I built a structured method focused on trust, teaching, strategic engagement, and precise offer placement.
              </p>
              <p className="text-[hsl(var(--text)/0.9)] font-medium">
                The result: consistent inbound conversations and 5-figure months generated entirely from Threads.
              </p>
            </motion.div>

            {/* Guarantees */}
            <motion.div {...revealWithDelay(0.2)} className="grid sm:grid-cols-2 gap-4">
              <div className="glass-card p-5">
                <h4 className="text-[14px] font-bold text-[hsl(var(--text))] mb-2 uppercase tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif" }}>What I guarantee</h4>
                <p className="text-[14px] text-[hsl(var(--text)/0.5)]">
                  A clear system, exact tools, and ongoing support to execute.
                </p>
              </div>
              <div className="glass-card p-5">
                <h4 className="text-[14px] font-bold text-[hsl(var(--text))] mb-2 uppercase tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif" }}>What I can&apos;t guarantee</h4>
                <p className="text-[14px] text-[hsl(var(--text)/0.5)]">
                  Specific numbers without your consistent daily execution.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCreator;

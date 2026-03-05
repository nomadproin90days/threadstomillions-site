"use client";

import { motion } from "framer-motion";
import { NOMAD_URL } from "@/lib/constants";
import { useSearchParams } from "@/lib/useSearchParams";
import { reveal, revealWithDelay } from "@/lib/motion";

const blockers = [
  "You post consistently but qualified DMs are inconsistent.",
  "Your content gets likes, not buyer intent.",
  "You don't have a reliable system from post to offer."
];

const steps = [
  {
    letter: "S",
    title: "Story First",
    action: "Post one credibility story daily.",
    time: "15 minutes/day",
    result: "More profile visits and trust signals"
  },
  {
    letter: "T",
    title: "Teach for Free",
    action: "Publish one tactical framework post daily.",
    time: "20 minutes/day",
    result: "Authority and saves/shares from the right audience"
  },
  {
    letter: "A",
    title: "80/20 Engagement",
    action: "Spend 80% of your time on strategic replies and conversations.",
    time: "20-30 minutes/day",
    result: "Better reach + warmer inbound DMs"
  },
  {
    letter: "R",
    title: "Sell in the Downthread",
    action: "Place your offer after value, not before it.",
    time: "5 minutes/post",
    result: "More qualified clicks and lower resistance"
  }
];

export const MethodSection = () => {
  const searchParams = useSearchParams();

  return (
    <section id="method" className="py-24 md:py-32 bg-[var(--surface)] border-y border-[var(--border)]">
      <div className="editorial-container">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Left: The Problem */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <h2 className="text-h2 mb-6">Why Most Threads Accounts Don't Convert</h2>
              <ul className="space-y-6">
                {blockers.map((blocker, i) => (
                  <motion.li
                    key={i}
                    {...revealWithDelay(i * 0.05)}
                    className="flex items-start gap-4 text-body-l text-[var(--muted-foreground)]"
                  >
                    <span className="text-[var(--warning)] font-serif mt-1">—</span>
                    {blocker}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: The Method (STAR) */}
          <div className="lg:col-span-7">
            <h3 className="text-micro text-[var(--muted-foreground)] mb-10">THE STAR METHOD</h3>

            <div className="space-y-12">
              {steps.map((step, i) => (
                <motion.div
                  key={step.letter}
                  {...revealWithDelay(i * 0.05)}
                  className="relative pl-10 md:pl-16 border-l border-[var(--border)]"
                >
                  <div className="absolute left-[-16px] top-0 w-8 h-8 rounded-full bg-[var(--background)] border border-[var(--border)] flex items-center justify-center font-serif text-[var(--foreground)]">
                    {step.letter}
                  </div>

                  <h4 className="text-h3 mb-3">{step.title}</h4>
                  <p className="text-body text-[var(--foreground)] mb-4">{step.action}</p>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-small text-[var(--muted-foreground)] bg-[var(--background)] p-4 rounded-[var(--radius-card)] border border-[var(--border)]">
                    <div className="flex items-center gap-2">
                      <span className="text-micro">TIME:</span> {step.time}
                    </div>
                    <div className="hidden sm:block w-px h-4 bg-[var(--border)]"></div>
                    <div className="flex items-center gap-2">
                      <span className="text-micro text-[var(--success)]">RESULT:</span> <span className="text-[var(--foreground)]">{step.result}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              {...revealWithDelay(0.3)}
              className="mt-16 pl-10 md:pl-16"
            >
              <a href={`${NOMAD_URL}${searchParams}`}>
                <button className="btn-primary text-[15px] px-8 py-4 shadow-sm">
                  Start the STAR System
                </button>
              </a>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default MethodSection;

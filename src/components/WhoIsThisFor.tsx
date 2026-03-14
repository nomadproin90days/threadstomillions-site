"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { reveal, revealWithDelay, slideInLeft, slideInRight } from "@/lib/motion";

const profiles = [
  {
    label: "Creators",
    pain: "You get views but can't turn attention into sales.",
    fix: "A daily system that converts engagement into pipeline.",
  },
  {
    label: "Coaches",
    pain: "You want inbound leads without paying for ads.",
    fix: "A content-to-conversation framework that attracts buyers.",
  },
  {
    label: "Service Biz",
    pain: "You need a repeatable way to generate demand.",
    fix: "A structured daily process from post to qualified DM.",
  },
];

export const WhoIsThisFor = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/beach-boardwalk.png"
          alt=""
          fill
          className="object-cover opacity-15"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[hsl(var(--bg))] opacity-90" />
      </div>

      <div className="editorial-container relative z-10">
        {/* Section header */}
        <motion.div {...reveal} className="text-center mb-16 md:mb-20">
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] mb-6">
            TTM IS FOR <span className="accent-italic">You</span> IF YOU&apos;RE...
          </h2>
          <p className="text-[18px] text-[hsl(var(--text)/0.5)] max-w-xl mx-auto">
            Struggling to turn your Threads presence into actual revenue? You&apos;re not alone.
          </p>
        </motion.div>

        {/* Profile cards — asymmetric grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {profiles.map((profile, i) => (
            <motion.div
              key={profile.label}
              {...revealWithDelay(i * 0.12)}
              className="glass-card p-8 group hover:border-[hsl(var(--primary)/0.3)] transition-all duration-500"
            >
              <div className="text-[hsl(var(--primary))] text-[13px] uppercase tracking-[0.2em] font-bold mb-6">
                {profile.label}
              </div>
              <p className="text-[hsl(var(--text)/0.5)] text-[15px] mb-6 line-through decoration-[hsl(var(--text)/0.15)]">
                {profile.pain}
              </p>
              <p className="text-[hsl(var(--text))] text-[16px] font-medium">
                {profile.fix}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Not for everyone — warning */}
        <motion.div
          {...revealWithDelay(0.4)}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-[15px] text-[hsl(var(--muted-text))] italic">
            Not for people looking for overnight virality with zero effort. This is a daily operating system.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;

"use client";

import { motion } from "framer-motion";
import { reveal, revealWithDelay } from "@/lib/motion";

export const WhoIsThisFor = () => {
  return (
    <section className="py-24 md:py-32 bg-[var(--background)]">
      <div className="editorial-container">

        <div className="mb-16 text-center md:text-left">
          <h2 className="text-h2 mb-4">Who This Is For</h2>
          <p className="text-body-l text-[var(--muted-foreground)] max-w-2xl">
            This is an operational business system. It works best for these three profiles.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: "Creators",
              desc: "You get engagement and views, but struggle to turn that attention into consistent sales or newsletter subscribers."
            },
            {
              title: "Coaches & Consultants",
              desc: "You want a predictable way to generate inbound, high-ticket leads without relying on paid ads."
            },
            {
              title: "Service Businesses",
              desc: "You need a repeatable daily content-to-conversion process to establish authority in your niche."
            }
          ].map((item, i) => (
            <motion.div
              key={item.title}
              {...revealWithDelay(i * 0.05)}
              className="editorial-card"
            >
              <div className="text-h3 mb-3">{item.title}</div>
              <p className="text-body text-[var(--muted-foreground)]">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...revealWithDelay(0.2)}
          className="bg-[var(--surface)] border border-[var(--warning)]/30 rounded-[var(--radius-card)] p-8 md:p-10 flex flex-col md:flex-row items-center gap-6"
        >
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--warning)]/10 flex items-center justify-center text-[var(--warning)] font-serif text-2xl italic">
            !
          </div>
          <div>
            <h3 className="text-[20px] font-semibold text-[var(--foreground)] mb-2">Not for everyone</h3>
            <p className="text-body text-[var(--muted-foreground)]">
              This is not for people looking for overnight virality with zero effort, or creators who are unwilling to execute a daily operational checklist.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhoIsThisFor;

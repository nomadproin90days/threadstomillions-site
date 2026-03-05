"use client";

import { motion } from "framer-motion";

export const AboutCreator = () => {
  return (
    <section className="py-24 md:py-32 bg-[var(--surface)] border-y border-[var(--border)]">
      <div className="editorial-container">
        
        <div className="mb-16">
          <h2 className="text-h2 mb-4">Built by a Creator Who Had to Make It Work</h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left: Narrative & Timeline */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="text-body-l text-[var(--muted-foreground)] mb-12 max-w-2xl leading-relaxed space-y-6"
            >
              <p>
                In August 2024, I was trading time for money and needed a repeatable way to turn content into clients.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="space-y-8 pl-6 border-l-2 border-[var(--border)] relative"
            >
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-[var(--surface)] border-2 border-[var(--warning)]" />
                <h3 className="text-small text-[var(--muted-foreground)] mb-1">What failed first</h3>
                <p className="text-body text-[var(--foreground)] font-medium">Random posting, no conversion path, and relying on hope instead of a DM system.</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-[var(--surface)] border-2 border-[var(--primary)]" />
                <h3 className="text-small text-[var(--muted-foreground)] mb-1">What changed</h3>
                <p className="text-body text-[var(--foreground)] font-medium">Built a structured method focused on trust, teaching, strategic engagement, and precise offer placement.</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-[var(--surface)] border-2 border-[var(--success)]" />
                <h3 className="text-small text-[var(--muted-foreground)] mb-1">What followed</h3>
                <p className="text-body text-[var(--foreground)] font-medium">Consistent inbound conversations and 5-figure months generated entirely from Threads-led demand.</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Guarantees & Profile */}
          <div className="lg:col-span-4 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="editorial-card bg-[var(--background)]"
            >
              <h4 className="text-[18px] font-semibold text-[var(--foreground)] mb-2">What I can guarantee</h4>
              <p className="text-small text-[var(--muted-foreground)] mb-6">
                You will get a clear system, exact implementation tools, and ongoing support to execute.
              </p>

              <h4 className="text-[18px] font-semibold text-[var(--foreground)] mb-2">What I cannot guarantee</h4>
              <p className="text-small text-[var(--muted-foreground)]">
                Specific income or follower numbers without your consistent, daily execution.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.3 }}
              className="flex items-center gap-4"
            >
              <img src="/Lexie.jpg" alt="Lexie" className="w-16 h-16 rounded-full object-cover grayscale" />
              <div>
                <div className="font-semibold text-[var(--foreground)]">Lexie</div>
                <div className="text-micro text-[var(--muted-foreground)]">Founder, Threads to Millions</div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutCreator;

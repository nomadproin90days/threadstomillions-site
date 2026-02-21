"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const stats = [
  { number: "256", label: "Copies sold in first 2 weeks" },
  { number: "5-fig", label: "Monthly income from Threads" },
  { number: "170K+", label: "Views in first 30 days" },
];

const FounderSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full max-w-sm mx-auto">
              {/* Glow behind photo */}
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-2xl scale-95" />
              <div className="relative rounded-2xl overflow-hidden border border-primary/20">
                <Image
                  src="/lexie.jpg"
                  alt="Lexie — founder of Threads to Millions"
                  width={600}
                  height={600}
                  className="w-full object-cover"
                  priority
                />
              </div>
              {/* Handle badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-primary/30 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-foreground">@getdigitalwithlexie</span>
              </div>
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full bg-primary/10 text-primary border border-primary/20 w-fit">
              Meet the Founder
            </div>

            <h2 className="font-display text-4xl md:text-5xl uppercase leading-none">
              Hi, I'm{" "}
              <span className="ttm-gradient-text">Lexie</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                In August 2024 I was trading time for money and living paycheck to paycheck. I decided enough was enough.
              </p>
              <p>
                I went all in on Threads — not with a massive following or a marketing degree, but with a strategy I built from scratch and tested every single day. Within weeks I left my 9-to-5. Threads is now my primary income stream, generating <span className="text-foreground font-medium">5 figures a month</span>.
              </p>
              <p>
                I built TTM because truly anyone can do this — but only if they have a proven blueprint to follow. I don't gatekeep. Everything I do is in here.
              </p>
            </div>

            {/* Mini stats */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="text-center p-3 rounded-xl bg-card border border-border"
                >
                  <div className="font-display text-2xl ttm-gradient-text mb-1">{stat.number}</div>
                  <div className="text-xs text-muted-foreground leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Follow link */}
            <a
              href="https://www.threads.net/@getdigitalwithlexie"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium w-fit"
            >
              Follow me on Threads
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FounderSection;

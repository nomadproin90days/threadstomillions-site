"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CountUp from "./CountUp";

const SolutionSection = () => {
  const statsData = [
    { value: 5000, label: "+", description: "Creators Joined" },
    { value: 2024, label: "", description: "Launched Oct" },
    { value: 100, label: "%", description: "Proven System" },
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-background">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <span className="text-primary font-medium text-sm">The Solution</span>
            <ArrowRight className="w-4 h-4 text-primary" />
          </div>

          {/* Main Content */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase mb-12 text-white">
            Meet <span className="ttm-gradient-text">Threads to Millions</span>
          </h2>

          <div className="space-y-8 text-lg md:text-xl text-slate-300 leading-relaxed">
            <p>
              Threads to Millions is a <span className="text-primary font-bold italic">proven system</span> built for creators who want real growth—not guesswork.
            </p>

            <p>
              Since launching in October 2024, over 5,000 creators have joined to learn how to write posts that get traction, build an engaged audience, and turn attention into income.
            </p>

            <div className="py-6">
              <p className="text-2xl md:text-3xl font-display uppercase text-white">
                This isn't another content library or motivation hub.
              </p>
            </div>

            <p>
              It's a step-by-step system that takes you from inconsistent posting to clear positioning, repeatable growth, and monetization—<span className="text-white font-semibold italic">without selling out or burning out.</span>
            </p>

            <p className="text-slate-400">
              Thousands of creators have already used TTM to find their voice, grow with intention, and build leverage on Threads.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-20">
            {statsData.map((stat, index) => (
              <motion.div
                key={stat.description}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm"
              >
                <div className="mb-2">
                  <CountUp value={stat.value} label={stat.label} />
                </div>
                <div className="text-slate-500 text-xs uppercase tracking-widest font-semibold">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;

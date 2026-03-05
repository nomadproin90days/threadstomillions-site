"use client";

import { motion } from "framer-motion";
import { History, ShieldCheck, XCircle } from "lucide-react";

const milestones = [
  { date: "Aug 2024", event: "Started Digital Marketing. Zero audience, zero sales." },
  { date: "Sept 2024", event: "FAILED: Tried standard Instagram 'aesthetic' growth. $0 revenue." },
  { date: "Oct 2024", event: "PIVOT: Developed the Story Sequence for Threads. First $1k week." },
  { date: "Jan 2025", event: "Scalability: 5,000+ members joined TTM. Consistent 5-figure months." }
];

const AboutCreator = () => {
  return (
    <section className="py-24 bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          
          <div className="flex-1 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Auditable Timeline
              </h2>
              
              <div className="space-y-8 mb-12 relative border-l border-slate-800 ml-4 pl-8">
                {milestones.map((item, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-primary" />
                    <div className="text-primary font-bold text-xs uppercase tracking-widest mb-1">{item.date}</div>
                    <p className="text-slate-400 font-medium">{item.event}</p>
                  </div>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
                  <div className="flex items-center gap-2 text-emerald-500 font-bold mb-3">
                    <ShieldCheck className="w-5 h-5" />
                    <span>What I Guarantee</span>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    A repeatable system for content generation, specific hook frameworks that trigger engagement, and a transparent refund policy if you do the work and it's not a fit.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/10">
                  <div className="flex items-center gap-2 text-red-500 font-bold mb-3">
                    <XCircle className="w-5 h-5" />
                    <span>What I Cannot</span>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    I cannot guarantee overnight virality, sales without an existing offer, or results if you are unwilling to spend 30-60 minutes daily on engagement.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="flex-1 relative lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-slate-800"
            >
              <img 
                src="/Lexie.jpg" 
                alt="Lexie - Founder of Threads to Millions" 
                className="w-full h-auto grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6">
                <div className="text-white font-bold text-xl">Lexie</div>
                <div className="text-primary text-xs font-bold tracking-widest uppercase">Founder, TTM</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCreator;

"use client";

import { motion } from "framer-motion";
import { Clock, Zap } from "lucide-react";

const STAR = [
  {
    letter: "S",
    title: "Story First",
    action: "Post one credibility story daily.",
    time: "15 min/day",
    result: "More profile visits and trust signals"
  },
  {
    letter: "T",
    title: "Teach for Free",
    action: "Publish one tactical framework daily.",
    time: "20 min/day",
    result: "Authority and saves from the right audience"
  },
  {
    letter: "A",
    title: "80/20 Engagement",
    action: "Strategic replies and conversations.",
    time: "30 min/day",
    result: "Better reach + warmer inbound DMs"
  },
  {
    letter: "R",
    title: "Downthread Selling",
    action: "Offer placement after high value.",
    time: "5 min/post",
    result: "More qualified clicks and lower resistance"
  }
];

const RoadmapSection = () => {
  return (
    <section id="roadmap" className="py-24 lg:py-40 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <h2 className="text-5xl md:text-7xl mb-8 italic">The STAR Method</h2>
            <p className="text-xl text-slate-500 max-w-2xl font-light">
              A daily operational system designed to turn attention into pipeline.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
            {STAR.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border-t border-slate-100 pt-8"
              >
                <div className="text-6xl font-serif italic text-slate-200 mb-6">{step.letter}</div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">{step.action}</p>
                
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-slate-400 font-bold">
                    <Clock className="w-4 h-4 text-slate-300" />
                    {step.time} required
                  </div>
                  <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-emerald-600 font-bold">
                    <Zap className="w-4 h-4 text-emerald-400" />
                    {step.result}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;

"use client";

import { motion } from "framer-motion";
import { ExternalLink, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const results = [
  {
    handle: "@getdigitalwithlexie",
    niche: "Digital Marketing",
    timeframe: "4 Months",
    metric: "5-Figure Monthly Revenue",
    image: "/images/testimonials/threads-success-story-1.png",
    description: "Scaled from zero to a full-time income by focusing on conversational storytelling vs. standard marketing."
  },
  {
    handle: "@creator_niche",
    niche: "SaaS / Tech",
    timeframe: "14 Days",
    metric: "0 to 2,400+ Followers",
    image: "/images/testimonials/threads-success-story-2.png",
    description: "Used the Hook Mastery framework to trigger the Threads recommendation engine in under 2 weeks."
  },
  {
    handle: "@service_pro",
    niche: "Coaching",
    timeframe: "30 Days",
    metric: "12 High-Ticket Leads",
    image: "/images/testimonials/threads-success-story-3.png",
    description: "Implemented the Downthread DM Funnel to convert existing engagement into qualified sales calls."
  }
];

const ResultsSection = () => {
  return (
    <section id="results" className="py-24 md:py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8">
            <TrendingUp className="w-4 h-4 text-emerald-500" />
            <span className="text-emerald-500 font-bold text-xs uppercase tracking-widest">Verified Case Studies</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-6 text-white">
            Audit-Ready <span className="ttm-gradient-text">Proof</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We don't do "social proof theater." These are real handles with verifiable growth metrics using the TTM system.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto max-w-7xl mb-16">
          {results.map((item, index) => (
            <motion.div
              key={item.handle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/50 flex flex-col"
            >
              <div className="p-6 border-b border-slate-800">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-white font-bold text-lg">{item.handle}</h3>
                    <p className="text-slate-500 text-xs uppercase tracking-widest">{item.niche}</p>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
                    {item.timeframe}
                  </div>
                </div>
                <div className="text-emerald-500 font-bold text-xl mb-2">{item.metric}</div>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>
              <div className="relative flex-grow">
                <img
                  src={item.image}
                  alt={`${item.handle} success story`}
                  className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a href="https://threads.net/@getdigitalwithlexie" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 rounded-full px-8 py-6 h-auto">
              Verify these on Threads <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;

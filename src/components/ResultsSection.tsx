"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const ResultsSection = () => {
  return (
    <section id="results" className="py-24 lg:py-40 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center"
          >
            <h2 className="text-5xl md:text-7xl mb-8 italic">Audit-Ready Proof</h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
              Real members. Real timelines. Real outcomes. No "social proof theater."
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { handle: "@getdigitalwithlexie", niche: "Digital Marketing", metric: "5-Figure Months", img: "/images/testimonials/threads-success-story-1.png" },
              { handle: "@creator_niche", niche: "SaaS / Tech", metric: "2,400+ Followers", img: "/images/testimonials/threads-success-story-2.png" },
              { handle: "@service_pro", niche: "Coaching", metric: "12 Sales Leads", img: "/images/testimonials/threads-success-story-3.png" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white border border-slate-200 overflow-hidden group"
              >
                <div className="p-6 border-b border-slate-100">
                  <div className="text-slate-900 font-bold mb-1">{item.handle}</div>
                  <div className="text-slate-400 text-[10px] uppercase tracking-widest font-bold mb-4">{item.niche}</div>
                  <div className="text-emerald-600 font-serif italic text-2xl">{item.metric}</div>
                </div>
                <div className="aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img src={item.img} alt={item.handle} className="w-full h-full object-cover" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a href="https://threads.net/@getdigitalwithlexie" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="h-14 px-10 border-slate-200 text-slate-600 hover:text-slate-950 hover:border-slate-950 rounded-none transition-all">
                Verify these on Threads <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;

"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const caseStudies = [
  {
    handle: "@getdigitalwithlexie",
    niche: "Digital Marketing",
    timeframe: "4 Months",
    metricBefore: "$0 Revenue",
    metricAfter: "5-Figure Monthly",
    link: "https://threads.net/@getdigitalwithlexie"
  },
  {
    handle: "@creator_niche",
    niche: "SaaS / Tech",
    timeframe: "14 Days",
    metricBefore: "0 Followers",
    metricAfter: "2,400+ Followers",
    link: "https://threads.net/@getdigitalwithlexie"
  },
  {
    handle: "@service_pro",
    niche: "Coaching",
    timeframe: "30 Days",
    metricBefore: "0 Inbound DMs",
    metricAfter: "12 Qualified Sales Calls",
    link: "https://threads.net/@getdigitalwithlexie"
  }
];

export const ResultsSection = () => {
  return (
    <section id="results" className="py-24 md:py-32 bg-[var(--background)]">
      <div className="editorial-container">
        
        <div className="mb-16 md:flex md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-h2 mb-4">Real Members. Real Timelines. Real Outcomes.</h2>
            <p className="text-body-l text-[var(--muted-foreground)]">
              Auditable proof from creators and businesses executing the system.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((item, i) => (
            <motion.div
              key={item.handle}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="editorial-card flex flex-col"
            >
              {/* Meta Row */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-[var(--foreground)] font-semibold text-body mb-1">{item.handle}</div>
                  <div className="text-micro text-[var(--muted-foreground)]">{item.niche}</div>
                </div>
                <div className="bg-[var(--background)] px-2 py-1 rounded-[4px] text-micro text-[var(--muted-foreground)] border border-[var(--border)]">
                  {item.timeframe}
                </div>
              </div>
              
              {/* Metrics */}
              <div className="mb-8 flex-grow">
                <div className="text-small text-[var(--muted-foreground)] mb-1">Before</div>
                <div className="font-mono text-[var(--foreground)] font-medium mb-4">{item.metricBefore}</div>
                
                <div className="text-small text-[var(--muted-foreground)] mb-1">After</div>
                <div className="font-mono text-[var(--success)] font-semibold text-lg">{item.metricAfter}</div>
              </div>
              
              {/* Verification Link */}
              <div className="pt-4 border-t border-[var(--border)]">
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-small font-semibold text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
                >
                  View proof thread <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ResultsSection;

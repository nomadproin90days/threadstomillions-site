"use client";

import { motion } from "framer-motion";
import { Clock, Target, Zap, BarChart, ArrowRight, CheckCircle } from "lucide-react";

const roadmap = [
  {
    phase: "Week 1",
    title: "Foundation & Hook Mastery",
    steps: [
      {
        action: "Profile Optimization",
        time: "30 min",
        result: "Turn 10%+ profile visits into followers"
      },
      {
        action: "Viral Hook Frameworks",
        time: "15 min/post",
        result: "Consistent 2%+ engagement rate"
      }
    ]
  },
  {
    phase: "Week 2",
    title: "Story Architecture",
    steps: [
      {
        action: "Emotional Bridge Building",
        time: "20 min/post",
        result: "Higher reply count and deeper trust"
      },
      {
        action: "Authority Content Stack",
        time: "1 hour/week",
        result: "Established as a go-to expert in your niche"
      }
    ]
  },
  {
    phase: "Week 3",
    title: "The Conversion Engine",
    steps: [
      {
        action: "Downthread DM Funnel",
        time: "10 min/post",
        result: "Consistent inbound leads from every post"
      },
      {
        action: "The 80/20 Engagement Loop",
        time: "30 min/day",
        result: "Algorithm favor and massive discovery"
      }
    ]
  },
  {
    phase: "Week 4",
    title: "Scale & Automation",
    steps: [
      {
        action: "ThreadyBot Systems",
        time: "15 min/day",
        result: "A week's content generated in minutes"
      },
      {
        action: "The Million Milestone",
        time: "Review & Adjust",
        result: "A repeatable revenue engine on Threads"
      }
    ]
  }
];

const RoadmapSection = () => {
  return (
    <section id="roadmap" className="py-24 md:py-32 bg-slate-900/30 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-primary font-bold text-xs uppercase tracking-widest">30-Day Roadmap</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-6 text-white">
            The Exact Path From <br />
            <span className="ttm-gradient-text">Posting to Pipeline</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            No vague promises. This is the operational schedule for your first 30 days inside the system.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roadmap.map((week, index) => (
            <motion.div
              key={week.phase}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 rounded-2xl bg-slate-900 border border-slate-800"
            >
              <div className="text-primary font-bold text-sm uppercase tracking-wider mb-2">
                {week.phase}
              </div>
              <h3 className="text-xl font-bold text-white mb-6">{week.title}</h3>
              
              <div className="space-y-6">
                {week.steps.map((step, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center gap-2 text-white font-semibold">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {step.action}
                    </div>
                    <div className="flex justify-between text-[11px] uppercase tracking-tighter">
                      <span className="text-slate-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {step.time} required
                      </span>
                      <span className="text-emerald-500/80 flex items-center gap-1 font-bold">
                        <Zap className="w-3 h-3" /> {step.result}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* First 7 Days Checklist */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-8 md:p-12 rounded-3xl bg-slate-900 border border-slate-800 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10" />
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Immediate Action: The First 7 Days</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                We focus on rapid implementation. Here is exactly what you will have completed by Day 7 of joining:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Profile Conversion Audit (Self-Correcting)",
                  "First 7 Days of Hooks Generated",
                  "Threads Niche Positioning Matrix",
                  "Automated Content Calendar Synced"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">17</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Comprehensive Lessons</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RoadmapSection;

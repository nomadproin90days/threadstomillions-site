"use client";

import { motion } from "framer-motion";
import { Bot, CheckCircle2, Zap } from "lucide-react";

const steps = [
  { id: 1, title: "The Foundation", description: "Setting up your profile for maximum conversions." },
  { id: 2, title: "Hook Mastery", description: "Writing headlines that stop the scroll every time." },
  { id: 3, title: "Story Architecture", description: "Building emotional resonance with your audience." },
  { id: 4, title: "Value Stacking", description: "Providing immense value that builds authority." },
  { id: 5, title: "The Bridge", description: "Transitioning from free value to your offer." },
  { id: 6, title: "Call to Action", description: "Directing your audience with clarity and purpose." },
  { id: 7, title: "Engagement Loop", description: "Maintaining momentum through strategic replies." },
  { id: 8, title: "Algorithm Signals", description: "Optimizing for the Threads discovery engine." },
  { id: 9, title: "Traffic Funneling", description: "Moving followers into your owned ecosystems." },
  { id: 10, title: "Conversion Engine", description: "Turning attention into consistent revenue." },
  { id: 11, title: "Authority Scaling", description: "Becoming the go-to expert in your niche." },
  { id: 12, title: "Network Multiplier", description: "Leveraging collaborations for rapid growth." },
  { id: 13, title: "Content Recycling", description: "Turning winning posts into long-term assets." },
  { id: 14, title: "Analytics Mastery", description: "Reading the data to scale what works." },
  { id: 15, title: "The 1% Mindset", description: "Thinking like a top-tier digital entrepreneur." },
  { id: 16, title: "Automation Suite", description: "Systemizing your growth with Threadybot." },
  { id: 17, title: "Community Building", description: "Turning buyers into lifelong superfans." },
  { id: 18, title: "The Million Milestone", description: "Scaling your Threads business to the next level." }
];

const StorySequenceSection = () => {
  return (
    <section id="sequence" className="py-24 md:py-32 relative bg-slate-950 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Bot className="w-4 h-4 text-primary" />
            <span className="text-primary font-bold text-xs uppercase tracking-widest">The Threadybot System</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase mb-6 text-white">
            The <span className="ttm-gradient-text">18-Step</span> Story Sequence
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            The exact sequence used by top creators to move an audience from "Stranger" to "Buyer" using the power of Threadybot automation.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-primary/50 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center text-[10px] font-bold text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-xl">
                {step.id}
              </div>
              
              <div className="mb-4 p-3 rounded-lg bg-slate-950/50 group-hover:bg-primary/10 transition-colors duration-300">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              
              <h3 className="text-sm font-bold text-white mb-2 leading-tight">
                {step.title}
              </h3>
              
              <p className="text-[10px] text-slate-500 leading-tight">
                {step.description}
              </p>
              
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <CheckCircle2 className="w-4 h-4 text-primary" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-primary to-blue-500">
            <div className="px-8 py-4 rounded-full bg-slate-950 text-white font-bold flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              Full 18-Step Blueprint Included in the Course
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySequenceSection;

"use client";

import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="py-24 relative bg-background overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }} 
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-8">
            <AlertCircle className="w-4 h-4 text-red-500" />
            <span className="text-red-500 font-bold text-xs uppercase tracking-widest">The Problem</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">
            Effort is not the issue. <br />
            <span className="text-slate-500">The system is.</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-4">No DM Flow</h3>
              <p className="text-slate-400">You post consistently but don't get qualified DMs from people ready to buy.</p>
            </div>
            
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-4">Zero Conversion</h3>
              <p className="text-slate-400">Your content gets engagement but doesn't convert that attention into pipeline value.</p>
            </div>
            
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-4">Random Growth</h3>
              <p className="text-slate-400">You don't have a repeatable system that takes a follower from a post to an offer.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;

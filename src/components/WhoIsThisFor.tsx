"use client";

import { motion } from "framer-motion";
import { Check, X, Target, Briefcase, Compass } from "lucide-react";

const whoIsThisFor = [
  {
    icon: Target,
    title: "Creators",
    benefit: "Who get views but no sales",
  },
  {
    icon: Briefcase,
    title: "Service Providers",
    benefit: "With weak inbound leads",
  },
  {
    icon: Compass,
    title: "Beginners",
    benefit: "Who need a daily posting + conversion playbook",
  }
];

const WhoIsThisFor = () => {
  return (
    <section className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Who it is for */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">Who this is for</h2>
              <div className="space-y-6">
                {whoIsThisFor.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="mt-1 p-2 rounded-lg bg-emerald-500/10">
                      <Check className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-slate-400">{item.benefit}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Not for */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl border border-slate-800 bg-slate-950/50"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-red-500/10 text-red-500">
                  <X className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-white">Not for everyone</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-slate-400 leading-relaxed">
                  This system is built for long-term leverage. If you fall into the categories below, we are likely not the right fit.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-slate-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                    People looking for overnight virality with zero effort
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                    Creators unwilling to engage in conversations
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                    Businesses that don't have a clear offer to sell
                  </li>
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;

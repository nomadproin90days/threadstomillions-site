"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const WhoIsThisFor = () => {
  return (
    <section className="py-24 lg:py-32 bg-slate-50 border-y border-slate-100">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl mb-10 italic">This is for you if...</h2>
              <div className="space-y-8">
                {[
                  { title: "Creators", desc: "Getting engagement but no sales." },
                  { title: "Service Providers", desc: "Who want inbound leads from Threads." },
                  { title: "Consultants", desc: "That need a repeatable content-to-conversion process." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <Check className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-10 bg-white border border-slate-200"
            >
              <h2 className="text-3xl mb-6 italic text-slate-400">Not for everyone</h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                This is an operational business system. We are likely not the right fit if you are:
              </p>
              <ul className="space-y-4">
                {[
                  "Looking for overnight virality with zero effort.",
                  "Unwilling to engage in real conversations.",
                  "Searching for a 'hack' rather than a system."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-400 text-sm">
                    <X className="w-4 h-4 text-slate-300 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;

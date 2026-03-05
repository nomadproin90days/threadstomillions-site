"use client";

import { motion } from "framer-motion";

const ProblemSection = () => {
  return (
    <section className="py-24 lg:py-40 relative bg-white overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-end">
            <motion.div 
              initial={{ opacity: 0, y: 10 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }} 
            >
              <h2 className="text-5xl md:text-7xl mb-8 italic text-slate-950">
                Effort is not the issue.
              </h2>
              <p className="text-2xl text-slate-400 font-light leading-relaxed">
                Most Threads accounts struggle because they lack an operational bridge between attention and conversion.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-12"
            >
              {[
                { title: "No DM Flow", desc: "You post consistently but don't get qualified DMs from people ready to buy." },
                { title: "Zero Conversion", desc: "Your content gets engagement but doesn't convert that attention into pipeline value." },
                { title: "Random Growth", desc: "You don't have a repeatable system that takes a follower from a post to an offer." }
              ].map((item, i) => (
                <div key={i} className="border-l border-slate-100 pl-8">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

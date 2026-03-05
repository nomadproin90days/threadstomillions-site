"use client";

import { motion } from "framer-motion";

const ProblemSection = () => {
  return (
    <section className="py-24 md:py-32 relative bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-background to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.6 }} 
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase mb-12 text-white">
            Does This Sound{" "}
            <span className="ttm-gradient-text">Like You?</span>
          </h2>
          
          <div className="space-y-6 text-xl md:text-2xl text-slate-300 leading-relaxed">
            <p>
              You're posting on Threads… <span className="text-white font-medium italic">but growth feels random.</span>
            </p>
            
            <p>
              Some posts hit. Most don't. <span className="text-primary font-semibold">You don't know why.</span>
            </p>
            
            <p>
              You see others blowing up and wonder what you're missing.
            </p>
            
            <div className="py-8">
              <p className="text-3xl md:text-4xl font-display uppercase text-white mb-4">
                It's not effort. It's not talent.
              </p>
              <p className="text-4xl md:text-5xl lg:text-6xl font-display uppercase text-white">
                It's the lack of a <span className="ttm-gradient-text">proven system.</span>
              </p>
            </div>
            
            <p className="text-lg text-slate-400 pt-4">You're not alone—this is exactly where most Threads creators get stuck.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;

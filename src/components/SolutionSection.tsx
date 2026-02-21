"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const SolutionSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <span className="text-primary font-medium text-sm">Introducing TTM</span>
            <ArrowRight className="w-4 h-4 text-primary" />
          </div>

          {/* Main Content */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase mb-8">
            Meet{" "}
            <span className="ttm-gradient-text">Threads to Millions</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            TTM is the complete system designed to transform you from an overwhelmed content creator into a confident 
            entrepreneur. We've helped thousands of creators find their voice, build engaged communities, and 
            monetize their expertise—all without sacrificing authenticity.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { number: "10K+", label: "Active Members" },
              { number: "$2M+", label: "Revenue Generated" },
              { number: "500%", label: "Avg. Growth Rate" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-4xl md:text-5xl ttm-gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;

"use client";

import { motion } from "framer-motion";
import { Sparkles, BookOpen, MessageCircle, ArrowDownToLine } from "lucide-react";

const strategySteps = [
  {
    letter: "S",
    title: "Story First",
    description: "Your transformation is your best marketing. Lead with your perspective — how your life changed, what you overcame, what you built.",
    icon: Sparkles,
  },
  {
    letter: "T",
    title: "Teach for Free",
    description: "Give your best advice without asking for anything. Educational content puts you in a position of authority.",
    icon: BookOpen,
  },
  {
    letter: "A",
    title: "80/20 Engagement",
    description: "Spend 80% engaging with others, 20% posting. The more you engage, the more the algorithm surfaces your content.",
    icon: MessageCircle,
  },
  {
    letter: "R",
    title: "Sell in the Downthread",
    description: "Never open with a pitch. Hook with a story, let curiosity build, then mention your offer naturally in the replies.",
    icon: ArrowDownToLine,
  },
];

const StrategySection = () => {
  return (
    <section id="strategy" className="py-24 md:py-32 bg-secondary/10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase rounded-full bg-primary/10 text-primary border border-primary/20">
            The Methodology
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-4">
            The <span className="ttm-gradient-text uppercase">STAR</span> Method
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The 4-step system behind every Threads creator who&apos;s turned followers into consistent revenue.
          </p>
        </motion.div>

        {/* Vertical timeline layout on mobile, 4-col on desktop */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {strategySteps.map((step, index) => (
            <motion.div
              key={step.letter}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative p-6 pt-10 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="absolute -top-5 left-6 w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center font-heading text-xl font-bold text-primary-foreground shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                {step.letter}
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors duration-300">
                  <step.icon className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold">{step.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-muted-foreground italic">
            &ldquo;99% of people focus on selling. Be the 1% that focuses on serving — and watch what happens.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default StrategySection;

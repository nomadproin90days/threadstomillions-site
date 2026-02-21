"use client";

import { motion } from "framer-motion";
import { Sparkles, BookOpen, MessageCircle, ArrowDownToLine } from "lucide-react";

const strategySteps = [
  {
    letter: "S",
    title: "Story First",
    description: "Your transformation is your best marketing. Lead with the 'I' perspective — how your life changed, what you overcame, what you built. Transformational posts consistently outperform everything else on Threads.",
    icon: Sparkles,
  },
  {
    letter: "T",
    title: "Teach for Free",
    description: "Give your best advice without asking for anything in return. Educational content puts you in a position of authority — the people your audience eventually buys from are the ones who gave them value first.",
    icon: BookOpen,
  },
  {
    letter: "A",
    title: "80/20 Engagement Rule",
    description: "Spend 80% of your time engaging with others, 20% actually posting. The more you engage, the more relevant the algorithm sees you. The less you engage, the more invisible you become.",
    icon: MessageCircle,
  },
  {
    letter: "R",
    title: "Sell in the Downthread",
    description: "Never open with a pitch. Hook your audience with a story or valuable insight. Let curiosity do the work — then mention your offer naturally in the replies. Sales feel like a conversation, not a cold call.",
    icon: ArrowDownToLine,
  },
];

const StrategySection = () => {
  return (
    <section id="strategy" className="py-24 md:py-32 bg-secondary/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase rounded-full bg-primary/10 text-primary border border-primary/20">
            The Methodology
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase mb-6">
            The <span className="ttm-gradient-text">STAR</span> Method
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The 4-step system behind every Threads creator who's turned followers into consistent revenue — without ever feeling spammy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {strategySteps.map((step, index) => (
            <motion.div
              key={step.letter}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:ttm-glow"
            >
              <div className="absolute -top-6 left-8 w-12 h-12 rounded-xl bg-primary flex items-center justify-center font-display text-2xl text-primary-foreground shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                {step.letter}
              </div>
              <div className="mt-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors duration-300">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector line for desktop */}
              {index < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[1px] bg-border z-0" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-sm text-muted-foreground italic">
            "99% of people focus on selling. Be the 1% that focuses on serving — and watch what happens."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default StrategySection;

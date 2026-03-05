"use client";

import { motion } from "framer-motion";
import { AlertCircle, TrendingDown, Users, DollarSign } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    title: "Posting into the void",
    description: "You show up every day but get zero engagement. It feels like no one sees your content.",
  },
  {
    icon: TrendingDown,
    title: "Stuck at the same follower count",
    description: "Others seem to explode overnight while you're grinding with nothing to show for it.",
  },
  {
    icon: Users,
    title: "No real community",
    description: "You have followers but no relationships. No one DMs you, no one shares your posts, no one buys.",
  },
  {
    icon: DollarSign,
    title: "No idea how to monetize",
    description: "You know there's money in Threads but every attempt to sell feels forced and falls flat.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12 md:gap-16 items-start">
          {/* Left: Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 md:sticky md:top-32"
          >
            <h2 className="font-heading text-3xl md:text-4xl mb-4">
              Does This Sound{" "}
              <span className="ttm-gradient-text">Like You?</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              These are the exact struggles that hold most Threads creators back — whether you have 50 followers or 50,000.
            </p>
          </motion.div>

          {/* Right: Problem cards */}
          <div className="md:col-span-3 space-y-4">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                  <problem.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1 text-foreground">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

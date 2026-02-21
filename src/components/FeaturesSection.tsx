"use client";

import { motion } from "framer-motion";
import { Sparkles, Target, MessageSquare, Bot, BookOpen, Users } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Proven Growth Strategies",
    description: "Battle-tested tactics that have helped creators grow from 0 to 100K+ followers.",
  },
  {
    icon: Target,
    title: "Content That Converts",
    description: "Learn the exact frameworks for creating posts that drive engagement and sales.",
  },
  {
    icon: Bot,
    title: "ThreadyBot Assistant",
    description: "AI-powered tools to help you create better content faster and optimize your posting schedule.",
  },
  {
    icon: MessageSquare,
    title: "Private Community",
    description: "Connect with fellow creators, share wins, and get feedback from those who've been there.",
  },
  {
    icon: BookOpen,
    title: "Step-by-Step Courses",
    description: "Comprehensive training modules that take you from beginner to expert at your own pace.",
  },
  {
    icon: Users,
    title: "Weekly Live Calls",
    description: "Get your questions answered and learn new strategies directly from top creators.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase mb-6">
            What's{" "}
            <span className="ttm-gradient-text">Included</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to master Threads and build a thriving business around your content.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:ttm-glow"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

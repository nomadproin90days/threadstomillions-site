"use client";

import { motion } from "framer-motion";
import { Sparkles, Target, MessageSquare, Bot, BookOpen, Users } from "lucide-react";
import { NOMAD_URL } from "@/lib/constants";
import { useSearchParams } from "@/lib/useSearchParams";

const features = [
  {
    icon: Sparkles,
    title: "Proven Growth Strategies",
    description: "Battle-tested tactics that have helped creators grow from 0 to 100K+ followers.",
  },
  {
    icon: Target,
    title: "Content That Converts",
    description: "Exact frameworks for creating posts that drive engagement and sales.",
  },
  {
    icon: Bot,
    title: "ThreadyBot Assistant",
    description: "AI-powered tools to create better content faster and optimize your posting schedule.",
  },
  {
    icon: MessageSquare,
    title: "Private Community",
    description: "Connect with fellow creators, share wins, and get feedback from people who&apos;ve been there.",
  },
  {
    icon: BookOpen,
    title: "Step-by-Step Courses",
    description: "Comprehensive training modules from beginner to expert, at your own pace.",
  },
  {
    icon: Users,
    title: "Weekly Live Calls",
    description: "Get your questions answered and learn new strategies directly from top creators.",
  },
];

const FeaturesSection = () => {
  const searchParams = useSearchParams();

  return (
    <section id="features" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-4">
            What&apos;s{" "}
            <span className="ttm-gradient-text">Inside</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to master Threads and build a business around your content.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mid-page CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href={`${NOMAD_URL}${searchParams}`}
            className="ttm-cta inline-block px-8 py-4 text-base"
          >
            Join 10,000+ Creators
          </a>
          <p className="text-xs text-muted-foreground mt-3">
            Cancel anytime &middot; 30-day money-back guarantee &middot; Secure checkout via Nomad Pro
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;

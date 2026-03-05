"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Threads to Millions?",
    answer:
      "TTM is a community and course created by Lexie (@getdigitalwithlexie) that teaches creators how to grow their audience and monetize on the Threads social media platform. It includes step-by-step courses, weekly live calls, AI-powered tools like ThreadyBot, and a private community of over 10,000 members.",
  },
  {
    question: "What is the STAR Method?",
    answer:
      "The STAR Method is our core methodology. Story First (lead with your personal transformation), Teach for Free (give your best advice without asking), 80/20 Engagement Rule (spend 80% engaging, 20% posting), and Sell in the Downthread (hook first, offer naturally in replies).",
  },
  {
    question: "Can you really make money on Threads?",
    answer:
      "Yes. TTM members have collectively generated over $2 million in revenue. Lexie earns 5 figures a month from Threads. The community teaches proven strategies for monetizing through content creation and authentic engagement.",
  },
  {
    question: "How much does Threads to Millions cost?",
    answer:
      "TTM offers flexible membership options with a 30-day money-back guarantee. You can cancel anytime and get instant access to all courses, the private community, weekly live calls, and the ThreadyBot AI assistant.",
  },
  {
    question: "Do I need a large following to get started?",
    answer:
      "Not at all. Lexie started without a massive following or a marketing degree. The strategies are designed for creators at any level. Members have seen an average of 500% growth in their Threads following.",
  },
];

const FAQItem = ({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-heading text-lg font-semibold text-foreground pr-4 group-hover:text-primary transition-colors">
          {faq.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-muted-foreground leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Everything you need to know before joining.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl bg-card border border-border p-6 md:p-8"
          >
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.question}
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

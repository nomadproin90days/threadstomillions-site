"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { reveal } from "@/lib/motion";

const faqs = [
  {
    q: "How many hours per week do I need?",
    a: "Minimum 5-7 hours/week. Recommended 7-10 for faster momentum. This accounts for content creation, engagement, and direct messaging."
  },
  {
    q: "What if I have under 500 followers?",
    a: "That's fine. The system is designed to work from a low audience size with proper positioning and execution."
  },
  {
    q: "Do I need paid ads?",
    a: "No. This is built for organic growth and conversion."
  },
  {
    q: "What tools are required?",
    a: "A free Threads account and a basic link or checkout setup. Optional tools (like ThreadyBot components) are listed in onboarding."
  },
  {
    q: "What if I'm not satisfied?",
    a: "You have 30 days. Email support and request a refund per our refund policy."
  }
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-24 md:py-32 bg-[var(--background)]">
      <div className="reading-container">

        <div className="mb-16 text-center">
          <h2 className="text-h2 mb-4">Questions Before You Join</h2>
          <p className="text-body-l text-[var(--muted-foreground)]">
            Clear answers to operational objections.
          </p>
        </div>

        <motion.div {...reveal}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-[var(--border)]">
                <AccordionTrigger className="text-body-l font-medium text-[var(--foreground)] hover:no-underline py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-body text-[var(--muted-foreground)] pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

      </div>
    </section>
  );
};

export default FAQSection;

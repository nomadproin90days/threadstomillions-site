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
    a: "Minimum 5-7 hours/week. Recommended 7-10 for faster momentum. This accounts for content creation, engagement, and direct messaging.",
  },
  {
    q: "What if I have under 500 followers?",
    a: "That's fine. The system is designed to work from a low audience size with proper positioning and execution.",
  },
  {
    q: "Do I need paid ads?",
    a: "No. This is built for organic growth and conversion.",
  },
  {
    q: "What tools are required?",
    a: "A free Threads account and a basic link or checkout setup. Optional tools (like ThreadyBot) are listed in onboarding.",
  },
  {
    q: "What if I'm not satisfied?",
    a: "Email support anytime and we'll work with you. See our refund policy for details.",
  },
  {
    q: "What is the affiliate commission?",
    a: "80% commission on every sale you refer. You get your own affiliate link inside the Skool community.",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="editorial-container">
        <div className="max-w-3xl mx-auto">
          <motion.div {...reveal} className="text-center mb-12">
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] mb-4">
              QUESTIONS BEFORE YOU <span className="accent-italic">Join</span>
            </h2>
          </motion.div>

          <motion.div {...reveal}>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-b border-[hsl(var(--border))]"
                >
                  <AccordionTrigger className="text-[17px] font-medium text-[hsl(var(--text))] hover:no-underline hover:text-[hsl(var(--primary))] py-6 text-left" style={{ textTransform: "none", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0" }}>
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[15px] text-[hsl(var(--text)/0.6)] pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

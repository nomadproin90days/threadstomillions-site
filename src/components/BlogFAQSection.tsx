"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FAQItem } from "@/lib/blog-data";

interface BlogFAQSectionProps {
  faqs: FAQItem[];
}

export default function BlogFAQSection({ faqs }: BlogFAQSectionProps) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section
      className="mt-16 pt-12 border-t border-[hsl(var(--border))]"
      aria-labelledby="faq-heading"
    >
      <h2
        id="faq-heading"
        className="text-[clamp(1.75rem,3.5vw,2.25rem)] leading-[1.1] tracking-[-0.01em] text-[hsl(var(--text))] mb-8"
        style={{ textTransform: "none", fontFamily: "'Playfair Display', serif" }}
      >
        Frequently Asked Questions
      </h2>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`faq-${index}`}
            className="border-b border-[hsl(var(--border))]"
          >
            <AccordionTrigger className="text-left text-[16px] md:text-[17px] font-semibold text-[hsl(var(--text))] py-5">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-[15px] leading-relaxed text-[hsl(var(--muted-text))] pb-5">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

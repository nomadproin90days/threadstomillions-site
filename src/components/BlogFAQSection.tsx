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

      <div className="w-full">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group border-b border-[hsl(var(--border))] py-1"
          >
            <summary className="flex items-start justify-between gap-4 cursor-pointer list-none py-5 text-left text-[16px] md:text-[17px] font-semibold text-[hsl(var(--text))] hover:text-[hsl(var(--primary))] transition-colors [&::-webkit-details-marker]:hidden">
              <span>{faq.question}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mt-1 shrink-0 transition-transform duration-200 group-open:rotate-180"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </summary>
            <div className="pb-5 pr-8 text-[15px] leading-relaxed text-[hsl(var(--muted-text))]">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

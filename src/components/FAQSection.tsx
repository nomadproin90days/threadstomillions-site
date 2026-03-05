import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <section className="py-24 lg:py-40 bg-slate-50 border-y border-slate-100" id="faq">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-20 text-center">
          <h2 className="text-5xl md:text-7xl mb-8 italic">Questions before you join</h2>
          <p className="text-xl text-slate-500 font-light">
            Answers to the most common operational concerns.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {[
            { q: "How many hours per week do I need?", a: "Minimum 5–7 hours/week. Recommended 7–10 for faster momentum. This covers both content generation and strategic engagement." },
            { q: "What if I have under 500 followers?", a: "Audience size is secondary to positioning. The system is built to generate leads from day one by leveraging Threads' unique recommendation engine." },
            { q: "Do I need paid ads?", a: "No. This system is built entirely for organic growth and conversion." },
            { q: "What if I'm not satisfied?", a: "You have 30 days. If you implement the system and don't see results, email support for a full refund." }
          ].map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-slate-200 bg-white px-8 py-2">
              <AccordionTrigger className="text-left text-lg font-bold text-slate-900 hover:no-underline py-6">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed pb-8">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden" id="faq">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl mb-4 uppercase">
            High Friction <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-slate-400 font-medium">
            We don't hide the hard questions. Here is the operational reality of the system.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="border border-slate-800 bg-slate-900/50 backdrop-blur-sm rounded-2xl px-6">
            <AccordionTrigger className="text-left text-lg font-bold text-white hover:text-primary transition-colors py-6">
              How many hours per week do I need?
            </AccordionTrigger>
            <AccordionContent className="text-slate-300 text-base leading-relaxed pb-6">
              Expect to spend **4-7 hours per week**. This breaks down to 15-20 minutes for content generation (using the templates) and 30-45 minutes for daily engagement. This is a business system, not a passive income scheme; it requires consistent operational input.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border border-slate-800 bg-slate-900/50 backdrop-blur-sm rounded-2xl px-6">
            <AccordionTrigger className="text-left text-lg font-bold text-white hover:text-primary transition-colors py-6">
              What if I have under 500 followers?
            </AccordionTrigger>
            <AccordionContent className="text-slate-300 text-base leading-relaxed pb-6">
              The system is actually **most effective for small accounts**. Threads' current recommendation engine prioritizes conversational depth over follower count. We show you how to leverage "Downthread" engagement to get seen by large audiences without having to build them yourself first.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border border-slate-800 bg-slate-900/50 backdrop-blur-sm rounded-2xl px-6">
            <AccordionTrigger className="text-left text-lg font-bold text-white hover:text-primary transition-colors py-6">
              What tools are required and what do they cost?
            </AccordionTrigger>
            <AccordionContent className="text-slate-300 text-base leading-relaxed pb-6">
              You only need a **Threads/Instagram account (free)**. We provide the templates and the ThreadyBot system (optional) which can be used with a free ChatGPT or Claude account. There are no mandatory monthly software fees required to make this system work.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border border-slate-800 bg-slate-900/50 backdrop-blur-sm rounded-2xl px-6">
            <AccordionTrigger className="text-left text-lg font-bold text-white hover:text-primary transition-colors py-6">
              What happens if I request a refund?
            </AccordionTrigger>
            <AccordionContent className="text-slate-300 text-base leading-relaxed pb-6">
              We have a **transparent 30-day money-back guarantee**. If you go through the first 4 modules, implement the foundations, and don't see an increase in engagement or lead quality, email support@threadstomillions.com. We'll review your implementation and issue a full refund if the system didn't perform as promised.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;

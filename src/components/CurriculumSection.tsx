"use client";

import { motion } from "framer-motion";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { NOMAD_URL } from "@/lib/constants";
import { useSearchParams } from "@/lib/useSearchParams";
import { reveal, revealWithDelay } from "@/lib/motion";

const modules = [
  {
    title: "1. The Foundation & Positioning",
    outcome: "A profile that converts visitors into followers instantly.",
    assets: "Profile Audit Checklist, Niche Positioning Matrix"
  },
  {
    title: "2. Hook Mastery",
    outcome: "Headlines that stop the scroll without resorting to clickbait.",
    assets: "50+ Proven Hook Templates, Swipe File"
  },
  {
    title: "3. Story Architecture",
    outcome: "Write transformational posts that build deep emotional resonance.",
    assets: "The Hero's Journey Framework, 5 Story Post Structures"
  },
  {
    title: "4. The Downthread Conversion Engine",
    outcome: "Seamlessly transition from value to pitching your offer.",
    assets: "Offer Transition Scripts, 'Soft Pitch' Templates"
  },
  {
    title: "5. Engagement Operating System",
    outcome: "Leverage other people's audiences to build your own.",
    assets: "Daily 30-Minute Engagement Checklist"
  }
];

const firstSevenDays = [
  { day: 1, action: "Positioning + profile conversion setup" },
  { day: 2, action: "Story post framework" },
  { day: 3, action: "Teach post framework" },
  { day: 4, action: "Engagement operating system" },
  { day: 5, action: "Downthread sell setup" },
  { day: 6, action: "DM flow + qualification" },
  { day: 7, action: "Weekly content + conversion plan" },
];

export const CurriculumSection = () => {
  const searchParams = useSearchParams();

  return (
    <section id="curriculum" className="py-24 md:py-32 bg-[var(--background)]">
      <div className="editorial-container">
        <motion.div
          {...reveal}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-h2 mb-4">Everything You Need to Go From Posting to Pipeline</h2>
          <p className="text-body-l text-[var(--muted-foreground)]">
            17 implementation modules, 50+ hooks and frameworks, weekly live calls, and a private member community with real feedback loops.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: Module Accordion */}
          <motion.div {...revealWithDelay(0.05)}>
            <h3 className="text-h3 mb-6">Inside the Program</h3>
            <Accordion type="single" collapsible className="w-full bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-card)] px-6">
              {modules.map((mod, i) => (
                <AccordionItem key={i} value={`module-${i}`} className="border-b border-[var(--border)] last:border-0">
                  <AccordionTrigger className="text-body font-semibold hover:no-underline py-5 text-left">
                    {mod.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-small text-[var(--muted-foreground)] pb-6 space-y-4">
                    <div>
                      <span className="font-semibold text-[var(--foreground)] block mb-1">Outcome:</span>
                      {mod.outcome}
                    </div>
                    <div>
                      <span className="font-semibold text-[var(--foreground)] block mb-1">Assets Included:</span>
                      {mod.assets}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Right: The First 7 Days */}
          <motion.div
            {...revealWithDelay(0.1)}
            className="editorial-card relative overflow-hidden"
          >
            <h3 className="text-h3 mb-2">First 7 Days Plan</h3>
            <p className="text-small text-[var(--muted-foreground)] mb-8">Execute immediately. No overwhelm.</p>

            <div className="space-y-4">
              {firstSevenDays.map((step) => (
                <div key={step.day} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--primary)] text-white flex items-center justify-center text-[10px] font-mono mt-0.5">
                    {step.day}
                  </div>
                  <div className="text-body text-[var(--foreground)]">
                    {step.action}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-[var(--border)]">
              <a href={`${NOMAD_URL}${searchParams}`} className="w-full">
                <button className="w-full btn-secondary text-[15px] px-8 py-3">
                  Get Instant Access
                </button>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;

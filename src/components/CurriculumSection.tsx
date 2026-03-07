"use client";

import { motion } from "framer-motion";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { NOMAD_URL } from "@/lib/constants";
import { useSearchParams } from "@/lib/useSearchParams";
import { reveal, revealWithDelay } from "@/lib/motion";
import { ArrowRight } from "lucide-react";

const modules = [
  {
    title: "1. The Foundation & Positioning",
    outcome: "A profile that converts visitors into followers instantly.",
    assets: "Profile Audit Checklist, Niche Positioning Matrix",
  },
  {
    title: "2. Hook Mastery",
    outcome: "Headlines that stop the scroll without resorting to clickbait.",
    assets: "50+ Proven Hook Templates, Swipe File",
  },
  {
    title: "3. Story Architecture",
    outcome: "Write posts that build deep emotional resonance.",
    assets: "The Hero's Journey Framework, 5 Story Structures",
  },
  {
    title: "4. The Downthread Conversion Engine",
    outcome: "Seamlessly transition from value to pitching your offer.",
    assets: "Offer Transition Scripts, 'Soft Pitch' Templates",
  },
  {
    title: "5. Engagement Operating System",
    outcome: "Leverage other people's audiences to build your own.",
    assets: "Daily 30-Minute Engagement Checklist",
  },
];

const included = [
  "Examples of content that converts",
  "Proven strategies for growth",
  "Attracting your target audience",
  "Selling tips + driving silent buyers",
  "Fill in the blank Threads templates",
  "Daily posting + engagement schedule",
  "Tips for branding yourself on Threads",
  "Skool community platform access",
  "Bonus resources for Threads growth",
  "80% affiliate commissions",
  "ThreadyBot - your AI writing assistant",
];

export const CurriculumSection = () => {
  const searchParams = useSearchParams();

  return (
    <section id="curriculum" className="py-24 md:py-32 border-y border-[hsl(var(--border))]">
      <div className="editorial-container">
        <motion.div {...reveal} className="text-center mb-16 md:mb-20">
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] mb-6">
            WHAT&apos;S <span className="accent-italic">Included</span>
          </h2>
          <p className="text-[18px] text-[hsl(var(--text)/0.5)] max-w-2xl mx-auto">
            17 implementation modules, 50+ hooks and frameworks, weekly live calls, and a private community with real feedback loops.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: What's included list — matching brand slide 4 */}
          <motion.div {...revealWithDelay(0.05)}>
            <div className="space-y-3">
              {included.map((item, i) => (
                <motion.div
                  key={item}
                  {...revealWithDelay(i * 0.04)}
                  className="flex items-center gap-4 py-3 px-5 border border-[hsl(var(--border))] rounded-[var(--radius-ui)] bg-[hsl(var(--surface)/0.5)] hover:border-[hsl(var(--primary)/0.3)] transition-colors"
                >
                  <span className="text-[hsl(var(--primary))] text-[14px]">&#10003;</span>
                  <span className="text-[15px] text-[hsl(var(--text)/0.9)] font-medium uppercase tracking-wide">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Course modules accordion */}
          <motion.div {...revealWithDelay(0.1)}>
            <h3 className="text-[12px] uppercase tracking-[0.2em] text-[hsl(var(--primary))] font-semibold mb-6">
              Course Modules
            </h3>
            <Accordion type="single" collapsible className="w-full">
              {modules.map((mod, i) => (
                <AccordionItem
                  key={i}
                  value={`module-${i}`}
                  className="border-b border-[hsl(var(--border))] last:border-0"
                >
                  <AccordionTrigger className="text-[16px] font-semibold text-[hsl(var(--text))] hover:no-underline hover:text-[hsl(var(--primary))] py-5 text-left uppercase tracking-wide">
                    {mod.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-[15px] text-[hsl(var(--text)/0.6)] pb-6 space-y-4">
                    <div>
                      <span className="font-semibold text-[hsl(var(--text))] block mb-1 text-[13px] uppercase tracking-wider">Outcome:</span>
                      {mod.outcome}
                    </div>
                    <div>
                      <span className="font-semibold text-[hsl(var(--text))] block mb-1 text-[13px] uppercase tracking-wider">Assets:</span>
                      {mod.assets}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-10">
              <a href={`${NOMAD_URL}${searchParams}`}>
                <button className="w-full btn-primary text-[16px] py-5 flex items-center justify-center gap-3 shadow-lg shadow-[hsl(var(--primary))]/15">
                  Get Instant Access
                  <ArrowRight size={18} />
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

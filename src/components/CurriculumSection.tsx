"use client";

import { motion } from "framer-motion";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { NOMAD_URL } from "@/lib/constants";
import { useSearchParams } from "@/lib/useSearchParams";
import { reveal, revealWithDelay } from "@/lib/motion";
import { ArrowRight } from "lucide-react";

const modules = [
  {
    title: "Threads Basics",
    outcome: "Profile setup, algorithm training, post features, engagement features, and downthreads.",
    assets: "START HERE module for new members",
  },
  {
    title: "Threads to Millions Guide",
    outcome: "All proven strategies for growing your following, engagement, and making sales on Threads.",
    assets: "The core TTM growth + monetization playbook",
  },
  {
    title: "Writing Threads That Attract",
    outcome: "Write threads that effectively attract and hold your target audience.",
    assets: "Hook frameworks, story structures, content templates",
  },
  {
    title: "Boosting Visibility on Threads",
    outcome: "Reach more people and get discovered by your ideal audience.",
    assets: "Visibility strategies and algorithm tactics",
  },
  {
    title: "Marketing Psychology for Threads",
    outcome: "Use buyer and sales psychology to attract your target audience and bring in passive sales.",
    assets: "Psychology frameworks for content and conversion",
  },
  {
    title: "Authentic Branding on Threads",
    outcome: "Build a personal brand that stands out and earns trust.",
    assets: "Brand positioning and authenticity frameworks",
  },
  {
    title: "Expanding Your Reach",
    outcome: "Reach non-followers and audiences outside digital marketing.",
    assets: "Cross-niche visibility strategies",
  },
  {
    title: "Effective Selling on Threads",
    outcome: "Sell to both digital marketers and non-digital marketers.",
    assets: "Selling frameworks for different audiences",
  },
  {
    title: "Content Pillars for Threads",
    outcome: "Master the content types that attract your audience and build trust.",
    assets: "Content pillar templates and rotation system",
  },
  {
    title: "From Threads to DM's",
    outcome: "Close sales with confidence through direct messages.",
    assets: "DM scripts, do's and don'ts. By @chloedigitally",
  },
  {
    title: "Inbox to Millions",
    outcome: "Turn Threads traffic into email subscribers and lifelong customers.",
    assets: "Email marketing integration system",
  },
  {
    title: "Daily Posting + Engagement Schedule",
    outcome: "A printable daily schedule for consistent growth.",
    assets: "Daily schedule PDF + video walkthrough",
  },
];

const included = [
  "25 course modules covering growth + sales",
  "495+ fill-in-the-blank Threads templates",
  "Daily posting + engagement schedule",
  "Marketing psychology for passive sales",
  "DM closing strategies by @chloedigitally",
  "Stories to Millions by @shiftwithalex",
  "Pins to Millions (Threads to Pinterest)",
  "Threads Self-Audit Worksheet",
  "ThreadyBot AI writing assistant",
  "Skool community access",
  "80% affiliate commissions",
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
            25 modules, 495+ templates, guest expert courses, and a private community of 5,200+ members with real feedback loops.
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

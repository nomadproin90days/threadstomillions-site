"use client";

import { motion } from "framer-motion";
import { reveal } from "@/lib/motion";
import { NOMAD_URL } from "@/lib/constants";

interface AffiliateCTAProps {
  variant?: "inline" | "end";
  headline?: string;
  body?: string;
  buttonText?: string;
}

export default function AffiliateCTA({
  variant = "inline",
  headline,
  body,
  buttonText,
}: AffiliateCTAProps) {
  if (variant === "end") {
    return (
      <motion.div
        {...reveal}
        className="mt-16 p-8 md:p-10 rounded-[var(--radius-card)] glass-card text-center"
      >
        <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[hsl(var(--primary))] mb-3">
          5,200+ creators inside
        </p>
        <h3 className="text-[clamp(1.5rem,3vw,2rem)] leading-[0.95] text-[hsl(var(--text))] mb-3">
          {headline || (
            <>Ready to start <span className="accent-italic">earning</span> on Threads?</>
          )}
        </h3>
        <p className="text-[hsl(var(--text)/0.5)] mb-6 max-w-lg mx-auto text-[15px]">
          {body || "Join the Threads to Millions community and get the exact playbooks, templates, and support system creators use to go from zero to $1K+ months on Threads."}
        </p>
        <a
          href={NOMAD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-block text-[15px] font-semibold px-8 py-3"
        >
          {buttonText || "Join the Community"}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.aside
      {...reveal}
      className="my-10 p-6 md:p-8 rounded-[var(--radius-card)] glass-card not-prose"
    >
      <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[hsl(var(--primary))] mb-2">
        Threads to Millions
      </p>
      <h4
        className="text-[20px] font-bold text-[hsl(var(--text))] mb-2"
        style={{ textTransform: "none", fontFamily: "'Playfair Display', serif" }}
      >
        {headline || "Want the full system?"}
      </h4>
      <p className="text-[hsl(var(--text)/0.5)] text-[14px] mb-4">
        {body || "The Threads to Millions community gives you step-by-step playbooks, content templates, and a support system of 5,200+ creators building real income on Threads."}
      </p>
      <a
        href={NOMAD_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary inline-block text-[15px] font-semibold px-6 py-2.5"
      >
        {buttonText || "See What's Inside"}
      </a>
    </motion.aside>
  );
}

"use client";

import { motion } from "framer-motion";
import { reveal } from "@/lib/motion";
import EmailCaptureForm from "./EmailCaptureForm";

interface BlogCTAProps {
  variant?: "inline" | "end";
}

export default function BlogCTA({ variant = "inline" }: BlogCTAProps) {
  if (variant === "end") {
    return (
      <motion.div
        {...reveal}
        className="mt-16 p-8 md:p-10 rounded-[var(--radius-card)] bg-[var(--surface)] border border-[var(--border)] text-center"
      >
        <h3 className="text-2xl md:text-3xl font-display font-bold text-[var(--foreground)] mb-3">
          Get the free Threads growth guide
        </h3>
        <p className="text-[var(--muted-foreground)] mb-6 max-w-lg mx-auto">
          The framework Lexie used to grow on Threads, distilled into a free PDF. No fluff, just the system.
        </p>
        <EmailCaptureForm
          buttonText="Send Me the Guide"
          className="max-w-lg mx-auto"
        />
      </motion.div>
    );
  }

  return (
    <motion.aside
      {...reveal}
      className="my-10 p-6 md:p-8 rounded-[var(--radius-card)] bg-[var(--surface)] border border-[var(--border)] not-prose"
    >
      <p className="text-sm font-bold uppercase tracking-wider text-[var(--primary)] mb-2">
        Free resource
      </p>
      <h4 className="text-xl font-display font-bold text-[var(--foreground)] mb-2">
        Want the full Threads growth system?
      </h4>
      <p className="text-[var(--muted-foreground)] text-sm mb-4">
        Get Lexie&apos;s step-by-step guide to growing and monetizing on Threads. Free PDF, no strings.
      </p>
      <EmailCaptureForm
        buttonText="Get the Free Guide"
        className=""
      />
    </motion.aside>
  );
}

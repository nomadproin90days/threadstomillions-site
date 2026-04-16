"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { NOMAD_URL } from "@/lib/constants";
import { useSearchParams } from "@/lib/useSearchParams";
import { reveal } from "@/lib/motion";

export const CTASection = () => {
  const searchParams = useSearchParams();

  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/beach-hero.png"
          alt="Beach background for Threads to Millions call to action"
          fill
          className="object-cover"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(215,25%,8%,0.95)] via-[hsl(215,25%,8%,0.88)] to-[hsl(215,25%,8%,0.8)]" />
      </div>

      <div className="editorial-container text-center relative z-10">
        <motion.div {...reveal}>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] mb-6">
            GET READY TO <span className="accent-italic">Grow</span>
            <br />
            WITH THREADS TO MILLIONS
          </h2>

          <p className="text-[18px] text-[hsl(var(--text)/0.4)] mb-12 max-w-xl mx-auto">
            Lifetime access to the Skool community and resources. 80% affiliate commission. ThreadyBot AI included.
          </p>

          <div className="flex flex-col items-center gap-6">
            <a href={`${NOMAD_URL}${searchParams}`}>
              <button className="btn-primary text-[18px] px-12 py-6 flex items-center gap-3 shadow-xl shadow-[hsl(var(--primary))]/20">
                Join Threads to Millions
                <ArrowRight size={20} />
              </button>
            </a>

            <div className="text-[14px] text-[hsl(var(--text)/0.3)] max-w-md mx-auto">
              Cancel anytime. Email{" "}
              <a
                href="mailto:hello@threadstomillions.com"
                className="text-[hsl(var(--text)/0.5)] underline decoration-[hsl(var(--text)/0.15)] hover:decoration-[hsl(var(--text)/0.4)] transition-colors"
              >
                hello@threadstomillions.com
              </a>{" "}
              for support.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

"use client";

import { Button } from "@/components/ui/button";
import CountUp from "./CountUp";
import { ArrowRight, CheckCircle2, Users, BookOpen } from "lucide-react";
import PoweredBySkoolBadge from "./PoweredBySkoolBadge";
import Link from "next/link";
import { useSearchParams } from "@/lib/useSearchParams";
import { NOMAD_URL } from "@/lib/constants";

const HeroSection = () => {
  const searchParams = useSearchParams();
  
  const beaconsUrl = "https://shop.beacons.ai/getdigitalwithlexie/667ae82f-c456-49c1-9f74-c8f5c67f4125?affiliateKey=gAAAAABnCEpLfBMIqiGJRCnDyUWYR9mExKxCbYvi7t5Ml3WP3bWOHdsI7HvjwAyE43YUtgv5yktpewVCrnSCD4qXXOTTQWYYIhejXl6Pner-19KAoafAMrg4wicNHMHsIm_1_nbV9_DaPNNrAhAGy21DCHMU0bE9ybpNoFxzo8Y_RLaPk799PI3Lb-SC_aEIELPsNUaot815ntH3gtNskEqT0AJA2c3WPg%3D%3D";

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Trust Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 backdrop-blur-sm mb-8 animate-fade-in">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-medium text-slate-300">
              <span className="font-bold text-white">5,100+</span> creators are active right now
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-tight animate-fade-in [animation-delay:200ms]">
            The #1 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Threads Growth & Monetization</span> System
          </h1>

          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in [animation-delay:400ms]">
            Stop posting into the void. Join 5,100+ creators using our proven 17-lesson system to turn attention into income on the world's fastest-growing app.
          </p>

          <div className="flex flex-col items-center gap-6 animate-fade-in [animation-delay:600ms]">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <a
                href={`${beaconsUrl}${searchParams}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button size="lg" className="h-14 px-8 text-lg bg-white text-slate-900 hover:bg-slate-200 rounded-full w-full shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                  Join Threads to Millions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>

              <a
                href={`${NOMAD_URL}${searchParams}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white rounded-full w-full">
                  FREE GROWTH STRATEGY
                </Button>
              </a>
            </div>

            <Link href="/blog" className="w-full sm:w-auto">
              <Button size="lg" variant="ghost" className="h-12 px-8 text-base text-primary hover:text-primary/80 hover:bg-primary/10 rounded-full w-full group">
                <BookOpen className="mr-2 h-5 w-5" />
                VIEW FULL CURRICULUM
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <p className="mt-6 text-sm text-slate-500 animate-fade-in [animation-delay:700ms]">
            Instant Access • Join 5,100+ Members • Cancel Anytime
          </p>

          {/* Social Proof Bar */}
          <div className="mt-16 pt-8 border-t border-slate-800/50 flex flex-wrap justify-center items-center gap-x-12 gap-y-4 animate-fade-in [animation-delay:800ms]">
            <div className="flex items-center gap-2 text-slate-400">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span>Proven Templates</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <Users className="w-5 h-5 text-blue-500" />
              <span>5.1k+ Members</span>
            </div>
            <PoweredBySkoolBadge theme="dark" variant="primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

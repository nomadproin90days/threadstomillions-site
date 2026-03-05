"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NOMAD_URL } from "@/lib/constants";
import { useSearchParams } from "@/lib/useSearchParams";

const CTASection = () => {
  const searchParams = useSearchParams();

  return (
    <section className="py-24 lg:py-40 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-6xl md:text-8xl mb-8 italic">Start the System</h2>
            <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-2xl mx-auto font-light">
              Build your Threads pipeline with the exact frameworks used by 10,000+ creators.
            </p>

            <div className="space-y-10">
              <a href={`${NOMAD_URL}${searchParams}`} className="inline-block w-full sm:w-auto">
                <Button size="lg" className="h-16 px-12 text-xl bg-slate-950 text-white hover:bg-slate-800 rounded-none w-full font-medium transition-all">
                  Join Threads to Millions
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </a>

              <div className="pt-10 border-t border-slate-100">
                <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-slate-400 font-medium uppercase tracking-widest">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>30-Day Money-Back Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-slate-300" />
                    <span>hello@threadstomillions.com</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

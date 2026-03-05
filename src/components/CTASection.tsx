"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NOMAD_URL } from "@/lib/constants";
import { useSearchParams } from "@/lib/useSearchParams";

const CTASection = () => {
  const searchParams = useSearchParams();

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center p-12 rounded-[2rem] bg-slate-900 border border-slate-800"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white uppercase tracking-tight">
            Start the <span className="text-primary">System</span>
          </h2>

          <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto">
            Get instant access to the templates, frameworks, and community that power 10,000+ creators on Threads.
          </p>

          <div className="flex flex-col items-center gap-6">
            <a
              href={`${NOMAD_URL}${searchParams}`}
              className="w-full sm:w-auto"
            >
              <Button size="lg" className="h-16 px-12 text-xl bg-white text-slate-900 hover:bg-slate-200 rounded-full font-bold shadow-2xl shadow-white/5">
                Join Threads to Millions
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </a>

            <div className="space-y-4">
              <div className="flex flex-wrap justify-center items-center gap-4 text-sm font-medium text-slate-500">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>30-Day Money-Back Guarantee</span>
                </div>
                <div className="hidden sm:block text-slate-800">•</div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-500" />
                  <span>Support: hello@threadstomillions.com</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 max-w-lg mx-auto leading-relaxed">
                Try it for 30 days. If you do the work and it's not a fit, email support for a full refund. No hoops, just transparency.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

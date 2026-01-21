import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium text-sm">Limited Spots Available</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase mb-6">
            Ready to Transform Your{" "}
            <span className="ttm-gradient-text">Threads Game?</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
            Join thousands of creators who are building profitable businesses on Threads. 
            Your journey to millions starts with a single step.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="hero" size="xl" className="group">
              Join the Community
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <p className="text-sm text-muted-foreground mt-6">
            ✓ Cancel anytime · ✓ 30-day money-back guarantee · ✓ Instant access
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

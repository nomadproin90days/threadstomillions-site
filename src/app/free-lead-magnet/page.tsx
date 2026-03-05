import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, Download, ShieldCheck, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free Threads Growth Guide - Threads to Millions',
  description: 'Download our free guide on how to grow and monetize your Threads audience in 2026. No fluff, just the STAR method basics.',
};

export default function FreeLeadMagnet() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                <Clock className="w-3 h-3" />
                Limited Time: Free for March 2026
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
                The <span className="ttm-gradient-text">7-Figure</span> Threads Blueprint
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Stop guessing and start growing. Get the framework Lexie uses to grow on Threads and help 5,200+ community members do the same.
              </p>
              
              <div className="space-y-4 mb-10">
                {[
                  "The 'Story-First' content hook that stops the scroll",
                  "3 posting templates that drive 100+ replies each",
                  "The engagement hack for rapid account discovery",
                  "How to monetize your first 1,000 followers"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground/90 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* High-Trust Lead Form Area (Concept: redirects to Skool or an Opt-in) */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://nomadproin90days.com/shop/d8beb61f-33df-4306-a897-87b3a1ffe197" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 h-14 rounded-full text-lg shadow-lg shadow-primary/20">
                    Download Free Guide
                    <Download className="ml-2 w-5 h-5" />
                  </Button>
                </a>
                <div className="flex items-center gap-2 text-xs text-muted-foreground px-2">
                  <ShieldCheck className="w-4 h-4" />
                  No credit card required. Instant access.
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Mockup / Visual Artifact */}
              <div className="relative z-10 aspect-[3/4] rounded-2xl bg-card border border-border shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent pointer-events-none" />
                <div className="p-8 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                    <span className="font-display font-bold text-primary">TTM</span>
                  </div>
                  <div className="space-y-4 mb-8">
                    <div className="h-2 w-2/3 bg-muted rounded-full" />
                    <div className="h-8 w-full bg-foreground/10 rounded-lg" />
                    <div className="h-2 w-full bg-muted rounded-full" />
                    <div className="h-2 w-5/6 bg-muted rounded-full" />
                  </div>
                  <div className="mt-auto p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-muted flex-shrink-0" />
                      <div>
                        <div className="h-2 w-20 bg-muted rounded-full mb-2" />
                        <div className="h-2 w-12 bg-muted/50 rounded-full" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 w-full bg-muted/30 rounded-full" />
                      <div className="h-2 w-full bg-muted/30 rounded-full" />
                      <div className="h-2 w-3/4 bg-muted/30 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements to reduce "flat" look */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-[100px] -z-10 rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 blur-[100px] -z-10 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="py-12 border-y border-border bg-card/50">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest mb-8">
            Used by creators making $1,000+ per month
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 grayscale opacity-60">
            {/* These should be logos or strong proof objects */}
            <div className="font-display font-bold text-xl">SKOOL</div>
            <div className="font-display font-bold text-xl">THREADS</div>
            <div className="font-display font-bold text-xl">STRIPE</div>
            <div className="font-display font-bold text-xl">GHL</div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to stop shouting into the void?</h2>
          <p className="text-lg text-muted-foreground mb-10">
            Join the community of 5,200+ creators learning to grow and monetize on Threads.
          </p>
          <a href="https://nomadproin90days.com/shop/d8beb61f-33df-4306-a897-87b3a1ffe197">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-10 h-16 rounded-full text-xl shadow-xl shadow-primary/30">
              Get Instant Access Now
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

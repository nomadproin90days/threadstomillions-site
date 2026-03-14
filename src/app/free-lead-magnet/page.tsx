import type { Metadata } from 'next';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EmailCaptureForm from '@/components/EmailCaptureForm';

export const metadata: Metadata = {
  title: 'Free Threads Growth Guide',
  description: 'Download the free guide on how to grow and monetize your Threads audience in 2026. The STAR method framework, posting templates, and engagement strategies.',
  alternates: {
    canonical: 'https://threadstomillions.com/free-lead-magnet',
  },
  openGraph: {
    title: 'Free Threads Growth Guide',
    description: 'Download the free guide on how to grow and monetize your Threads audience in 2026.',
    url: 'https://threadstomillions.com/free-lead-magnet',
    siteName: 'Threads to Millions',
    images: [{ url: 'https://threadstomillions.com/og-image-v6.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Threads Growth Guide',
    description: 'Download the free guide on how to grow and monetize your Threads audience in 2026.',
  },
};

export default function FreeLeadMagnet() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--foreground)]">
      <Navbar />

      <section className="pt-32 pb-20 px-6">
        <div className="editorial-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-[var(--primary)] mb-4">
                Free guide
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
                The Threads Growth Blueprint
              </h1>
              <p className="text-xl text-[var(--muted-foreground)] mb-8 leading-relaxed">
                Stop guessing what to post. Get the framework Lexie uses to turn Threads content into real revenue.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "The story-first content hook that stops the scroll",
                  "3 posting templates that drive 100+ replies",
                  "The engagement strategy for rapid account discovery",
                  "How to monetize your first 1,000 followers",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--primary)] mt-1 flex-shrink-0" />
                    <span className="text-[var(--foreground)] font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <EmailCaptureForm
                buttonText="Send Me the Free Guide"
                successMessage="Check your inbox!"
                successSubtext="Your free Threads growth guide is on the way."
              />

              <div className="flex items-center gap-2 text-xs text-[var(--muted-foreground)] mt-4 px-1">
                <ShieldCheck className="w-4 h-4" />
                No credit card required. Unsubscribe anytime.
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 aspect-[3/4] rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 to-transparent pointer-events-none" />
                <div className="p-8 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/15 flex items-center justify-center mb-6">
                    <span className="font-display font-bold text-[var(--primary)]">TTM</span>
                  </div>
                  <div className="space-y-4 mb-8">
                    <div className="h-2 w-2/3 bg-[var(--border)] rounded-full" />
                    <div className="h-8 w-full bg-[var(--foreground)]/10 rounded-lg" />
                    <div className="h-2 w-full bg-[var(--border)] rounded-full" />
                    <div className="h-2 w-5/6 bg-[var(--border)] rounded-full" />
                  </div>
                  <div className="mt-auto p-6 rounded-xl bg-[var(--bg)]/50 backdrop-blur-sm border border-[var(--border)]/50">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[var(--border)] flex-shrink-0" />
                      <div>
                        <div className="h-2 w-20 bg-[var(--border)] rounded-full mb-2" />
                        <div className="h-2 w-12 bg-[var(--border)]/50 rounded-full" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 w-full bg-[var(--border)]/30 rounded-full" />
                      <div className="h-2 w-full bg-[var(--border)]/30 rounded-full" />
                      <div className="h-2 w-3/4 bg-[var(--border)]/30 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--primary)]/10 blur-[100px] -z-10 rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[var(--accent)]/10 blur-[100px] -z-10 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

"use client";

import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="py-16 border-t border-[hsl(var(--border))]">
      <div className="editorial-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-12 mb-8 border-b border-[hsl(var(--border))]">
          <div className="lg:col-span-2">
            <div
              className="text-[24px] font-bold uppercase tracking-[0.15em] text-[hsl(var(--text))] mb-6"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Threads to Millions
            </div>
            <div className="text-[14px] text-[hsl(var(--muted-text))] mb-2">
              Lexie Media LLC, Delaware
            </div>
            <div className="text-[14px] text-[hsl(var(--muted-text))]">
              Support:{" "}
              <a href="mailto:hello@threadstomillions.com" className="hover:text-[hsl(var(--text))] transition-colors">
                hello@threadstomillions.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[12px] uppercase tracking-[0.2em] text-[hsl(var(--text))] font-semibold mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><Link href="#method" className="text-[14px] text-[hsl(var(--muted-text))] hover:text-[hsl(var(--text))] transition-colors">The STAR Method</Link></li>
              <li><Link href="#results" className="text-[14px] text-[hsl(var(--muted-text))] hover:text-[hsl(var(--text))] transition-colors">Results</Link></li>
              <li><Link href="#curriculum" className="text-[14px] text-[hsl(var(--muted-text))] hover:text-[hsl(var(--text))] transition-colors">Curriculum</Link></li>
              <li><Link href="/blog" className="text-[14px] text-[hsl(var(--muted-text))] hover:text-[hsl(var(--text))] transition-colors">All Articles</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[12px] uppercase tracking-[0.2em] text-[hsl(var(--text))] font-semibold mb-6">Top Guides</h4>
            <ul className="space-y-4">
              <li><Link href="/blog/threads-monetization-requirements" className="text-[14px] text-[hsl(var(--muted-text))] hover:text-[hsl(var(--text))] transition-colors">Monetization Requirements</Link></li>
              <li><Link href="/blog/threads-monetization-blueprint-2026" className="text-[14px] text-[hsl(var(--muted-text))] hover:text-[hsl(var(--text))] transition-colors">Monetization Blueprint</Link></li>
              <li><Link href="/blog/threads-app-guide-2026" className="text-[14px] text-[hsl(var(--muted-text))] hover:text-[hsl(var(--text))] transition-colors">Threads Guide 2026</Link></li>
              <li><Link href="/blog/10-proven-hooks" className="text-[14px] text-[hsl(var(--muted-text))] hover:text-[hsl(var(--text))] transition-colors">Viral Hook Formulas</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[12px] uppercase tracking-[0.2em] text-[hsl(var(--text))] font-semibold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="/terms" className="text-[14px] text-[hsl(var(--muted-text))] hover:text-[hsl(var(--text))] transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-[14px] text-[hsl(var(--muted-text))] hover:text-[hsl(var(--text))] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms#refunds" className="text-[14px] text-[hsl(var(--muted-text))] hover:text-[hsl(var(--text))] transition-colors">Refund Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] uppercase tracking-[0.1em] text-[hsl(var(--muted-text))]">
          <div>&copy; {new Date().getFullYear()} Lexie Media LLC. All rights reserved.</div>
          <div className="flex items-center gap-2">
            <img src="/images/testimonials/threads-success-story-1.png" alt="" className="w-4 h-4 rounded-full opacity-50" aria-hidden="true" />
            Powered by Skool
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

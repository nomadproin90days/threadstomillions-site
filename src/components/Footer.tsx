"use client";

import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-[var(--background)] py-16">
      <div className="editorial-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 border-b border-[var(--border)] pb-12 mb-8">

          <div className="lg:col-span-2">
            <div className="font-heading text-[20px] tracking-tight text-[var(--foreground)] mb-6">
              Threads to Millions
            </div>
            <div className="text-small text-[var(--muted-foreground)] mb-2">
              Lexie Media LLC, Delaware
            </div>
            <div className="text-small text-[var(--muted-foreground)]">
              Support: <a href="mailto:hello@threadstomillions.com" className="hover:text-[var(--foreground)] transition-colors">hello@threadstomillions.com</a>
            </div>
          </div>

          <div>
            <h4 className="text-micro text-[var(--foreground)] mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><Link href="#method" className="text-small text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">The STAR Method</Link></li>
              <li><Link href="#results" className="text-small text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">Verified Results</Link></li>
              <li><Link href="#curriculum" className="text-small text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">Curriculum</Link></li>
              <li><Link href="/blog" className="text-small text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">All Articles</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-micro text-[var(--foreground)] mb-6">Lessons & Guides</h4>
            <ul className="space-y-4">
              <li><Link href="/blog/threads-monetization-requirements" className="text-small text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">Monetization Requirements</Link></li>
              <li><Link href="/blog/threads-monetization-blueprint-2026" className="text-small text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">Monetization Blueprint 2026</Link></li>
              <li><Link href="/blog/threads-app-guide-2026" className="text-small text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">Threads App Guide 2026</Link></li>
              <li><Link href="/blog/10-proven-hooks" className="text-small text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">Viral Hook Formulas</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-micro text-[var(--foreground)] mb-6">Legal & Trust</h4>
            <ul className="space-y-4">
              <li><Link href="/terms" className="text-small text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-small text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms#refunds" className="text-small text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">Refund Policy</Link></li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-micro text-[var(--muted-foreground)]">
          <div>&copy; {new Date().getFullYear()} Lexie Media LLC. All rights reserved.</div>
          <div>Last updated: March 2026</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

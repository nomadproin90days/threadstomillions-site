"use client";

import Link from 'next/link';
import { Mail, MapPin, ShieldCheck, FileText } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link href="/" className="font-display text-2xl uppercase tracking-tight text-white inline-block mb-6">
              Threads to Millions
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              The step-by-step operational system for creators and service providers building authority on Threads.
            </p>
            <div className="flex items-center gap-3 text-emerald-500/80 text-xs font-bold uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4" />
              <span>Verified 2026 Strategy</span>
            </div>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Resources</h4>
            <ul className="space-y-4">
              <li><Link href="/blog" className="text-slate-500 hover:text-primary transition-colors text-sm">Full Curriculum</Link></li>
              <li><Link href="/free-lead-magnet" className="text-slate-500 hover:text-primary transition-colors text-sm">Free Growth Strategy</Link></li>
              <li><Link href="#results" className="text-slate-500 hover:text-primary transition-colors text-sm">Verified Results</Link></li>
              <li><Link href="#roadmap" className="text-slate-500 hover:text-primary transition-colors text-sm">30-Day Roadmap</Link></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Trust & Legal</h4>
            <ul className="space-y-4">
              <li><Link href="/privacy" className="text-slate-500 hover:text-primary transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-slate-500 hover:text-primary transition-colors text-sm">Terms of Service</Link></li>
              <li><Link href="/terms#refunds" className="text-slate-500 hover:text-primary transition-colors text-sm">Refund Policy</Link></li>
              <li><Link href="/contact" className="text-slate-500 hover:text-primary transition-colors text-sm">Support & Contact</Link></li>
            </ul>
          </div>

          {/* Business Info Column */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Business Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-500 text-sm">
                <FileText className="w-4 h-4 text-slate-700 flex-shrink-0" />
                <span>Lexie Media LLC, Delaware</span>
              </li>
              <li className="flex items-center gap-3 text-slate-500 text-sm">
                <Mail className="w-4 h-4 text-slate-700 flex-shrink-0" />
                <a href="mailto:hello@threadstomillions.com" className="hover:text-primary transition-colors">hello@threadstomillions.com</a>
              </li>
              <li className="flex items-start gap-3 text-slate-500 text-sm">
                <MapPin className="w-4 h-4 text-slate-700 flex-shrink-0" />
                <span>Operating Globally</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-xs">
            &copy; {currentYear} Threads to Millions. All rights reserved.
          </p>
          <div className="text-slate-700 text-[10px] uppercase tracking-[0.2em]">
            Last Updated: March 2026
          </div>
          <div className="flex gap-6">
            <a href="https://threads.net/@getdigitalwithlexie" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-white transition-colors text-xs">Threads</a>
            <a href="https://instagram.com/getdigitalwithlexie" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-white transition-colors text-xs">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

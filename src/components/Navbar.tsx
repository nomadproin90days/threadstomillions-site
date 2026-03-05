"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { NOMAD_URL } from '@/lib/constants';
import { useSearchParams } from '@/lib/useSearchParams';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Method', href: '#method' },
    { name: 'Results', href: '#results' },
    { name: 'Curriculum', href: '#curriculum' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--surface)]/90 backdrop-blur-md border-b border-[var(--border)] shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="editorial-container flex justify-between items-center">
        {/* Wordmark */}
        <Link href="/" className="font-heading text-[22px] tracking-tight text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
          Threads to Millions
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex gap-6 text-small text-[var(--muted-foreground)]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-[var(--foreground)] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <a href={`${NOMAD_URL}${searchParams}`}>
            <button className="btn-primary text-[15px] px-6 py-3">
              Start
            </button>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[var(--foreground)] p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[var(--surface)] border-b border-[var(--border)] py-4 px-6 shadow-lg flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-body font-medium text-[var(--foreground)] py-2 border-b border-[var(--border)]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a href={`${NOMAD_URL}${searchParams}`} className="mt-4">
            <button className="w-full btn-primary py-4">
              Start the System
            </button>
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;

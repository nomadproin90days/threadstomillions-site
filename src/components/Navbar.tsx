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
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[hsl(var(--bg))]/80 backdrop-blur-xl border-b border-[hsl(var(--border))] py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="editorial-container flex justify-between items-center">
        <Link
          href="/"
          className="text-[22px] font-bold uppercase tracking-[0.15em] text-[hsl(var(--text))] hover:text-[hsl(var(--primary))] transition-colors"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          TTM
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex gap-6 text-[13px] uppercase tracking-[0.1em] text-[hsl(var(--muted-text))]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-[hsl(var(--text))] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <a href={`${NOMAD_URL}${searchParams}`}>
            <button className="btn-primary text-[14px] px-6 py-3">
              Join Now
            </button>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[hsl(var(--text))] p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[hsl(var(--bg))]/95 backdrop-blur-xl border-b border-[hsl(var(--border))] py-6 px-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[15px] uppercase tracking-[0.1em] font-medium text-[hsl(var(--text))] py-3 border-b border-[hsl(var(--border))]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a href={`${NOMAD_URL}${searchParams}`} className="mt-4">
            <button className="w-full btn-primary py-4">
              Join Now
            </button>
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;

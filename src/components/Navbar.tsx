"use client";

import Link from 'next/link';
import { NOMAD_URL } from '@/lib/constants';
import { useSearchParams } from '@/lib/useSearchParams';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'The Strategy', href: '/#strategy' },
    { name: 'Inside TTM', href: '/#features' },
    { name: 'Results', href: '/#testimonials' },
    { name: 'Free Guide', href: '/free-lead-magnet' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display text-xl md:text-2xl font-bold uppercase tracking-tighter">
            Threads<span className="text-primary italic">To</span>Millions
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a href={`${NOMAD_URL}${searchParams}`}>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full px-6">
              Join Now
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-6 flex flex-col gap-6 animate-in slide-in-from-top-5 duration-200">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-lg font-medium text-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a href={`${NOMAD_URL}${searchParams}`}>
            <Button className="w-full bg-primary text-primary-foreground font-bold py-6 rounded-xl">
              Join the Community
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NOMAD_URL } from "@/lib/constants";
import { useSearchParams } from "@/lib/useSearchParams";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-lg border-b border-border shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center h-16">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm font-heading">T</span>
          </div>
          <span className="font-heading text-lg font-bold tracking-tight text-foreground">
            Threads to Millions
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a href="#strategy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Method
          </a>
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            What You Get
          </a>
          <a href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Results
          </a>
          <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Blog
          </Link>
          <a
            href={`${NOMAD_URL}${searchParams}`}
            className="ttm-cta px-5 py-2.5 text-sm"
          >
            Join Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

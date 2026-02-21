"use client";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">T</span>
            </div>
            <span className="font-display text-xl uppercase tracking-tight">
              Threads to Millions
            </span>
          </motion.div>

          {/* Links */}
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <a href="/privacy" className="hover:text-primary transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-primary transition-colors">Terms</a>
            <a href="/contact" className="hover:text-primary transition-colors">Contact</a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © 2025 Threads to Millions. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";

import { useState, useEffect } from "react";
import { NOMAD_URL } from "@/lib/constants";
import { useSearchParams } from "@/lib/useSearchParams";
import { ArrowRight } from "lucide-react";

export function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-[var(--surface)]/96 backdrop-blur-lg border-t border-[var(--border)]">
      <a href={`${NOMAD_URL}${searchParams}`} className="block w-full">
        <button className="w-full btn-primary h-14 text-lg shadow-lg flex items-center justify-center gap-2">
          Join the Community
          <ArrowRight size={18} />
        </button>
      </a>
    </div>
  );
}

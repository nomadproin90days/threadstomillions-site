"use client";

import { useState, useEffect } from "react";
import { NOMAD_URL } from "@/lib/constants";
import { useSearchParams } from "@/lib/useSearchParams";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 500px (past hero)
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/90 backdrop-blur-lg border-t border-border animate-in slide-in-from-bottom-full duration-300">
      <a href={`${NOMAD_URL}${searchParams}`} className="block w-full">
        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg shadow-primary/20 h-14 rounded-xl text-lg">
          Join the Community
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </a>
    </div>
  );
}

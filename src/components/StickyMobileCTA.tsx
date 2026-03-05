"use client";

import { useState, useEffect } from "react";
import { NOMAD_URL } from "@/lib/constants";
import { useSearchParams } from "@/lib/useSearchParams";

const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="ttm-sticky-cta md:hidden">
      <a
        href={`${NOMAD_URL}${searchParams}`}
        className="ttm-cta block w-full py-3.5 text-center text-sm font-bold"
      >
        Start Growing on Threads
      </a>
    </div>
  );
};

export default StickyMobileCTA;

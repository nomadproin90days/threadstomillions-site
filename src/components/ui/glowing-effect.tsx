"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { animate } from "framer-motion";

interface GlowingEffectProps {
  blur?: number;
  overlap?: number;
  proximity?: number;
  spread?: number;
  variant?: "default" | "white";
  className?: string;
  disabled?: boolean;
  glow?: boolean;
}

export const GlowingEffect = ({
  blur = 0,
  overlap = 20,
  proximity = 64,
  spread = 20,
  variant = "default",
  className,
  disabled = false,
  glow = true,
}: GlowingEffectProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    if (disabled || !glow) return;

    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      container.style.setProperty("--glow-x", `${x}px`);
      container.style.setProperty("--glow-y", `${y}px`);
    };

    const handleMouseEnter = () => setIsMouseOver(true);
    const handleMouseLeave = () => setIsMouseOver(false);

    window.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    };
  }, [disabled, glow]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden",
        className
      )}
      style={
        {
          "--glow-x": "50%",
          "--glow-y": "50%",
          "--glow-blur": `${blur}px`,
          "--glow-spread": `${spread}px`,
          "--glow-proximity": `${proximity}px`,
          "--glow-overlap": `${overlap}px`,
          "--glow-opacity": isMouseOver ? "1" : "0",
        } as React.CSSProperties
      }
    >
      {/* The Glow Border Mask */}
      <div
        className={cn(
          "absolute inset-0 rounded-[inherit] transition-opacity duration-500",
          variant === "white" ? "bg-white/10" : "bg-primary/10"
        )}
        style={{
          opacity: "var(--glow-opacity)",
          maskImage: `radial-gradient(var(--glow-proximity) circle at var(--glow-x) var(--glow-y), white, transparent)`,
          WebkitMaskImage: `radial-gradient(var(--glow-proximity) circle at var(--glow-x) var(--glow-y), white, transparent)`,
        }}
      >
        {/* The Grid / Dots Pattern */}
        <div 
          className="absolute inset-[-100%] opacity-40"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "24px 24px",
            color: variant === "white" ? "white" : "hsl(var(--primary))",
          }}
        />
      </div>

      {/* Subtle Border Glow */}
      <div
        className="absolute inset-0 rounded-[inherit] transition-opacity duration-500"
        style={{
          opacity: "var(--glow-opacity)",
          padding: "1px",
          background: `radial-gradient(var(--glow-proximity) circle at var(--glow-x) var(--glow-y), hsl(var(--primary) / 0.5), transparent)`,
          mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          maskComposite: "exclude",
          WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          WebkitMaskComposite: "xor",
        }}
      />
    </div>
  );
};

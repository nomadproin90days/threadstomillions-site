"use client";

export const TrustStrip = () => {
  const items = [
    "THREADS TO MILLIONS",
    "80% AFFILIATE COMMISSION",
    "5,200+ MEMBERS",
    "CANCEL ANYTIME",
    "POWERED BY SKOOL",
    "THREADYBOT AI INCLUDED",
  ];

  // Double for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden bg-[hsl(var(--primary))] py-2.5 relative z-50">
      <div className="animate-marquee flex whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="mx-8 text-[12px] font-bold uppercase tracking-[0.15em] text-[hsl(var(--primary-foreground))]"
          >
            {item}
            <span className="ml-8 opacity-40">&#x2022;</span>
          </span>
        ))}
      </div>
    </div>
  );
};

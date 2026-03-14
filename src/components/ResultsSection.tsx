"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { reveal, revealWithDelay, scaleReveal } from "@/lib/motion";

const testimonialImages = [
  { src: "/images/testimonials/threads-success-story-1.png", alt: "TTM member @chloedigitally showing 2,126 new followers and $1,539 in sales from Threads in 10 weeks" },
  { src: "/images/testimonials/threads-success-story-2.png", alt: "TTM member sharing revenue results and follower growth from Threads to Millions community" },
  { src: "/images/testimonials/threads-success-story-3.png", alt: "TTM member reaching 1M views milestone using the STAR Method on Threads" },
];

interface Testimonial {
  handle: string;
  quote: string;
  metrics?: string[];
  featured?: boolean;
}

const testimonials: Testimonial[] = [
  {
    handle: "@chloedigitally",
    quote:
      "I invested in THREADS TO MILLIONS 10 weeks ago. AND THESE ARE MY RESULTS:",
    metrics: [
      "Sold it 47 times turning $47 into $1,539.20",
      "Gained 2,126 followers",
      "Massive sales, leads, reach and connections",
    ],
    featured: true,
  },
  {
    handle: "Clara Brooks",
    quote:
      "I joined the community on May 2025. For nearly 3 months? Nothing to show. No traffic. No leads. Zero sales. But I didn't give up. I went back to the modules, kept applying the lessons, and stayed consistent even when no one was watching. Today, I hit $5,700 in sales.",
    metrics: ["$5,700 in total sales", "Breakthrough from one spotlight post"],
  },
  {
    handle: "Laura Miller",
    quote:
      "I've had TTM 3 weeks. In that time I've gained 600+ new followers, a 200% rise in store visits, 70K+ views. It's been amazing! I've stopped making content on my other platforms and my store visits are still the highest they've ever been.",
    metrics: ["600+ new followers in 3 weeks", "200% rise in store visits", "70K+ views"],
  },
  {
    handle: "Nicola Coates",
    quote:
      "I bought TTM 4 weeks ago determined to take Threads seriously. So I dived into the course and all I can say is WOW!",
    metrics: ["1K to 130K views in 30 days", "Tripled following", "First sale in 4 weeks"],
  },
  {
    handle: "Reetika Bhardwaj",
    quote:
      "This journey humbled me. For months results didn't show even though the effort was there but I kept believing, kept learning. Everything changed when I shifted my mindset and approach. Today I'm thankful for a $5K win.",
    metrics: ["$5,000 in sales"],
  },
  {
    handle: "@digitalwithsav",
    quote:
      "I invested in Threads to Millions & this happened... I gained 500+ new followers. Sold it 16 times. Have over 170K views!!! I will never shut up about it.",
  },
  {
    handle: "@thedigitalpowerhouse",
    quote:
      "THIS IS INSANEEE. Months of using proven strategies.",
    metrics: ["1.0M total views"],
  },
  {
    handle: "Chanel Sanon",
    quote:
      "I OFFICIALLY WENT FROM 3.4K to 3.6K in less than 24 hours on Threads!! ITS OFFICIAL I'VE REACHED 3K FOLLOWERS ON THREADS!!!",
    metrics: ["3.6K followers", "200 gained in 24 hours"],
  },
  {
    handle: "@kickitwith.kalinah",
    quote:
      "Threads to Millions really is that girl! Almost 50k views, over 200 Thriends, and a few potential leads in less than 2 weeks? Wild.",
  },
  {
    handle: "@socialsociety.hub",
    quote:
      "I can spot a Threads to Millions post a mile away. They use a good hook. They don't use ick to make sales. They comment with purpose. They're making sales. Coincidence? I don't think so.",
  },
];

function TestimonialCard({ item, index }: { item: Testimonial; index: number }) {
  const isFeatured = item.featured;

  return (
    <motion.div
      {...revealWithDelay(index * 0.08)}
      className={`glass-card p-6 ${isFeatured ? "md:col-span-2 p-8" : ""}`}
    >
      {/* Thread-style header */}
      <div className="flex items-center gap-3 mb-4">
        <div className={`${isFeatured ? "w-11 h-11" : "w-9 h-9"} rounded-full bg-[hsl(var(--primary)/0.15)] border border-[hsl(var(--primary)/0.2)] flex items-center justify-center text-[hsl(var(--primary))] font-bold text-xs`}>
          {item.handle.charAt(1).toUpperCase()}
        </div>
        <div>
          <div className={`font-semibold text-[hsl(var(--text))] ${isFeatured ? "text-base" : "text-sm"}`}>
            {item.handle}
          </div>
          <div className="text-[11px] text-[hsl(var(--muted-text))]">Threads</div>
        </div>
      </div>

      <p className={`text-[hsl(var(--text)/0.85)] leading-relaxed ${isFeatured ? "text-lg" : "text-[15px]"}`}>
        &ldquo;{item.quote}&rdquo;
      </p>

      {item.metrics && (
        <div className={`space-y-2 mt-5 pt-5 border-t border-[hsl(var(--border))]`}>
          {item.metrics.map((metric) => (
            <div
              key={metric}
              className="flex items-center gap-3 text-[hsl(var(--primary))] font-mono text-sm font-medium"
            >
              <span>+</span>
              {metric}
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}

export const ResultsSection = () => {
  const featured = testimonials.find((t) => t.featured);
  const rest = testimonials.filter((t) => !t.featured);

  return (
    <section id="results" className="py-24 md:py-32 relative overflow-hidden">
      {/* Atmospheric glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-[hsl(var(--primary)/0.04)] blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[hsl(var(--primary)/0.03)] blur-[100px]" />
      </div>

      <div className="editorial-container relative z-10">
        {/* Header */}
        <motion.div {...reveal} className="mb-16 md:mb-20">
          <span className="inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.2em] text-[hsl(var(--primary))] font-semibold mb-6">
            <span className="w-8 h-px bg-[hsl(var(--primary))]" />
            Proof, not promises
          </span>
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] mb-4 max-w-3xl">
            WHAT PEOPLE ARE SAYING ABOUT <span className="accent-italic">TTM</span>
          </h2>
          <p className="text-[18px] text-[hsl(var(--text)/0.4)] max-w-xl">
            Not curated. Not paraphrased. Copied directly from Threads posts.
          </p>
        </motion.div>

        {/* Real screenshot testimonials */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {testimonialImages.map((img, i) => (
            <motion.div key={i} {...scaleReveal} className="rounded-[var(--radius-card)] overflow-hidden border border-[hsl(var(--border))]">
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={800}
                className="w-full h-auto"
              />
            </motion.div>
          ))}
        </div>

        {/* Text testimonials grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {featured && <TestimonialCard item={featured} index={0} />}
          {rest.slice(0, 1).map((item, i) => (
            <TestimonialCard key={item.handle} item={item} index={i + 1} />
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          {rest.slice(1, 4).map((item, i) => (
            <TestimonialCard key={item.handle} item={item} index={i + 2} />
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          {rest.slice(4, 7).map((item, i) => (
            <TestimonialCard key={item.handle} item={item} index={i + 5} />
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          {rest.slice(7).map((item, i) => (
            <TestimonialCard key={item.handle} item={item} index={i + 8} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;

"use client";

import { motion } from "framer-motion";
import { reveal, revealWithDelay } from "@/lib/motion";

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
    handle: "@digitalwithsav",
    quote:
      "I invested in Threads to Millions & this happened... I gained 500+ new followers. Sold it 16 times. Have over 170K views!!! I will never shut up about it.",
  },
  {
    handle: "@kickitwith.kalinah",
    quote:
      "Threads to Millions really is that girl! Almost 50k views, over 200 Thriends, and a few potential leads in less than 2 weeks? Wild.",
  },
  {
    handle: "@digitalmoneyemma",
    quote:
      "THIS IS INSANE! I can't believe I'm about to reach 2M views soon. Thanks Threads to Millions.",
  },
  {
    handle: "@socialsociety.hub",
    quote:
      "I can spot a Threads to Millions post a mile away. They know how to optimize their threads. They use a good hook. They don't use ick to make sales. They comment with purpose. They reply strategically. They're making sales. Coincidence? I don't think so.",
  },
  {
    handle: "@vbdigitalmarketing",
    quote:
      "One thing I know without a doubt: Threads to Millions is truly one of the HIGHEST VALUE, low-ticket courses out there!",
  },
  {
    handle: "@thedigitalpowerhouse",
    quote:
      "THIS IS INSANEEE. Months of using proven strategies.",
    metrics: ["1.0M total views"],
  },
  {
    handle: "@digitalfaithfueledmama",
    quote:
      "YOU need Threads to Millions if you want to start monetizing threads! The results are insane!",
  },
];

function FeaturedCard({ item }: { item: Testimonial }) {
  return (
    <motion.div
      {...revealWithDelay(0)}
      className="testimonial-card-featured md:col-span-2"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[hsl(var(--primary-light))] to-[hsl(var(--primary))] flex items-center justify-center text-white font-bold text-sm">
          {item.handle.charAt(1).toUpperCase()}
        </div>
        <div>
          <div className="font-semibold text-white">{item.handle}</div>
          <div className="text-xs text-white/40">Threads</div>
        </div>
      </div>

      <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-5">
        {item.quote}
      </p>

      {item.metrics && (
        <div className="space-y-2">
          {item.metrics.map((metric) => (
            <div
              key={metric}
              className="flex items-center gap-3 text-[hsl(var(--primary-light))] font-mono text-sm font-medium"
            >
              <span className="text-[hsl(var(--primary-light))]">+</span>
              {metric}
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}

function TestimonialCard({
  item,
  index,
}: {
  item: Testimonial;
  index: number;
}) {
  return (
    <motion.div
      {...revealWithDelay(index * 0.06)}
      className="testimonial-card flex flex-col"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 rounded-full bg-[hsl(210,10%,25%)] border border-[hsl(210,10%,30%)] flex items-center justify-center text-white/70 font-bold text-xs">
          {item.handle.charAt(1).toUpperCase()}
        </div>
        <div>
          <div className="font-semibold text-white text-sm">{item.handle}</div>
          <div className="text-xs text-white/30">Threads</div>
        </div>
      </div>

      <p className="text-white/80 text-sm leading-relaxed flex-grow">
        {item.quote}
      </p>

      {item.metrics && (
        <div className="mt-4 pt-4 border-t border-white/10 space-y-1.5">
          {item.metrics.map((metric) => (
            <div
              key={metric}
              className="text-[hsl(var(--primary-light))] font-mono text-xs font-medium"
            >
              + {metric}
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
  const col1 = rest.filter((_, i) => i % 3 === 0);
  const col2 = rest.filter((_, i) => i % 3 === 1);
  const col3 = rest.filter((_, i) => i % 3 === 2);

  return (
    <section id="results" className="section-dark py-24 md:py-32">
      <div className="editorial-container relative z-10">
        {/* Header */}
        <motion.div {...reveal} className="mb-16 max-w-2xl">
          <h2 className="text-h2 mb-4">
            Real Members. Real Timelines. Real Outcomes.
          </h2>
          <p className="text-lg text-white/60">
            Proof from creators and businesses executing the system.
          </p>
        </motion.div>

        {/* Featured card */}
        {featured && (
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <FeaturedCard item={featured} />
          </div>
        )}

        {/* Masonry-style grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          <div className="space-y-6">
            {col1.map((item, i) => (
              <TestimonialCard key={item.handle} item={item} index={i} />
            ))}
          </div>
          <div className="space-y-6">
            {col2.map((item, i) => (
              <TestimonialCard
                key={item.handle}
                item={item}
                index={i + col1.length}
              />
            ))}
          </div>
          <div className="space-y-6">
            {col3.map((item, i) => (
              <TestimonialCard
                key={item.handle}
                item={item}
                index={i + col1.length + col2.length}
              />
            ))}
          </div>
        </div>

        {/* Mobile: simple stack */}
        <div className="md:hidden space-y-4">
          {rest.map((item, i) => (
            <TestimonialCard key={item.handle} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;

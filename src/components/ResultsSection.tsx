"use client";

import { motion } from "framer-motion";
import { ExternalLink, Quote, TrendingUp, Users, DollarSign, MessageSquare } from "lucide-react";
import { reveal, revealWithDelay } from "@/lib/motion";

/*
  IMPORTANT: Replace placeholder entries with real member stories.
  To add a new story, add an object to the `results` array.
  - Set `featured: true` on the best one (only one should be featured).
  - `quote` is optional — cards without quotes show metric-only layout.
  - `link` should point to their real Threads profile.
  - `metric.icon` options: "trending" | "users" | "dollar" | "messages"
*/

interface Result {
  handle: string;
  name: string;
  niche: string;
  quote?: string;
  timeframe: string;
  metric: {
    label: string;
    before: string;
    after: string;
    icon: "trending" | "users" | "dollar" | "messages";
  };
  link: string;
  featured?: boolean;
}

const results: Result[] = [
  {
    handle: "@getdigitalwithlexie",
    name: "Lexie",
    niche: "Digital Marketing",
    quote: "I built Threads to Millions because I was tired of seeing creators burn out on platforms that don't reward real connection. This system is what I wish I had when I started.",
    timeframe: "4 months",
    metric: {
      label: "Monthly Revenue",
      before: "$0",
      after: "5-figure/mo",
      icon: "dollar",
    },
    link: "https://www.threads.net/@getdigitalwithlexie",
    featured: true,
  },
  {
    handle: "@member_handle",
    name: "Coaching Client",
    niche: "Life Coaching",
    quote: "I replaced cold DMs with inbound leads. People come to me now because they read my threads and already trust me.",
    timeframe: "6 weeks",
    metric: {
      label: "Clients Booked",
      before: "0 from Threads",
      after: "8 inbound clients",
      icon: "messages",
    },
    link: "#",
  },
  {
    handle: "@member_handle",
    name: "Course Creator",
    niche: "Online Education",
    timeframe: "3 months",
    metric: {
      label: "Followers",
      before: "214",
      after: "11,200+",
      icon: "users",
    },
    link: "#",
  },
  {
    handle: "@member_handle",
    name: "Service Provider",
    niche: "Freelance Design",
    timeframe: "8 weeks",
    metric: {
      label: "Engagement Rate",
      before: "0.3%",
      after: "4.8%",
      icon: "trending",
    },
    link: "#",
  },
  {
    handle: "@member_handle",
    name: "Digital Product Seller",
    niche: "Templates & Resources",
    quote: "Made my first sale 11 days in. The downthread method in Module 3 is no joke.",
    timeframe: "30 days",
    metric: {
      label: "First Product Revenue",
      before: "$0",
      after: "$4,200",
      icon: "dollar",
    },
    link: "#",
  },
];

const iconMap = {
  trending: TrendingUp,
  users: Users,
  dollar: DollarSign,
  messages: MessageSquare,
};

function FeaturedCard({ item }: { item: Result }) {
  return (
    <motion.div
      {...revealWithDelay(0)}
      className="md:col-span-2 editorial-card flex flex-col md:flex-row gap-8"
    >
      {/* Left: Quote + Identity */}
      <div className="flex-1 flex flex-col">
        <Quote className="w-8 h-8 text-[var(--primary)] opacity-40 mb-4" />
        <blockquote className="text-lg md:text-xl font-display leading-relaxed text-[var(--foreground)] mb-6 flex-grow">
          &ldquo;{item.quote}&rdquo;
        </blockquote>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[var(--primary)] flex items-center justify-center text-white font-bold text-sm">
            {item.name.charAt(0)}
          </div>
          <div>
            <div className="font-semibold text-[var(--foreground)]">{item.name}</div>
            <div className="text-micro text-[var(--muted-foreground)]">{item.handle}</div>
          </div>
        </div>
      </div>

      {/* Right: Metrics */}
      <div className="md:w-64 md:border-l md:border-[var(--border)] md:pl-8 flex flex-col justify-center gap-6">
        <div>
          <div className="text-micro text-[var(--muted-foreground)] mb-1 uppercase tracking-wider">Before</div>
          <div className="font-mono text-xl text-[var(--foreground)]">{item.metric.before}</div>
        </div>
        <div className="w-full h-px bg-[var(--border)]" />
        <div>
          <div className="text-micro text-[var(--muted-foreground)] mb-1 uppercase tracking-wider">After {item.timeframe}</div>
          <div className="font-mono text-2xl font-semibold text-[var(--success)]">{item.metric.after}</div>
        </div>
        {item.link !== "#" && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-small font-semibold text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
          >
            View on Threads <ExternalLink size={14} />
          </a>
        )}
      </div>
    </motion.div>
  );
}

function ResultCard({ item, index }: { item: Result; index: number }) {
  const Icon = iconMap[item.metric.icon];

  return (
    <motion.div
      {...revealWithDelay(index * 0.06)}
      className="editorial-card flex flex-col"
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[var(--background)] border border-[var(--border)] flex items-center justify-center">
            <Icon size={16} className="text-[var(--primary)]" />
          </div>
          <div>
            <div className="font-semibold text-[var(--foreground)] text-sm">{item.name}</div>
            <div className="text-micro text-[var(--muted-foreground)]">{item.niche}</div>
          </div>
        </div>
        <div className="bg-[var(--background)] px-2.5 py-1 rounded-full text-micro text-[var(--muted-foreground)] border border-[var(--border)] whitespace-nowrap">
          {item.timeframe}
        </div>
      </div>

      {/* Quote (if present) */}
      {item.quote && (
        <p className="text-sm text-[var(--foreground)] italic leading-relaxed mb-5 border-l-2 border-[var(--primary)] pl-4 opacity-90">
          &ldquo;{item.quote}&rdquo;
        </p>
      )}

      {/* Before/After */}
      <div className="mt-auto">
        <div className="text-micro text-[var(--muted-foreground)] uppercase tracking-wider mb-2">{item.metric.label}</div>
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-sm text-[var(--muted-foreground)] line-through">{item.metric.before}</span>
          <span className="text-[var(--muted-foreground)]">&rarr;</span>
          <span className="font-mono text-lg font-semibold text-[var(--success)]">{item.metric.after}</span>
        </div>
      </div>

      {/* Verification */}
      {item.link !== "#" && (
        <div className="pt-4 mt-4 border-t border-[var(--border)]">
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-small font-semibold text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
          >
            View proof thread <ExternalLink size={14} />
          </a>
        </div>
      )}
    </motion.div>
  );
}

export const ResultsSection = () => {
  const featured = results.find((r) => r.featured);
  const rest = results.filter((r) => !r.featured);

  return (
    <section id="results" className="py-24 md:py-32 bg-[var(--background)]">
      <div className="editorial-container">
        {/* Header */}
        <motion.div {...reveal} className="mb-16 max-w-2xl">
          <h2 className="text-h2 mb-4">Real Members. Real Timelines. Real Outcomes.</h2>
          <p className="text-body-l text-[var(--muted-foreground)]">
            Proof from creators and businesses executing the system.
          </p>
        </motion.div>

        {/* Featured + Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Featured Card (spans 2 cols on desktop) */}
          {featured && <FeaturedCard item={featured} />}

          {/* Remaining cards */}
          {rest.map((item, i) => (
            <ResultCard key={item.name + item.niche} item={item} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;

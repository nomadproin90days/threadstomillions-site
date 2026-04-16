"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/blog-data";
import { reveal, revealWithDelay } from "@/lib/motion";

const featuredSlugs = [
  "threads-monetization-requirements",
  "can-you-make-money",
  "10-proven-hooks",
  "threads-app-guide-2026",
];

export const FeaturedArticlesSection = () => {
  const posts = getAllPosts();
  const featured = featuredSlugs
    .map((slug) => posts.find((post) => post.slug === slug))
    .filter((post): post is NonNullable<typeof post> => Boolean(post));

  const lead = featured[0];
  const supporting = featured.slice(1);

  if (!lead) return null;

  return (
    <section className="py-24 md:py-28 border-y border-[hsl(var(--border))]">
      <div className="editorial-container">
        <motion.div {...reveal} className="mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.2em] text-[hsl(var(--primary))] font-semibold mb-6">
            <span className="w-8 h-px bg-[hsl(var(--primary))]" />
            Free guides
          </span>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] mb-4">
            LEARN THE METHOD BEFORE YOU <span className="accent-italic">Buy It</span>
          </h2>
          <p className="text-[18px] text-[hsl(var(--text)/0.4)] max-w-2xl">
            Read how Threads monetization actually works. No gate, no opt-in.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-6">
          {/* Lead article */}
          <motion.article {...revealWithDelay(0.05)}>
            <Link href={`/blog/${lead.slug}`} className="group block glass-card p-8 md:p-10 h-full hover:border-[hsl(var(--primary)/0.3)] transition-all duration-500">
              <div className="flex items-center gap-3 text-[12px] uppercase tracking-[0.16em] text-[hsl(var(--muted-text))] mb-6">
                <span className="text-[hsl(var(--primary))]">{lead.category}</span>
                <span className="opacity-30">/</span>
                <span>{lead.readTime}</span>
              </div>
              <h3 className="text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.05] mb-5 group-hover:text-[hsl(var(--primary))] transition-colors" style={{ textTransform: "none", fontFamily: "'Playfair Display', serif", letterSpacing: "-0.01em" }}>
                {lead.title}
              </h3>
              <p className="text-[16px] text-[hsl(var(--text)/0.5)] mb-8 max-w-xl">
                {lead.description}
              </p>
              <span className="inline-flex items-center gap-2 text-[15px] font-semibold text-[hsl(var(--primary))] group-hover:gap-3 transition-all">
                Read article
                <ArrowRight size={16} />
              </span>
            </Link>
          </motion.article>

          {/* Supporting articles */}
          <div className="space-y-4">
            {supporting.map((post, index) => (
              <motion.article key={post.slug} {...revealWithDelay(0.1 + index * 0.06)}>
                <Link href={`/blog/${post.slug}`} className="group block glass-card p-6 hover:border-[hsl(var(--primary)/0.3)] transition-all duration-500">
                  <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.16em] text-[hsl(var(--muted-text))] mb-3">
                    <span className="text-[hsl(var(--primary))]">{post.category}</span>
                    <span className="opacity-30">/</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-[18px] leading-snug mb-2 group-hover:text-[hsl(var(--primary))] transition-colors" style={{ textTransform: "none", fontFamily: "'Playfair Display', serif" }}>
                    {post.title}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-[hsl(var(--muted-text))] group-hover:text-[hsl(var(--primary))] transition-colors">
                    Read
                    <ArrowRight size={14} />
                  </span>
                </Link>
              </motion.article>
            ))}

            <motion.div {...revealWithDelay(0.3)}>
              <Link href="/blog" className="group flex items-center justify-between glass-card p-6 hover:border-[hsl(var(--primary)/0.3)] transition-all duration-500">
                <div>
                  <div className="text-[15px] font-semibold text-[hsl(var(--text))] mb-1">Browse all {posts.length} articles</div>
                  <div className="text-[13px] text-[hsl(var(--muted-text))]">Guides, playbooks, strategy</div>
                </div>
                <ArrowRight size={18} className="text-[hsl(var(--muted-text))] group-hover:text-[hsl(var(--primary))] transition-colors" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticlesSection;

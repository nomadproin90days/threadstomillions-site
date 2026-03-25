import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getAllPosts, BlogPost } from '@/lib/blog-data';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Expert guides, strategies, and insights on growing and monetizing your Threads audience.',
  alternates: {
    canonical: 'https://threadstomillions.com/blog',
  },
  openGraph: {
    title: 'Threads to Millions Blog',
    description: 'Master Threads growth and monetization with our expert guides.',
    url: 'https://threadstomillions.com/blog',
    siteName: 'Threads to Millions',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Threads to Millions Blog',
    description: 'Master Threads growth and monetization with our expert guides.',
  },
};

const categoryOrder = ['Getting Started', 'Growth', 'Content Strategy', 'Monetization', 'Strategy', 'Platform Strategy'];

function groupByCategory(posts: BlogPost[]): Map<string, BlogPost[]> {
  const map = new Map<string, BlogPost[]>();
  for (const cat of categoryOrder) {
    const filtered = posts.filter(p => p.category === cat);
    if (filtered.length > 0) map.set(cat, filtered);
  }
  for (const post of posts) {
    if (!categoryOrder.includes(post.category)) {
      const existing = map.get(post.category) || [];
      existing.push(post);
      map.set(post.category, existing);
    }
  }
  return map;
}

export default function BlogIndex() {
  const posts = getAllPosts();
  const featured = posts[0];
  const grouped = groupByCategory(posts);

  return (
    <main className="min-h-screen bg-[hsl(var(--bg))]">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-10 md:pt-44 md:pb-14">
        <div className="editorial-container">
          <div className="max-w-3xl">
            <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] text-[hsl(var(--text))] mb-4">
              GUIDES & <span className="accent-italic">Playbooks</span>
            </h1>
            <p className="text-[18px] text-[hsl(var(--text)/0.5)] leading-relaxed max-w-xl">
              Everything Lexie teaches about growing and monetizing on Threads, published free and in full.
            </p>
          </div>
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section className="pb-12 md:pb-16">
          <div className="editorial-container">
            <Link href={`/blog/${featured.slug}`} className="group block">
              <div className="glass-card p-8 md:p-12 hover:border-[hsl(var(--primary)/0.3)] transition-all duration-500">
                <div className="flex items-center gap-3 text-[12px] uppercase tracking-[0.16em] text-[hsl(var(--muted-text))] mb-6">
                  <span className="text-[hsl(var(--primary))]">{featured.category}</span>
                  <span className="opacity-30">/</span>
                  <span>{featured.readTime}</span>
                </div>
                <h2 className="text-[clamp(1.5rem,3.5vw,3rem)] leading-[1.05] mb-4 group-hover:text-[hsl(var(--primary))] transition-colors" style={{ textTransform: "none", fontFamily: "'Playfair Display', serif" }}>
                  {featured.title}
                </h2>
                <p className="text-[hsl(var(--text)/0.5)] text-[17px] max-w-2xl mb-6">
                  {featured.description}
                </p>
                <span className="inline-flex items-center gap-2 text-[15px] font-semibold text-[hsl(var(--primary))] group-hover:gap-3 transition-all">
                  Read article
                  <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Category sections */}
      {Array.from(grouped.entries()).map(([category, categoryPosts]) => (
        <section key={category} className="pb-12 md:pb-16">
          <div className="editorial-container">
            <h2 className="text-[12px] uppercase tracking-[0.2em] text-[hsl(var(--muted-text))] font-semibold mb-6 pb-3 border-b border-[hsl(var(--border))]">
              {category}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
              {categoryPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                  <article>
                    <div className="flex items-center gap-3 text-[12px] text-[hsl(var(--muted-text))] mb-3">
                      <span>{post.readTime}</span>
                      <span className="opacity-30">|</span>
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                      </time>
                    </div>
                    <h3 className="text-[20px] leading-snug mb-2 text-[hsl(var(--text))] group-hover:text-[hsl(var(--primary))] transition-colors" style={{ textTransform: "none", fontFamily: "'Playfair Display', serif" }}>
                      {post.title}
                    </h3>
                    <p className="text-[14px] text-[hsl(var(--text)/0.4)] line-clamp-2">
                      {post.description}
                    </p>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </main>
  );
}

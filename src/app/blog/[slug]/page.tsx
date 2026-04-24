import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getAllSlugs, getAllPosts, getPostBySlug } from '@/lib/blog-data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AffiliateCTA from '@/components/AffiliateCTA';
import BlogFAQSection from '@/components/BlogFAQSection';

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://threadstomillions.com/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.updatedDate ?? post.date,
      authors: ['Lexie (@getdigitalwithlexie)'],
      url: `https://threadstomillions.com/blog/${slug}`,
      siteName: 'Threads to Millions',
      images: [{ url: 'https://threadstomillions.com/og-image-v6.jpg', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

function getRelatedPosts(currentSlug: string, currentCategory: string) {
  const allPosts = getAllPosts();
  const sameCategory = allPosts.filter(p => p.category === currentCategory && p.slug !== currentSlug);
  const others = allPosts.filter(p => p.category !== currentCategory && p.slug !== currentSlug);
  return [...sameCategory, ...others].slice(0, 3);
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const related = getRelatedPosts(slug, post.category);

  const faqJsonLd = post.faqSchema?.length ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqSchema.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  } : null;

  const howToJsonLd = post.howToSteps?.length ? {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: post.title,
    description: post.description,
    step: post.howToSteps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
  } : null;

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://threadstomillions.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://threadstomillions.com/blog' },
      { '@type': 'ListItem', position: 3, name: post.title },
    ],
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updatedDate ?? post.date,
    author: {
      '@type': 'Person',
      name: 'Lexie',
      url: 'https://www.threads.net/@getdigitalwithlexie',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Threads to Millions',
      url: 'https://threadstomillions.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://threadstomillions.com/og-image-v6.jpg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://threadstomillions.com/blog/${slug}`,
    },
    image: 'https://threadstomillions.com/og-image-v6.jpg',
    articleSection: post.category,
    keywords: post.keywords.join(', '),
    wordCount: post.content.split(/\s+/).length,
  };

  return (
    <main className="min-h-screen bg-[hsl(var(--bg))] text-[hsl(var(--text))]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      {howToJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
        />
      )}
      <Navbar />

      <article className="pt-32 pb-16 md:pt-44 md:pb-24">
        <header className="editorial-container mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-[12px] uppercase tracking-[0.16em] text-[hsl(var(--muted-text))] mb-6">
              <Link href="/blog" className="hover:text-[hsl(var(--text))] transition-colors">Blog</Link>
              <span className="opacity-30">/</span>
              <span className="text-[hsl(var(--primary))]">{post.category}</span>
              <span className="opacity-30">/</span>
              <span>{post.readTime}</span>
            </div>

            <h1 className="text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.1] tracking-[-0.01em] text-[hsl(var(--text))] mb-6" style={{ textTransform: "none", fontFamily: "'Playfair Display', serif" }}>
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-[14px] text-[hsl(var(--muted-text))]">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
              <span className="opacity-30">|</span>
              <span>By Lexie</span>
            </div>
          </div>
        </header>

        <div className="reading-container">
          {(() => {
          const paragraphs = post.content.split('\n\n');
          const splitIndex = Math.floor(paragraphs.length * 0.4);
          const firstHalf = paragraphs.slice(0, splitIndex).join('\n\n');
          const secondHalf = paragraphs.slice(splitIndex).join('\n\n');
          return (
            <>
              <div className="prose prose-lg max-w-none prose-trust prose-headings:font-heading prose-headings:tracking-tight prose-a:text-[hsl(var(--primary))] hover:prose-a:text-[hsl(var(--primary-hover))] prose-strong:text-[hsl(var(--text))]">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {firstHalf}
                </ReactMarkdown>
              </div>

              <AffiliateCTA
                variant="inline"
                headline={post.inlineCta?.headline}
                body={post.inlineCta?.body}
                buttonText={post.inlineCta?.buttonText}
              />

              <div className="prose prose-lg max-w-none prose-trust prose-headings:font-heading prose-headings:tracking-tight prose-a:text-[hsl(var(--primary))] hover:prose-a:text-[hsl(var(--primary-hover))] prose-strong:text-[hsl(var(--text))]">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {secondHalf}
                </ReactMarkdown>
              </div>
            </>
          );
        })()}

          {post.faqSchema && post.faqSchema.length > 0 && (
            <BlogFAQSection faqs={post.faqSchema} />
          )}

          <AffiliateCTA variant="end" />
        </div>
      </article>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="py-16 md:py-20 border-t border-[hsl(var(--border))]">
          <div className="editorial-container">
            <h2 className="text-[12px] uppercase tracking-[0.2em] text-[hsl(var(--muted-text))] font-semibold mb-8">
              Keep reading
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {related.map((relPost) => (
                <Link key={relPost.slug} href={`/blog/${relPost.slug}`} className="group block">
                  <article>
                    <div className="flex items-center gap-3 text-[12px] text-[hsl(var(--muted-text))] mb-3">
                      <span className="text-[hsl(var(--primary))]">{relPost.category}</span>
                      <span className="opacity-30">|</span>
                      <span>{relPost.readTime}</span>
                    </div>
                    <h3 className="text-[20px] leading-snug mb-2 text-[hsl(var(--text))] group-hover:text-[hsl(var(--primary))] transition-colors" style={{ textTransform: "none", fontFamily: "'Playfair Display', serif" }}>
                      {relPost.title}
                    </h3>
                    <p className="text-[14px] text-[hsl(var(--text)/0.4)] line-clamp-2">
                      {relPost.description}
                    </p>
                  </article>
                </Link>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-[hsl(var(--border))]">
              <Link href="/blog" className="inline-flex items-center gap-2 text-[15px] font-semibold text-[hsl(var(--text))] hover:text-[hsl(var(--primary))] transition-colors">
                <ArrowLeft size={16} />
                All articles
              </Link>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}

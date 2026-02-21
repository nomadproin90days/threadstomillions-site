import Link from 'next/link';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getAllPosts } from '@/lib/blog-data';

export const metadata: Metadata = {
  title: 'Blog | Threads to Millions',
  description: 'Expert guides, strategies, and insights on growing and monetizing your Threads audience.',
  openGraph: {
    title: 'Threads to Millions Blog',
    description: 'Master Threads growth and monetization with our expert guides.',
    url: 'https://threadstomillions.com/blog',
    siteName: 'Threads to Millions',
    locale: 'en_US',
    type: 'website',
  },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Blog Hero */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden">
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6 uppercase tracking-tight">
              Threads Growth <span className="text-primary">Masterclass</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Actionable strategies, deep dives, and proven frameworks to help you go from zero to millions on Threads.
            </p>
          </div>
        </div>
        
        {/* Background gradient effect */}
        <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-primary/5 via-background to-background -z-10" />
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block h-full">
                <article className="h-full bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors duration-300 flex flex-col">
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-xs font-medium text-primary mb-4 uppercase tracking-wider">
                      <span>{post.category}</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground">{post.readTime}</span>
                    </div>
                    
                    <h2 className="text-2xl font-heading font-bold text-foreground mb-4 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-muted-foreground mb-6 line-clamp-3 flex-grow">
                      {post.description}
                    </p>
                    
                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-border/50">
                      <span className="text-sm text-muted-foreground">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      <span className="text-sm font-medium text-primary group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        Read Article 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

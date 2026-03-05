"use client";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import VideoShowcase from '../components/VideoShowcase';
import StrategySection from '../components/StrategySection';
import StorySequenceSection from '../components/StorySequenceSection';
import TestimonialsSection from '../components/TestimonialsSection';
import AboutCreator from '../components/AboutCreator';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import SkoolTrustRibbon from '../components/SkoolTrustRibbon';
import { blogPosts } from '@/lib/blog-data';

const Home = () => {
  // Select cornerstone content for the homepage
  const cornerstoneSlugs = [
    'four-content-pillars',
    'can-you-make-money',
    '10-proven-hooks'
  ];
  
  const featuredPosts = blogPosts.filter(post => cornerstoneSlugs.includes(post.slug))
    .sort((a, b) => cornerstoneSlugs.indexOf(a.slug) - cornerstoneSlugs.indexOf(b.slug));

  const displayPosts = featuredPosts.length >= 1 ? featuredPosts : blogPosts.slice(0, 3);

  return (
    <main className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <Navbar />
      
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <VideoShowcase />
      <StrategySection />
      <StorySequenceSection />
      <TestimonialsSection />
      <AboutCreator />
      <FAQSection />
      
      {/* Latest Blog Posts Section (Authority & Trust Booster) */}
      <section className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Start Here: <span className="text-primary">The Core System</span></h2>
              <p className="text-slate-400 max-w-xl">
                Master the fundamentals of growth and monetization. These lessons have helped thousands of creators build a profitable Threads presence.
              </p>
            </div>
            <Link href="/blog" className="text-primary hover:text-primary/80 font-medium flex items-center gap-2 transition-colors">
              View Full Curriculum <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {displayPosts.map((post, index) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block h-full">
                <div className="h-full p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-primary/50 transition-all duration-300 flex flex-col relative overflow-hidden">
                  {index === 0 && (
                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 uppercase tracking-tighter transform rotate-0 rounded-bl-lg">
                      Most Popular
                    </div>
                  )}
                  <div className="text-sm text-primary mb-4 font-medium">{new Date(post.date).toLocaleDateString()}</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {post.description}
                  </p>
                  <span className="text-sm font-medium text-slate-300 group-hover:text-white flex items-center gap-2 mt-auto">
                    Read Lesson <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
      <SkoolTrustRibbon />
    </main>
  );
};

export default Home;

"use client";

import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import WhoIsThisFor from '../components/WhoIsThisFor';
import ProblemSection from '../components/ProblemSection';
import RoadmapSection from '../components/RoadmapSection';
import ResultsSection from '../components/ResultsSection';
import VideoShowcase from '../components/VideoShowcase';
import AboutCreator from '../components/AboutCreator';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import SkoolTrustRibbon from '../components/SkoolTrustRibbon';

const Home = () => {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <Navbar />
      
      <HeroSection />
      <WhoIsThisFor />
      <ProblemSection />
      <RoadmapSection />
      <ResultsSection />
      <VideoShowcase />
      <AboutCreator />
      <FAQSection />
      
      <CTASection />
      <Footer />
      <SkoolTrustRibbon />
    </main>
  );
};

export default Home;

"use client";

import Navbar from '../components/Navbar';
import { TrustStrip } from '../components/TrustStrip';
import HeroSection from '../components/HeroSection';
import { ProofRow } from '../components/ProofRow';
import WhoIsThisFor from '../components/WhoIsThisFor';
import MethodSection from '../components/MethodSection';
import CurriculumSection from '../components/CurriculumSection';
import ResultsSection from '../components/ResultsSection';
import AboutCreator from '../components/AboutCreator';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import { StickyMobileCTA } from '../components/StickyMobileCTA';

const Home = () => {
  return (
    <main className="min-h-screen bg-[var(--background)] selection:bg-[var(--primary)] selection:text-white">
      <TrustStrip />
      <Navbar />

      <div className="space-y-0">
        <HeroSection />
        <ProofRow />
        <WhoIsThisFor />
        <MethodSection />
        <CurriculumSection />
        <ResultsSection />
        <AboutCreator />
        <FAQSection />
        <CTASection />
      </div>

      <Footer />
      <StickyMobileCTA />
    </main>
  );
};

export default Home;

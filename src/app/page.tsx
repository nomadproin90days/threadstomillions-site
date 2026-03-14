import Navbar from '../components/Navbar';
import { TrustStrip } from '../components/TrustStrip';
import HeroSection from '../components/HeroSection';
import { ProofRow } from '../components/ProofRow';
import FeaturedArticlesSection from '../components/FeaturedArticlesSection';
import WhoIsThisFor from '../components/WhoIsThisFor';
import MethodSection from '../components/MethodSection';
import ResultsSection from '../components/ResultsSection';
import CurriculumSection from '../components/CurriculumSection';
import AboutCreator from '../components/AboutCreator';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import { StickyMobileCTA } from '../components/StickyMobileCTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-[hsl(var(--bg))] selection:bg-[hsl(var(--primary)/0.3)] selection:text-white">
      <TrustStrip />
      <Navbar />

      <div className="space-y-0">
        <HeroSection />
        <ProofRow />
        <WhoIsThisFor />
        <MethodSection />
        <ResultsSection />
        <CurriculumSection />
        <FeaturedArticlesSection />
        <AboutCreator />
        <FAQSection />
        <CTASection />
      </div>

      <Footer />
      <StickyMobileCTA />
    </main>
  );
}

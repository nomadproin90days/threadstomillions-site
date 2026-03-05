import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProblemSection from '../components/ProblemSection';
import StrategySection from '../components/StrategySection';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FounderSection from '../components/FounderSection';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import StickyMobileCTA from '../components/StickyMobileCTA';

const Home = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <StrategySection />
      <FeaturesSection />
      <TestimonialsSection />
      <FounderSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
};

export default Home;

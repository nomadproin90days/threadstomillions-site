import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import FeaturesSection from '../components/FeaturesSection'; // This was previously WhatsIncludedSection
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection /> {/* Renamed from WhatsIncludedSection to FeaturesSection */}
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Home;

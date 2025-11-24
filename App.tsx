
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturesSection from './components/FeaturesSection';
import AboutSection from './components/AboutSection';
import HowItWorksSection from './components/HowItWorksSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import ConnectSection from './components/ConnectSection';
import Footer from './components/Footer';
import LiveDemoModal from './components/LiveDemoModal';

const App: React.FC = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const openDemo = () => setIsDemoOpen(true);
  const closeDemo = () => setIsDemoOpen(false);

  return (
    <div className="min-h-screen bg-[#F8F9FC] font-sans">
      
      {/* Page 1: Hero Section */}
      <div className="relative bg-white bg-soft-gradient min-h-screen flex flex-col">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full flex-grow flex flex-col">
          <Header />
          <main className="flex-grow flex items-center justify-center py-8 lg:py-0">
            <Hero onOpenDemo={openDemo} />
          </main>
        </div>
      </div>

      {/* Page 2: Features Section */}
      <div className="w-full bg-[#F8F9FC]">
        <FeaturesSection />
      </div>

      {/* Page 3: About Section */}
      <AboutSection />

      {/* Page 4: How It Works Section */}
      <HowItWorksSection />

      {/* Page 5: Case Studies Section */}
      <CaseStudiesSection />

      {/* Page 6: Testimonials Section */}
      <TestimonialsSection />

      {/* Page 7: Pricing Section */}
      <PricingSection />

      {/* Page 8: FAQ Section */}
      <FAQSection />

      {/* Page 9: CTA Section */}
      <CTASection />

      {/* Page 10: Connect Section */}
      <ConnectSection />

      {/* Page 11: Footer */}
      <Footer />

      {isDemoOpen && <LiveDemoModal onClose={closeDemo} />}
    </div>
  );
};

export default App;

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
    <div className="min-h-screen bg-[#F8F9FC] font-sans text-base antialiased">
      
      {/* Page 1: Hero Section */}
      <div id="home" className="relative bg-white bg-soft-gradient min-h-screen flex flex-col">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full flex-grow flex flex-col">
          <Header />
          <main className="flex-grow flex items-center justify-center py-8 lg:py-0">
            <Hero onOpenDemo={openDemo} />
          </main>
        </div>
      </div>

      {/* Page 2: Features Section */}
      <div id="features" className="w-full bg-[#F8F9FC]">
        <FeaturesSection />
      </div>

      {/* Page 3: About Section */}
      <div id="about">
        <AboutSection />
      </div>

      {/* Page 4: How It Works Section */}
      <div id="how-it-works">
        <HowItWorksSection />
      </div>

      {/* Page 5: Case Studies Section */}
      <div id="case-studies">
        <CaseStudiesSection />
      </div>

      {/* Page 6: Testimonials Section */}
      <div id="testimonials">
        <TestimonialsSection />
      </div>

      {/* Page 7: Pricing Section */}
      <div id="pricing">
        <PricingSection />
      </div>

      {/* Page 8: FAQ Section */}
      <div id="faq">
        <FAQSection />
      </div>

      {/* Page 9: CTA Section */}
      <div id="cta">
        <CTASection />
      </div>

      {/* Page 10: Connect Section */}
      <div id="contact">
        <ConnectSection />
      </div>

      {/* Page 11: Footer */}
      <Footer />

      {isDemoOpen && <LiveDemoModal onClose={closeDemo} />}
    </div>
  );
};

export default App;
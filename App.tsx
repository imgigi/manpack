import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LiveDemoModal from './components/LiveDemoModal';

const App: React.FC = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const openDemo = () => setIsDemoOpen(true);
  const closeDemo = () => setIsDemoOpen(false);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-white via-purple-50 to-purple-100">
      <div className="absolute inset-0 z-0 bg-blur-gradient pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <main className="pt-8 pb-16">
          <Hero onOpenDemo={openDemo} />
        </main>
      </div>

      {isDemoOpen && <LiveDemoModal onClose={closeDemo} />}
    </div>
  );
};

export default App;
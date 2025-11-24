
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const PricingSection: React.FC = () => {
  const features = [
    "Up to 15,000 calls / month",
    "Multiple voice profiles & accents",
    "CRM integrations",
    "Real-time transcript insights",
    "Priority customer support",
    "Dedicated onboarding session"
  ];

  return (
    <section className="w-full py-24 px-6 sm:px-8 lg:px-12 bg-[#0B0F17] text-white">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block bg-white text-black px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            Pricing
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            The Best AI Calling Automation, at the right price
          </h2>
        </div>

        {/* Pricing Card */}
        <div className="bg-white text-black rounded-[2.5rem] p-8 md:p-12 lg:p-16 max-w-5xl shadow-2xl">
          <div className="flex flex-col h-full">
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl font-medium text-gray-600">Premium</span>
              <span className="bg-[#6200EA] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Recommended
              </span>
            </div>

            <h3 className="text-4xl md:text-5xl font-bold mb-12">Custom Pricing</h3>

            <div className="space-y-6 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-black fill-black text-white shrink-0" />
                  <span className="text-lg md:text-xl text-gray-800 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <button className="w-full bg-[#6200EA] hover:bg-[#5000c2] text-white font-bold text-lg py-5 rounded-2xl transition-all shadow-lg hover:shadow-purple-500/25 active:scale-[0.99]">
              Get in Touch
            </button>

          </div>
        </div>

      </div>
    </section>
  );
};

export default PricingSection;

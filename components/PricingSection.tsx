
import React from 'react';
import { Check } from 'lucide-react';

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
      <div className="max-w-[1000px] mx-auto">
        
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block bg-white text-black px-5 py-1.5 rounded-full text-sm font-bold mb-6">
            Pricing
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            The Best AI Calling Automation, at the right price
          </h2>
        </div>

        {/* Pricing Card */}
        <div className="bg-white text-black rounded-[2rem] p-8 md:p-12 shadow-2xl w-full">
          <div className="flex flex-col">
            
            {/* Card Header Row */}
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xl font-semibold text-gray-900">Premium</span>
              <span className="bg-[#6200EA] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Recommand
              </span>
            </div>

            <h3 className="text-4xl md:text-5xl font-bold mb-10 text-black mt-2">Custom Pricing</h3>

            {/* Features List */}
            <div className="space-y-5 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-lg text-gray-900 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Button */}
            <button className="w-full bg-[#6200EA] hover:bg-[#5000c2] text-white font-bold text-lg py-4 rounded-xl transition-all shadow-lg hover:shadow-purple-500/25 active:scale-[0.99]">
              Get in Touch
            </button>

          </div>
        </div>

      </div>
    </section>
  );
};

export default PricingSection;

import React from 'react';
import { BarChart3, Clock, Globe, Headphones, Settings2 } from 'lucide-react';

const FeatureCard = ({ icon, title, description, iconBgClass }: { icon: React.ReactNode, title: string, description: string, iconBgClass: string }) => (
  <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col items-start h-full group">
    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${iconBgClass} group-hover:scale-110 transition-transform duration-300`}>
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">{title}</h3>
    <p className="text-gray-600 leading-relaxed text-[15px] font-medium opacity-90">{description}</p>
  </div>
);

const StatItem = ({ value, label, showDivider }: { value: string, label: string, showDivider?: boolean }) => (
  <div className={`flex flex-col items-center justify-center flex-1 px-4 relative ${showDivider ? 'md:border-r md:border-gray-300' : ''}`}>
    <div className="text-5xl md:text-6xl font-bold text-black mb-3 tracking-tight">{value}</div>
    <div className="text-gray-500 font-medium text-center text-lg">{label}</div>
  </div>
);

const FeaturesSection: React.FC = () => {
  return (
    <section className="w-full py-24 px-6 sm:px-8 lg:px-12 max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="text-center mb-20">
        <div className="inline-block bg-white border border-gray-200 rounded-full px-5 py-2 mb-8 shadow-sm">
          <span className="text-sm font-semibold text-gray-800 tracking-wide">Introducing Manpack</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 tracking-tight leading-[1.1]">
          Cold Calling is tough.
        </h2>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black tracking-tight leading-[1.1]">
          We'll handle the rejections while you handle the sale
        </h2>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
        <FeatureCard
          icon={<span className="text-2xl">🇸🇬</span>}
          iconBgClass="bg-red-50"
          title="Singapore Accent"
          description="Authentic Singapore English for clear, friendly, trusted calls."
        />
        <FeatureCard
          icon={<BarChart3 className="w-6 h-6 text-[#6200EA]" />}
          iconBgClass="bg-purple-50"
          title="Live Insights"
          description="Real-time analytics on connections, interest, and conversions."
        />
        <FeatureCard
          icon={<Clock className="w-6 h-6 text-[#6200EA]" />}
          iconBgClass="bg-purple-50"
          title="Call Scheduling"
          description="Responds 40% faster than the industry average"
        />
        <FeatureCard
          icon={<Globe className="w-6 h-6 text-[#6200EA]" />}
          iconBgClass="bg-purple-50"
          title="Human-Like Voice"
          description="Natural multi-language conversations with real tone and empathy"
        />
        <FeatureCard
          icon={<Headphones className="w-6 h-6 text-[#6200EA]" />}
          iconBgClass="bg-purple-50"
          title="Human Support"
          description="Our success team monitors performance daily to ensure real results"
        />
        <FeatureCard
          icon={<Settings2 className="w-6 h-6 text-[#6200EA]" />}
          iconBgClass="bg-purple-50"
          title="24/7 Customisability"
          description="Changes to scripts, voice speed of agents can be made at any time"
        />
      </div>

      {/* Stats Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-0">
        <StatItem value="300" label="calls per hour" showDivider />
        
        {/* Mobile Divider */}
        <div className="w-16 h-px bg-gray-200 md:hidden"></div>
        
        <StatItem value="8x" label="key decision-makers reached" showDivider />
        
        {/* Mobile Divider */}
        <div className="w-16 h-px bg-gray-200 md:hidden"></div>
        
        <StatItem value="3x" label="appointments booked" />
      </div>
    </section>
  );
};

export default FeaturesSection;

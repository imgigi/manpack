
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden py-16 lg:py-24">
      {/* Background Watermark Text */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full flex justify-center pointer-events-none select-none z-0">
        <span 
          className="text-[15vw] leading-none font-bold text-gray-100 tracking-tighter"
          style={{
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)'
          }}
        >
          ManPack
        </span>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 mt-12 lg:mt-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Column */}
          <div className="w-full lg:w-5/12">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-[3/4]">
              <img 
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000&auto=format&fit=crop" 
                alt="AI Agent working" 
                className="w-full h-full object-cover"
              />
              {/* Optional: subtle overlay/highlight if needed to match exact tone */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-50"></div>
            </div>
          </div>

          {/* Text Column */}
          <div className="w-full lg:w-7/12 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-[1.15] tracking-tight mb-8">
              Cold Calling is tough. We'll handle the rejections while you handle the sale
            </h2>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                ManPack is an AI voice agent trained to make cold calls that can qualify prospects, gauge interest, and set appointments.
              </p>
              <p>
                Cold calling is the hardest part of prospecting. But we don't do it enough. ManPack was built to help you grind through the numbers while you only talk to and close interested prospects.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;

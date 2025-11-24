
import React from 'react';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="w-full py-24 bg-white relative overflow-hidden flex flex-col items-center">
      
      {/* Container */}
      <div className="max-w-[1000px] w-full px-6 sm:px-8 relative z-10 flex flex-col items-center">
        
        {/* Quote Icon - Floating Left */}
        <div className="absolute top-0 left-4 md:-left-8 lg:-left-20 text-[#0088FF]">
           <svg width="80" height="80" viewBox="0 0 100 100" fill="currentColor" className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24">
             <path d="M30 60 H 10 V 30 H 40 V 60 C 40 75 30 85 15 85 V 75 C 25 75 30 70 30 60 Z M 80 60 H 60 V 30 H 90 V 60 C 90 75 80 85 65 85 V 75 C 75 75 80 70 80 60 Z" />
           </svg>
        </div>

        {/* Badge */}
        <div className="mb-12">
          <div className="bg-gray-100 border border-gray-200 rounded-full px-6 py-2 shadow-sm">
            <span className="text-sm font-semibold text-gray-800">What are our users saying?</span>
          </div>
        </div>

        {/* Testimonial Text */}
        <h3 className="text-2xl md:text-3xl lg:text-[2.5rem] font-medium text-gray-900 leading-normal md:leading-relaxed text-center mb-16 tracking-tight max-w-4xl mx-auto">
          "Working with ManPack.sg has been a great experience. Their AI cold-calling bot helped us reach more preschools efficiently while keeping a personal touch. The setup was smooth, and the team’s support was excellent. Highly recommend ManPack for smart, reliable outreach solutions."
        </h3>

        {/* Attribution */}
        <div className="flex flex-col items-center gap-3">
           <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center p-1 shadow-sm border border-gray-100">
              {/* Simulated Aktivate Logo */}
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center relative overflow-hidden">
                  <svg viewBox="0 0 100 100" className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" strokeWidth="8">
                     <path d="M 20 80 Q 50 20 80 80" strokeLinecap="round" />
                     <circle cx="80" cy="25" r="5" fill="currentColor" stroke="none" />
                  </svg>
              </div>
           </div>
           <div className="text-center">
              <div className="font-bold text-xl text-gray-900">Aktivate</div>
              <div className="text-gray-500 font-medium">Education</div>
           </div>
        </div>

      </div>

      {/* Decorative Wave Footer */}
      <div className="w-full h-32 md:h-48 mt-12 md:mt-20 overflow-hidden relative">
          <img 
            src="https://img.freepik.com/free-photo/abstract-smooth-purple-wavy-background_23-2148821696.jpg?t=st=1710182400~exp=1710186000~hmac=e2c0e8a7c2e3e5c9a4c8c7c9c8c7c9c8c7c9c8c7c9c8c7c9c8c7c9c8c7c9c8c7"
            className="w-full h-full object-cover object-bottom opacity-100 scale-125 md:scale-110 filter hue-rotate-15 contrast-125"
            style={{ maskImage: 'linear-gradient(to bottom, transparent, black 20%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%)' }}
            alt="Waveform"
          />
           {/* Fallback/Overlay to mimic the specific 3D ribbon look more closely if image fails or needs tuning */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white opacity-20 pointer-events-none"></div>
      </div>

    </section>
  );
};

export default TestimonialsSection;

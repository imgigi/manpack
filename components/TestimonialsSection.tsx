
import React from 'react';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="w-full pt-20 bg-white relative overflow-hidden flex flex-col items-center">
      
      {/* Container */}
      <div className="max-w-[1200px] w-full px-6 sm:px-8 relative z-10 flex flex-col items-center">
        
        {/* Quote Icon - Adjusted position */}
        <div className="absolute top-0 left-0 md:left-10 lg:left-32 text-[#0088FF] opacity-90">
           <svg width="80" height="80" viewBox="0 0 100 100" fill="currentColor" className="w-12 h-12 md:w-16 md:h-16">
             <path d="M30 60 H 10 V 30 H 40 V 60 C 40 75 30 85 15 85 V 75 C 25 75 30 70 30 60 Z M 80 60 H 60 V 30 H 90 V 60 C 90 75 80 85 65 85 V 75 C 75 75 80 70 80 60 Z" />
           </svg>
        </div>

        {/* Badge */}
        <div className="mb-10">
          <div className="bg-gray-50 border border-gray-200 rounded-full px-5 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <span className="text-sm font-semibold text-gray-800">What are our users saying?</span>
          </div>
        </div>

        {/* Testimonial Text - Tighter width for better readability */}
        <h3 className="text-xl md:text-2xl lg:text-[1.75rem] font-medium text-gray-900 leading-relaxed text-center mb-12 tracking-tight max-w-4xl mx-auto">
          "Working with ManPack.sg has been a great experience. Their AI cold-calling bot helped us reach more preschools efficiently while keeping a personal touch. The setup was smooth, and the team’s support was excellent. Highly recommend ManPack for smart, reliable outreach solutions."
        </h3>

        {/* Attribution */}
        <div className="flex flex-col items-center gap-2 mb-6">
           <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center p-1 shadow-sm border border-gray-100 mb-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center relative overflow-hidden">
                  <svg viewBox="0 0 100 100" className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" strokeWidth="8">
                     <path d="M 20 80 Q 50 20 80 80" strokeLinecap="round" />
                     <circle cx="80" cy="25" r="5" fill="currentColor" stroke="none" />
                  </svg>
              </div>
           </div>
           <div className="text-center">
              <div className="font-bold text-lg text-gray-900">Aktivate</div>
              <div className="text-gray-500 text-sm font-medium">Education</div>
           </div>
        </div>

      </div>

      {/* 3D Spline Footer - Full width, adjusted height/position */}
      <div className="w-full h-[200px] md:h-[300px] lg:h-[400px] relative pointer-events-none -mt-8 md:-mt-12">
          {/* @ts-ignore */}
          <spline-viewer 
             url="https://prod.spline.design/asllICi4AQGq6XQj/scene.splinecode"
             className="w-full h-full"
          />
      </div>

    </section>
  );
};

export default TestimonialsSection;
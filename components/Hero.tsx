import React from 'react';
import PhoneMockup from './PhoneMockup';

interface HeroProps {
  onOpenDemo: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 w-full">
      <div className="flex-1 max-w-2xl text-center lg:text-left z-10 pt-4 lg:pt-0">
        <p className="text-base sm:text-lg text-gray-600 font-medium mb-4">
          Powered by AI voices that sound Singaporean, built to win you more sales.
        </p>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-[1.1] tracking-tight mb-8">
          Singapore's first AI <br/>
          cold-calling solution <br/>
          with a local accent
        </h1>

        {/* Logos */}
        <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 mb-10 opacity-80 mix-blend-multiply">
           {/* PropNex */}
           <div className="h-8 flex items-center">
             <img src="https://upload.wikimedia.org/wikipedia/commons/1/1a/PropNex_Limited_Logo.png" alt="PropNex" className="h-full object-contain filter grayscale contrast-125" />
           </div>
           
           {/* Orange Figure */}
           <div className="h-10 w-10 text-orange-500">
             <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
               <circle cx="65" cy="25" r="10" />
               <path d="M25 85 Q 45 45 65 45 L 85 25 M 65 45 L 75 75" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
             </svg>
           </div>
           
           {/* Blue Logo */}
           <div className="h-8 w-8 bg-[#0055A4] p-1.5 rounded-sm flex items-center justify-center transform rotate-45">
              <span className="text-white font-bold text-lg transform -rotate-45">E</span>
           </div>
           
           {/* Prince's */}
            <div className="flex flex-col items-start leading-none opacity-80">
                 <div className="flex items-center gap-1">
                     <span className="text-[#D32F2F] text-lg">👑</span>
                     <span className="text-[#D32F2F] font-serif font-bold text-xl">Prince's</span>
                 </div>
                 <span className="text-[#D32F2F] text-[0.4rem] tracking-[0.2em] font-bold uppercase pl-1">Landscape Pte Ltd</span>
            </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
          <button 
            onClick={onOpenDemo}
            className="w-full sm:w-auto px-8 py-3 bg-[#6200EA] hover:bg-[#5000c2] text-white rounded-lg font-medium text-lg shadow-lg shadow-purple-500/20 transition-all hover:-translate-y-0.5"
          >
            Book a Demo
          </button>
          
          <button className="w-full sm:w-auto px-8 py-3 bg-[#374151] hover:bg-[#1f2937] text-white rounded-lg font-medium text-lg shadow-lg transition-all hover:-translate-y-0.5">
            Connect Us
          </button>
        </div>
      </div>

      <div className="flex-1 w-full flex justify-center lg:justify-end relative mt-8 lg:mt-0">
          {/* Subtle background blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-3xl pointer-events-none"></div>
          <PhoneMockup />
      </div>
    </div>
  );
};

export default Hero;
import React from 'react';
import PhoneMockup from './PhoneMockup';
import { Play } from 'lucide-react';

interface HeroProps {
  onOpenDemo: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 mt-8 lg:mt-16">
      <div className="flex-1 max-w-2xl text-center lg:text-left">
        <p className="text-base sm:text-lg font-medium text-gray-800 mb-4">
          Powered by AI voices that sound Singaporean, built to win you more sales.
        </p>
        
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-8">
          Singapore's first AI <br/>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">cold-calling</span> solution <br/>
          with a <span className="relative whitespace-nowrap">
            local accent
            <svg className="absolute -bottom-2 w-full h-3 text-primary/30 left-0" viewBox="0 0 100 10" preserveAspectRatio="none">
               <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
            </svg>
          </span>
        </h1>

        {/* Logos */}
        <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8 mb-10 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
           {/* Recreating simple CSS logos to avoid broken external links for generic companies */}
           <div className="flex items-center gap-2 font-bold text-xl text-blue-600">
              <div className="w-8 h-8 bg-blue-600 rotate-45"></div> PropNex
           </div>
           <div className="flex items-center gap-2 font-bold text-xl text-orange-500">
              <div className="w-4 h-8 bg-orange-500 rounded-t-full"></div> OrangeTee
           </div>
           <div className="flex items-center gap-2 font-bold text-xl text-red-700">
              <div className="w-8 h-8 border-4 border-red-700"></div> ERA
           </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
          <button 
            onClick={onOpenDemo}
            className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-xl font-semibold text-lg shadow-lg shadow-primary/30 transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2 group"
          >
            <Play className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" />
            Book a Demo
          </button>
          
          <button className="w-full sm:w-auto px-8 py-4 bg-gray-800 hover:bg-gray-900 text-white rounded-xl font-semibold text-lg shadow-lg transition-all transform hover:-translate-y-1 active:translate-y-0">
            Connect Us
          </button>
        </div>
      </div>

      <div className="flex-1 w-full flex justify-center lg:justify-end relative">
        {/* Background blobs for the phone */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 ml-20 mt-20"></div>
        
        <div className="relative z-10 transform lg:rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
            <PhoneMockup />
        </div>
      </div>
    </div>
  );
};

export default Hero;
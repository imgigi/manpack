
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CaseStudiesSection: React.FC = () => {
  return (
    <section className="w-full py-24 px-6 sm:px-8 lg:px-12 bg-[#F8F9FC] overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="inline-block bg-white border border-gray-200 rounded-full px-5 py-2 mb-8 shadow-sm">
              <span className="text-sm font-semibold text-gray-800 tracking-wide">Case Studies</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black tracking-tight leading-[1.1]">
              Plug In. Cut 80% of <br/>
              Manual Calling Costs.
            </h2>
          </div>
          
          <button className="bg-[#6200EA] hover:bg-[#5000c2] text-white px-8 py-3.5 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-purple-500/30 flex items-center gap-2 group">
            View All Cases
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Cards Display */}
        <div className="relative w-full flex justify-center items-center h-[600px] mt-10">
            
            {/* Left Blurred Card (Visual Only) */}
            <div className="hidden lg:block absolute left-[5%] xl:left-[10%] w-[400px] h-[520px] bg-gradient-to-b from-purple-200 to-indigo-200 rounded-[2.5rem] opacity-60 blur-[2px] transform scale-90 -translate-x-10 border border-white/50 shadow-xl overflow-hidden z-0">
                <div className="p-10 h-full flex flex-col text-gray-800 opacity-50">
                     <h3 className="text-3xl font-bold mb-8">Education and Training</h3>
                     <div className="space-y-4 mb-8">
                        <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-gray-500"></div><div className="h-4 bg-gray-500/50 rounded w-3/4"></div></div>
                        <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-gray-500"></div><div className="h-4 bg-gray-500/50 rounded w-1/2"></div></div>
                        <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-gray-500"></div><div className="h-4 bg-gray-500/50 rounded w-2/3"></div></div>
                     </div>
                     <div className="mt-auto w-full aspect-[4/3] bg-gray-300 rounded-3xl overflow-hidden grayscale opacity-70">
                         <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800" className="w-full h-full object-cover" alt="prev" />
                     </div>
                </div>
            </div>

            {/* Right Blurred Card (Visual Only) */}
            <div className="hidden lg:block absolute right-[5%] xl:right-[10%] w-[400px] h-[520px] bg-gray-200 rounded-[2.5rem] opacity-60 blur-[2px] transform scale-90 translate-x-10 border border-white/50 shadow-xl overflow-hidden z-0">
                 <div className="p-10 h-full flex flex-col text-gray-800 opacity-50">
                     <h3 className="text-3xl font-bold mb-8">Recruitment Agenc</h3>
                     <div className="space-y-4 mb-8">
                        <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-gray-500"></div><div className="h-4 bg-gray-500/50 rounded w-3/4"></div></div>
                        <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-gray-500"></div><div className="h-4 bg-gray-500/50 rounded w-1/2"></div></div>
                     </div>
                     <div className="mt-auto w-full aspect-[4/3] bg-gray-300 rounded-3xl overflow-hidden grayscale opacity-70">
                         <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800" className="w-full h-full object-cover" alt="next" />
                     </div>
                </div>
            </div>

            {/* Center Main Card */}
            <div className="relative w-full max-w-[480px] bg-gradient-to-b from-[#C084FC] to-[#1D4ED8] rounded-[2.5rem] p-8 md:p-12 shadow-[0_35px_60px_-15px_rgba(30,58,138,0.5)] z-10 transform transition-transform duration-300">
                <div className="flex flex-col h-full text-white">
                    <h3 className="text-3xl font-bold mb-8">Education and Training</h3>
                    
                    <ul className="space-y-4 mb-10">
                        <li className="flex items-start gap-3">
                            <span className="mt-2 w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></span>
                            <span className="font-semibold text-xl leading-snug">38% call success rate</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-2 w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></span>
                            <span className="font-semibold text-xl leading-snug">3× more calls launched</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-2 w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></span>
                            <span className="font-semibold text-xl leading-snug">70% less time spent on manual calling</span>
                        </li>
                    </ul>

                    <div className="mt-auto w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-lg border-2 border-white/10">
                        <img 
                            src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=800&auto=format&fit=crop" 
                            alt="Classroom with hands raised" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;

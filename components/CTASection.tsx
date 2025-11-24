
import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="w-full py-24 px-6 sm:px-8 lg:px-12 bg-[#F8F9FC]">
      <div className="max-w-[1400px] mx-auto bg-[#1E052E] rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row min-h-[500px] shadow-2xl relative">
        
        {/* Content Side */}
        <div className="flex-1 p-12 lg:p-20 flex flex-col justify-center relative z-10">
            {/* Subtle radial gradient behind text */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-purple-900/30 blur-[100px] rounded-full pointer-events-none"></div>

            <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-[1.1] tracking-wide">
              READY TO <br/> SCALE?
            </h2>
            <p className="text-purple-200/80 text-lg lg:text-xl max-w-md font-light mb-12 tracking-wide">
               Book your demo today and start converting leads on autopilot.
            </p>
            
            <button className="w-fit bg-white text-[#1E052E] hover:bg-purple-50 px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                Book a Demo
            </button>
        </div>

        {/* Image Side */}
        <div className="lg:w-[45%] relative min-h-[400px] lg:min-h-full">
           <img 
             src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?q=80&w=2670&auto=format&fit=crop" 
             alt="Professional Sales Agent" 
             className="absolute inset-0 w-full h-full object-cover object-center"
           />
           {/* Overlay to blend image with card on mobile or ensure text contrast if they overlap */}
           <div className="absolute inset-0 bg-gradient-to-t from-[#1E052E] via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-[#1E052E]/20 lg:to-[#1E052E] opacity-90 lg:opacity-70"></div>
        </div>

      </div>
    </section>
  );
};

export default CTASection;

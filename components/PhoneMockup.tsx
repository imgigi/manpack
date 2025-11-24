import React from 'react';
import { Phone, PhoneOff } from 'lucide-react';

const PhoneMockup: React.FC = () => {
  return (
    <div className="relative mx-auto bg-black rounded-[2.5rem] h-[500px] w-[260px] sm:h-[580px] sm:w-[300px] xl:h-[620px] xl:w-[320px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)] border-[8px] border-black overflow-hidden box-content ring-1 ring-gray-800/50 z-10 transition-all duration-300">
      {/* Top Bar (Notch) */}
      <div className="absolute top-0 inset-x-0 h-6 z-20 flex justify-center">
         <div className="w-28 h-5 bg-black rounded-b-xl relative flex items-center justify-center">
            <div className="w-12 h-1 bg-gray-800/80 rounded-full"></div>
         </div>
      </div>
      
      {/* Screen Content */}
      <div className="relative w-full h-full bg-gray-900">
        <img 
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop" 
          alt="Crystal the Agent" 
          className="w-full h-full object-cover"
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/80"></div>

        {/* Incoming Call UI */}
        <div className="absolute bottom-8 left-0 right-0 px-5">
            
            {/* Caller Label */}
            <div className="flex items-center gap-3 bg-gray-600/30 backdrop-blur-md p-1.5 pl-1.5 pr-4 rounded-full mb-6 border border-white/10 w-fit mx-auto">
                 <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white/20">
                    <img 
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop" 
                        className="w-full h-full object-cover"
                        alt="Avatar"
                    />
                 </div>
                 <div className="flex flex-col">
                    <span className="text-[9px] text-gray-300 uppercase tracking-wider leading-none mb-0.5">Incoming</span>
                    <span className="text-xs font-semibold text-white leading-none">Crystal the Phone Agent</span>
                 </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-between items-center px-6">
               {/* Decline */}
               <div className="flex flex-col items-center gap-2">
                 <button className="w-14 h-14 rounded-full bg-[#FF3B30] flex items-center justify-center shadow-lg hover:brightness-110 transition active:scale-95">
                    <PhoneOff className="text-white w-6 h-6 fill-white" />
                 </button>
               </div>

               {/* Accept */}
               <div className="flex flex-col items-center gap-2">
                 <button className="w-14 h-14 rounded-full bg-[#34C759] flex items-center justify-center shadow-lg hover:brightness-110 transition active:scale-95 animate-[pulse_2s_infinite]">
                    <Phone className="text-white w-6 h-6 fill-white" />
                 </button>
               </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
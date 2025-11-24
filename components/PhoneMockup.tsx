import React from 'react';
import { Phone, PhoneOff, Video, Mic, Volume2 } from 'lucide-react';

interface PhoneMockupProps {
  isActive?: boolean;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ isActive = false }) => {
  return (
    <div className="relative mx-auto border-gray-900 bg-gray-900 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl flex flex-col overflow-hidden">
      {/* Dynamic Island / Notch */}
      <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
      
      {/* Screen Content */}
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-gray-800 relative">
        <img 
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" 
          alt="Crystal the Agent" 
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>

        {/* Top Status Bar (Fake) */}
        <div className="absolute top-2 w-full flex justify-between px-6 text-white text-xs font-semibold">
           <span>9:41</span>
           <div className="flex gap-1">
             <div className="w-4 h-2 bg-white rounded-sm"></div>
             <div className="w-3 h-2 bg-white rounded-sm"></div>
           </div>
        </div>

        {/* Caller Info */}
        <div className="absolute top-16 left-0 right-0 text-center text-white">
            <h3 className="text-3xl font-light mb-1">Crystal</h3>
            <p className="text-white/70 text-sm">Manpack AI Agent</p>
        </div>

        {/* Incoming Call UI or Active Call UI */}
        <div className="absolute bottom-10 left-0 right-0 px-6">
            <div className="bg-gray-400/20 backdrop-blur-md rounded-2xl p-4 mb-6 flex items-center gap-3 border border-white/10">
                <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop" 
                    className="w-10 h-10 rounded-full object-cover border-2 border-white"
                    alt="Small Avatar"
                />
                <div className="flex-1">
                    <p className="text-white text-xs opacity-70">Incoming call...</p>
                    <p className="text-white font-medium text-sm">Crystal the Phone Agent</p>
                </div>
            </div>

            <div className="flex justify-between items-center px-4">
               <div className="flex flex-col items-center gap-2">
                 <button className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/30 transition">
                   <Volume2 className="text-white w-6 h-6" />
                 </button>
                 <span className="text-white text-xs">Speaker</span>
               </div>
               
               {/* Decline */}
               <div className="flex flex-col items-center gap-2">
                 <button className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center shadow-lg hover:bg-red-600 transition animate-pulse">
                    <PhoneOff className="text-white w-8 h-8" />
                 </button>
                 <span className="text-white text-xs">Decline</span>
               </div>

               {/* Accept */}
               <div className="flex flex-col items-center gap-2">
                 <button className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:bg-green-600 transition animate-bounce">
                    <Phone className="text-white w-8 h-8" />
                 </button>
                 <span className="text-white text-xs">Accept</span>
               </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
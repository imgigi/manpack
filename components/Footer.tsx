
import React from 'react';
import { Smartphone, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white py-20 px-6 sm:px-8 lg:px-12 border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between gap-16 lg:gap-24">

        {/* Left Column */}
        <div className="flex-1 flex flex-col justify-between max-w-sm space-y-10">
          <div className="space-y-6">
             <p className="text-gray-600 text-[15px] leading-relaxed font-normal">
               ManPack AI voice agent helps you do your cold calling while you focus on closing the sale
             </p>

             <div className="flex items-center gap-3">
               {[Instagram, Twitter, Linkedin, Facebook].map((Icon, idx) => (
                 <a key={idx} href="#" className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center cursor-pointer hover:bg-purple-50 hover:text-[#6200EA] text-gray-400 transition-all duration-300">
                    <Icon className="w-4 h-4" />
                 </a>
               ))}
             </div>
          </div>

          <div className="flex items-center gap-3">
             <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100">
                <Smartphone className="w-5 h-5 text-gray-900 fill-gray-900" />
             </div>
             <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-[#4c1d95] tracking-tight">Manpack</span>
                <span className="text-xs text-[#7c3aed] font-medium hidden sm:block bg-purple-50 px-2 py-0.5 rounded">Ai Cold Calling</span>
             </div>
          </div>
        </div>

        {/* Right Columns */}
        <div className="flex gap-16 sm:gap-32">
           {/* Pages */}
           <div className="flex flex-col gap-6">
              <h4 className="font-bold text-lg text-black tracking-tight">Pages</h4>
              <ul className="space-y-4">
                 <li><a href="#home" className="text-gray-500 hover:text-[#6200EA] transition-colors text-[15px] font-medium">Home</a></li>
                 <li><a href="#case-studies" className="text-gray-500 hover:text-[#6200EA] transition-colors text-[15px] font-medium">Projects</a></li>
                 <li><span className="text-gray-300 text-[15px] font-medium cursor-not-allowed">404</span></li>
              </ul>
           </div>

           {/* Information */}
           <div className="flex flex-col gap-6">
              <h4 className="font-bold text-lg text-black tracking-tight">Information</h4>
              <ul className="space-y-4">
                 <li><a href="#contact" className="text-gray-500 hover:text-[#6200EA] transition-colors text-[15px] font-medium">Get in touch</a></li>
                 <li><a href="#" className="text-gray-500 hover:text-[#6200EA] transition-colors text-[15px] font-medium">Privacy & Policy</a></li>
                 <li><a href="#" className="text-gray-500 hover:text-[#6200EA] transition-colors text-[15px] font-medium">Terms</a></li>
              </ul>
           </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Smartphone, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white py-16 px-6 sm:px-8 lg:px-12 border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-24">

        {/* Left Column */}
        <div className="flex-1 flex flex-col justify-between max-w-md">
          <div className="space-y-8">
             <p className="text-gray-900 text-lg leading-relaxed font-normal">
               ManPack AI voice agent helps you do your cold calling while you focus on closing the sale
             </p>

             <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                  <Instagram className="w-5 h-5 text-gray-300" />
               </div>
               <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                  <Twitter className="w-5 h-5 text-gray-300" />
               </div>
               <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                  <Linkedin className="w-5 h-5 text-gray-300" />
               </div>
               <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                  <Facebook className="w-5 h-5 text-gray-300" />
               </div>
             </div>
          </div>

          <div className="mt-12 flex items-center gap-3">
             <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100">
                <Smartphone className="w-5 h-5 text-gray-800 fill-gray-800" />
             </div>
             <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-[#4c1d95] tracking-tight">Manpack</span>
                <span className="text-sm text-[#7c3aed] font-medium hidden sm:block">Ai Cold Calling</span>
             </div>
          </div>
        </div>

        {/* Right Columns */}
        <div className="flex gap-16 sm:gap-24 mt-4 md:mt-0">
           {/* Pages */}
           <div className="flex flex-col gap-6">
              <h4 className="font-bold text-xl text-black">Pages</h4>
              <ul className="space-y-4">
                 <li><a href="#" className="text-gray-600 hover:text-[#6200EA] transition-colors font-medium">Home</a></li>
                 <li><a href="#" className="text-gray-600 hover:text-[#6200EA] transition-colors font-medium">Projects</a></li>
                 <li><a href="#" className="text-gray-600 hover:text-[#6200EA] transition-colors font-medium">404</a></li>
              </ul>
           </div>

           {/* Information */}
           <div className="flex flex-col gap-6">
              <h4 className="font-bold text-xl text-black">Information</h4>
              <ul className="space-y-4">
                 <li><a href="#" className="text-gray-600 hover:text-[#6200EA] transition-colors font-medium">Get in touch</a></li>
                 <li><a href="#" className="text-gray-600 hover:text-[#6200EA] transition-colors font-medium">Privacy & Policy</a></li>
                 <li><a href="#" className="text-gray-600 hover:text-[#6200EA] transition-colors font-medium">Terms</a></li>
              </ul>
           </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

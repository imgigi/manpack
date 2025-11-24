import React from 'react';
import { Smartphone } from 'lucide-react';
import { NAV_ITEMS } from '../types';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between py-6">
      <div className="flex items-center gap-3">
        <div className="bg-white p-2.5 rounded-xl shadow-sm border border-gray-100/80">
          <Smartphone className="w-5 h-5 text-gray-900 fill-gray-900" />
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold text-[#4c1d95] tracking-tight">Manpack</span>
          <span className="text-xs font-semibold text-[#7c3aed] hidden sm:block bg-purple-50/80 px-2.5 py-1 rounded-md border border-purple-100/50">
            Ai Cold Calling
          </span>
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-10">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-gray-600 hover:text-[#6200EA] transition-colors font-medium text-[15px] tracking-wide"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <a 
        href="#contact"
        className="bg-[#6200EA] hover:bg-[#5000c2] text-white px-7 py-2.5 rounded-lg font-semibold text-sm transition-all shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 hover:-translate-y-0.5"
      >
        Contact Us
      </a>
    </header>
  );
};

export default Header;
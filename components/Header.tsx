import React from 'react';
import { Smartphone } from 'lucide-react';
import { NAV_ITEMS } from '../types';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between py-4">
      <div className="flex items-center gap-3">
        <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100">
          <Smartphone className="w-5 h-5 text-gray-800 fill-gray-800" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-[#4c1d95] tracking-tight">Manpack</span>
          <span className="text-xs text-[#7c3aed] font-medium hidden sm:block bg-purple-50 px-2 py-0.5 rounded-full">Ai Cold Calling</span>
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-gray-600 hover:text-primary transition-colors font-medium text-sm"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <button className="bg-[#6200EA] hover:bg-[#5000c2] text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-all shadow-md shadow-purple-200">
        Contact Us
      </button>
    </header>
  );
};

export default Header;
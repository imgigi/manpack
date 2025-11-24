import React from 'react';
import { Phone } from 'lucide-react';
import { NAV_ITEMS } from '../types';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between py-6">
      <div className="flex items-center gap-3">
        <div className="bg-white p-2 rounded-xl shadow-sm border border-gray-100">
          <Phone className="w-6 h-6 text-gray-800" />
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold text-primary tracking-tight">Manpack</span>
          <span className="text-xs text-primary/70 font-medium -mt-1">Ai Cold Calling</span>
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

      <button className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-primary/30 active:scale-95">
        Contact Us
      </button>
    </header>
  );
};

export default Header;
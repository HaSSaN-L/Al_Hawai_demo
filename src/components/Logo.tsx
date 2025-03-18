import React from 'react';
import { Scale } from 'lucide-react';

const Logo = () => {
  return (
    <a href="/" className="flex items-center gap-3 group relative">
      {/* Glowing background effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-300 animate-glow"></div>
      
      {/* Logo icon with glowing effect */}
      <div className="relative flex items-center justify-center w-12 h-12 bg-gray-900 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 via-transparent to-transparent"></div>
        <Scale className="w-8 h-8 text-amber-400 relative z-10 transform group-hover:scale-110 transition-transform duration-300" />
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/0 via-amber-400/10 to-amber-400/30 animate-shine"></div>
      </div>

      {/* Text with glowing effect */}
      <div className="relative">
        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-100">
          Mahmoud
        </span>
        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-300 ml-1">
          Al Hawai
        </span>
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/0 via-amber-400/30 to-amber-400/0 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </a>
  );
};

export default Logo;
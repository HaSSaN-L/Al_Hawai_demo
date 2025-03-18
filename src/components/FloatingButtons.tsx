import React, { useState, useEffect } from 'react';
import { MessageCircle, ChevronUp, Languages } from 'lucide-react';

const FloatingButtons = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const toggleLanguage = (lang: string) => {
    setCurrentLanguage(lang);
    setShowLanguageMenu(false);
    // Here you would implement the actual language switching logic
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">


      {/* WhatsApp Button with Preview */}
      <div className="relative group">
        <a
          href="https://wa.me/971551230584"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
        <div className="absolute bottom-full right-0 mb-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white rounded-lg shadow-lg p-4 min-w-[200px] transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <p className="text-sm font-semibold text-gray-900 mb-1">Chat with us on WhatsApp</p>
            <p className="text-xs text-gray-600">Available 24/7 for your inquiries</p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`bg-amber-400 hover:bg-amber-500 text-gray-900 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </div>
  );
};

export default FloatingButtons;
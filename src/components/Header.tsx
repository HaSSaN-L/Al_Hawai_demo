import React from 'react';
import { Menu, X, MapPin, Mail, Phone, Linkedin, Facebook, Twitter } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';

interface HeaderProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const location = useLocation();
  const { t } = useTranslation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        
        <div className="py-4 flex justify-between items-center">
          <Logo />
          <nav className="hidden md:flex gap-8">
            <Link 
              to="/" 
              className={`transition-colors ${isActive('/') ? 'text-amber-400' : 'hover:text-amber-400'}`}
            >
              {t('nav.home')}
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors ${isActive('/about') ? 'text-amber-400' : 'hover:text-amber-400'}`}
            >
              {t('nav.about')}
            </Link>
            <Link 
              to="/practice-areas" 
              className={`transition-colors ${isActive('/practice-areas') ? 'text-amber-400' : 'hover:text-amber-400'}`}
            >
              {t('nav.practiceAreas')}
            </Link>
            <Link 
              to="/attorneys" 
              className={`transition-colors ${isActive('/attorneys') ? 'text-amber-400' : 'hover:text-amber-400'}`}
            >
              {t('nav.attorneys')}
            </Link>
            <Link 
              to="/blog" 
              className={`transition-colors ${isActive('/blog') ? 'text-amber-400' : 'hover:text-amber-400'}`}
            >
              {t('nav.blog')}
            </Link>
            <Link 
              to="/faq" 
              className={`transition-colors ${isActive('/faq') ? 'text-amber-400' : 'hover:text-amber-400'}`}
            >
              {t('nav.faq')}
            </Link>
            <a href="#contact" className="hover:text-amber-400 transition-colors">
              {t('nav.contact')}
            </a>
          </nav>
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open mobile menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-gray-900 z-50 p-4">
          <div className="flex justify-between items-center mb-8">
            <Logo />
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2"
              aria-label="Close mobile menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col items-center gap-8">
            <Link 
              to="/" 
              className={`text-xl transition-colors ${isActive('/') ? 'text-amber-400' : 'hover:text-amber-400'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.home')}
            </Link>
            <Link 
              to="/about" 
              className={`text-xl transition-colors ${isActive('/about') ? 'text-amber-400' : 'hover:text-amber-400'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.about')}
            </Link>
            <Link 
              to="/practice-areas" 
              className={`text-xl transition-colors ${isActive('/practice-areas') ? 'text-amber-400' : 'hover:text-amber-400'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.practiceAreas')}
            </Link>
            <Link 
              to="/attorneys" 
              className={`text-xl transition-colors ${isActive('/attorneys') ? 'text-amber-400' : 'hover:text-amber-400'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.attorneys')}
            </Link>
            <Link 
              to="/blog" 
              className={`text-xl transition-colors ${isActive('/blog') ? 'text-amber-400' : 'hover:text-amber-400'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.blog')}
            </Link>
            <Link 
              to="/faq" 
              className={`text-xl transition-colors ${isActive('/faq') ? 'text-amber-400' : 'hover:text-amber-400'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.faq')}
            </Link>
            <a 
              href="#contact" 
              className="text-xl hover:text-amber-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.contact')}
            </a>
          </nav>
          <div className="absolute bottom-8 left-0 right-0 flex justify-center">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
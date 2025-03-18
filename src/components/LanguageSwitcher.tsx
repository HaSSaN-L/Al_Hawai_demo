import React, { useState, useEffect } from 'react';
import { Languages } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Language {
  code: string;
  name: string;
  nativeName: string;
  direction: 'ltr' | 'rtl';
}

const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English', direction: 'ltr' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', direction: 'rtl' }
];

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();
  const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (lang: Language) => {
    i18n.changeLanguage(lang.code);
    document.documentElement.dir = lang.direction;
    document.documentElement.lang = lang.code;
    setIsOpen(false);
  };

  useEffect(() => {
    // Set initial direction and language
    document.documentElement.dir = currentLang.direction;
    document.documentElement.lang = currentLang.code;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.language-switcher')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [currentLang]);

  return (
    <div className="language-switcher relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
        aria-label="Change language"
      >
        <Languages className="w-5 h-5 text-amber-400" />
        <span className="font-medium">{currentLang.nativeName}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-gray-800 rounded-lg shadow-lg py-2 min-w-[160px] z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang)}
              className={`w-full px-4 py-2 text-left hover:bg-gray-700 transition-colors flex items-center justify-between ${
                currentLang.code === lang.code ? 'text-amber-400 font-semibold' : 'text-gray-300'
              }`}
            >
              <span>{lang.nativeName}</span>
              {currentLang.code === lang.code && (
                <span className="w-2 h-2 bg-amber-400 rounded-full" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
import React from 'react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[80vh] flex items-center" id="hero">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-xl mb-8 text-gray-200 leading-relaxed">
            {t('hero.subtitle')}
          </p>
          <div className="flex gap-4">
            <a 
              href="#contact"
              className="inline-block bg-amber-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-amber-500 transition-colors text-lg"
            >
              {t('hero.consultation')}
            </a>
            <a 
              href="/practice-areas"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors text-lg"
            >
              {t('hero.services')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
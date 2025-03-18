import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import AppointmentScheduler from './AppointmentScheduler';

const ContactForm = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-amber-400 font-semibold mb-4 uppercase tracking-wider">
              {t('contact.title')}
            </p>
            <h2 className="text-4xl font-bold mb-6">
              {t('contact.subtitle')}
            </h2>
            <p className="text-gray-600 text-lg">
              {t('contact.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <AppointmentScheduler />
            </div>
            
            <div>
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6">{t('contact.offices')}</h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{t('contact.sharjahOffice')}</h4>
                      <a href="https://maps.app.goo.gl/Yn86y25XoUkkjUp29" target="_blank" rel="noopener noreferrer" 
                         className="block text-gray-600 hover:text-amber-400 transition-colors mb-2">
                        {t('contact.sharjahAddress')}
                      </a>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.5338837095594!2d55.38702661501685!3d25.283089983859843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5b5c5c5c5c5d%3A0x3e5f5b5c5c5c5c5d!2sAl%20Ghanem%20Business%20Center!5e0!3m2!1sen!2sae!4v1625147200000!5m2!1sen!2sae"
                        className="w-full h-48 rounded-lg mt-4"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{t('contact.dubaiOffice')}</h4>
                      <a href="https://maps.app.goo.gl/MzHt2cx28JqHg5DS7" target="_blank" rel="noopener noreferrer"
                         className="block text-gray-600 hover:text-amber-400 transition-colors mb-2">
                        {t('contact.dubaiAddress')}
                      </a>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.5338837095594!2d55.38702661501685!3d25.283089983859843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5b5c5c5c5c5d%3A0x3e5f5b5c5c5c5c5d!2sZalfa%20Building!5e0!3m2!1sen!2sae!4v1625147200000!5m2!1sen!2sae"
                        className="w-full h-48 rounded-lg mt-4"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="w-4 h-4 text-amber-400" />
                    <h4 className="font-semibold">{t('contact.email')}</h4>
                  </div>
                  <a href="mailto:info@mahmoudalhawai.com" 
                     className="text-gray-600 hover:text-amber-400 transition-colors">
                    hawailaw@eim.ae
                  </a>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Phone className="w-4 h-4 text-amber-400" />
                    <h4 className="font-semibold">{t('contact.phone')}</h4>
                  </div>
                  <a href="tel:(06)5694445" 
                     className="block text-gray-600 hover:text-amber-400 transition-colors">
                    {t('contact.sharjahPhone')}: (06) 5694445
                  </a>
                  <a href="tel:(04)2868681"
                     className="block text-gray-600 hover:text-amber-400 transition-colors">
                    {t('contact.dubaiPhone')}: (04) 2868681
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
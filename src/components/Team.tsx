import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Team = () => {
  const { t } = useTranslation();

  const attorneys = [
    {
      nameKey: 'team.attorneys.mahmoud.name',
      positionKey: 'team.attorneys.mahmoud.position',
      specializationKey: 'team.attorneys.mahmoud.specialization',
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      email: "mahmoud@mahmoudalhawai.com",
      phone: "(06) 5694445",
      linkedin: "https://www.linkedin.com/"
    },
    {
      nameKey: 'team.attorneys.sarah.name',
      positionKey: 'team.attorneys.sarah.position',
      specializationKey: 'team.attorneys.sarah.specialization',
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      email: "sarah@mahmoudalhawai.com",
      phone: "(06) 5694445",
      linkedin: "https://www.linkedin.com/"
    },
    {
      nameKey: 'team.attorneys.omar.name',
      positionKey: 'team.attorneys.omar.position',
      specializationKey: 'team.attorneys.omar.specialization',
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      email: "omar@mahmoudalhawai.com",
      phone: "(04) 2868681",
      linkedin: "https://www.linkedin.com/"
    },
    {
      nameKey: 'team.attorneys.fatima.name',
      positionKey: 'team.attorneys.fatima.position',
      specializationKey: 'team.attorneys.fatima.specialization',
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      email: "fatima@mahmoudalhawai.com",
      phone: "(04) 2868681",
      linkedin: "https://www.linkedin.com/"
    }
  ];

  return (
    <section className="py-24 bg-gray-50" id="team">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-amber-400 font-semibold mb-4 uppercase tracking-wider">
            {t('team.title')}
          </p>
          <h2 className="text-4xl font-bold mb-6">
            {t('team.subtitle')}
          </h2>
          <p className="text-gray-600 text-lg">
            {t('team.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {attorneys.map((attorney, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative overflow-hidden">
                  <img
                    src={attorney.image}
                    alt={t(attorney.nameKey)}
                    className="w-full h-80 object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
                    <div className="flex gap-4">
                      <a
                        href={`mailto:${attorney.email}`}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-amber-400 transition-colors"
                        aria-label={t('team.contact.email')}
                      >
                        <Mail className="w-5 h-5 text-gray-900" />
                      </a>
                      <a
                        href={`tel:${attorney.phone}`}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-amber-400 transition-colors"
                        aria-label={t('team.contact.phone')}
                      >
                        <Phone className="w-5 h-5 text-gray-900" />
                      </a>
                      <a
                        href={attorney.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-amber-400 transition-colors"
                        aria-label={t('team.contact.linkedin')}
                      >
                        <Linkedin className="w-5 h-5 text-gray-900" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{t(attorney.nameKey)}</h3>
                  <p className="text-amber-400 font-semibold mb-2">{t(attorney.positionKey)}</p>
                  <p className="text-gray-600">{t(attorney.specializationKey)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 bg-amber-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-amber-500 transition-colors text-lg group"
          >
            <span>{t('team.scheduleConsultation')}</span>
            <span className="group-hover:translate-x-1 transition-transform ltr-only">→</span>
            <span className="group-hover:-translate-x-1 transition-transform rtl-only">←</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;
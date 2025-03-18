import React from 'react';
import { Mail, Phone, Award, BookOpen, Scale } from 'lucide-react';

const attorneys = [
  {
    name: "Mahmoud Al Hawai",
    position: "Founder",
    specialization: "Corporate Law & Civil Litigation",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    email: "mahmoud@hawailaw.com",
    phone: "(055) 1230540",
    education: [
      "Master of Laws (LLM), Harvard Law School",
      "Bachelor of Laws (LLB), UAE University"
    ],
    expertise: [
      "Corporate Law",
      "Civil Litigation",
      "International Business Law",
      "Arbitration"
    ],
    languages: ["Arabic", "English"],
    bio: "With over 30 years of experience, Mahmoud Al Hawai has established himself as one of the UAE's leading corporate lawyers. His expertise in complex corporate transactions and litigation has earned him recognition throughout the region."
  },
  {
    name: "Ibrahim Al Hawai",
    position: "Co-Founder",
    specialization: "Family Law & Real Estate",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    email: "Ibrahim@hawailaw.com",
    phone: "(056) 1501999",
    education: [
      "Master of Laws (LLM), Oxford University",
      "Bachelor of Laws (LLB), American University of Sharjah"
    ],
    expertise: [
      "Family Law",
      "Real Estate Law",
      "Property Disputes",
      "Inheritance Law"
    ],
    languages: ["Arabic", "English", "French"],
    bio: "Sarah Ahmed brings a wealth of experience in family law and real estate matters. Her compassionate approach and deep understanding of UAE family law have helped numerous clients navigate complex personal matters."
  },
  {
    name: "Hassan Ali Alhouli",
    position: "Senior Partner",
    specialization: "Criminal Law & Labor Law",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    email: "Hassan@hawailaw.com",
    phone: "(050) 1414147",
    education: [
      "Master of Laws (LLM), London School of Economics",
      "Bachelor of Laws (LLB), University of Sharjah"
    ],
    expertise: [
      "Criminal Defense",
      "Labor Law",
      "Employment Disputes",
      "Corporate Crime"
    ],
    languages: ["Arabic", "English", "Urdu"],
    bio: "Omar Hassan is known for his strategic approach to criminal defense and labor disputes. His extensive experience in UAE courts and strong advocacy skills have resulted in numerous successful outcomes for his clients."
  },
  {
    name: "Abdelrahman Hussain",
    position: "Senior Partner",
    specialization: "Corporate Law & Banking",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    email: "Abdelrahman@hawailaw.com",
    phone: "(050) 6464051",
    education: [
      "Master of Laws (LLM), Columbia Law School",
      "Bachelor of Laws (LLB), Dubai University"
    ],
    expertise: [
      "Banking Law",
      "Corporate Law",
      "Islamic Finance",
      "Mergers & Acquisitions"
    ],
    languages: ["Arabic", "English", "Spanish"],
    bio: "Al Hawai specializes in banking law and corporate transactions. Her expertise in Islamic finance and international business law makes her a valuable asset for clients seeking comprehensive financial legal services."
  },
  {
    name: "Georges Elias Makhoul",
    position: "Senior Associate",
    specialization: "Corporate Law & Banking",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    email: "g.makhoul@hawailaw.com",
    phone: "(055) 1230530",
    education: [
      "Master of Laws (LLM), Columbia Law School",
      "Bachelor of Laws (LLB), Dubai University"
    ],
    expertise: [
      "Banking Law",
      "Corporate Law",
      "Islamic Finance",
      "Mergers & Acquisitions"
    ],
    languages: ["Arabic", "English", "Spanish"],
    bio: "Al Hawai specializes in banking law and corporate transactions. Her expertise in Islamic finance and international business law makes her a valuable asset for clients seeking comprehensive financial legal services."
  },
  {
    name: "Mohamed Ali Omer",
    position: "Senior Associate",
    specialization: "Corporate Law & Banking",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    email: "m.aliomer@hawailaw.com",
    phone: "(04) 2868681",
    education: [
      "Master of Laws (LLM), Columbia Law School",
      "Bachelor of Laws (LLB), Dubai University"
    ],
    expertise: [
      "Banking Law",
      "Corporate Law",
      "Islamic Finance",
      "Mergers & Acquisitions"
    ],
    languages: ["Arabic", "English", "Spanish"],
    bio: "Al Hawai specializes in banking law and corporate transactions. Her expertise in Islamic finance and international business law makes her a valuable asset for clients seeking comprehensive financial legal services."
  },
  {
    name: "Mohamed Abdelbaset Abounar",
    position: "Senior Associate",
    specialization: "Corporate Law & Banking",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    email: "m.abounar@hawailaw.com",
    phone: "(055) 1230581",
    education: [
      "Master of Laws (LLM), Columbia Law School",
      "Bachelor of Laws (LLB), Dubai University"
    ],
    expertise: [
      "Banking Law",
      "Corporate Law",
      "Islamic Finance",
      "Mergers & Acquisitions"
    ],
    languages: ["Arabic", "English", "Spanish"],
    bio: "Al Hawai specializes in banking law and corporate transactions. Her expertise in Islamic finance and international business law makes her a valuable asset for clients seeking comprehensive financial legal services."
  },
  {
    name: "Hossam Rashad",
    position: "Senior Associate",
    specialization: "Corporate Law & Banking",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    email: "hossam@hawailaw.com",
    phone: "(055) 1230535",
    education: [
      "Master of Laws (LLM), Columbia Law School",
      "Bachelor of Laws (LLB), Dubai University"
    ],
    expertise: [
      "Banking Law",
      "Corporate Law",
      "Islamic Finance",
      "Mergers & Acquisitions"
    ],
    languages: ["Arabic", "English", "Spanish"],
    bio: "Al Hawai specializes in banking law and corporate transactions. Her expertise in Islamic finance and international business law makes her a valuable asset for clients seeking comprehensive financial legal services."
  }
];

const AttorneysPage = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
            alt="Law firm team"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Our Legal Team</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Meet our experienced attorneys who are dedicated to providing exceptional legal services and protecting your interests.
            </p>
          </div>
        </div>
      </section>

      {/* Attorneys Grid */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {attorneys.map((attorney, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden group hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="grid md:grid-cols-2">
                  <div className="relative">
                    <img
                      src={attorney.image}
                      alt={attorney.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
                      <div className="flex gap-4">
                        <a
                          href={`mailto:${attorney.email}`}
                          className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-amber-400 transition-colors"
                        >
                          <Mail className="w-5 h-5 text-gray-900" />
                        </a>
                        <a
                          href={`tel:${attorney.phone}`}
                          className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-amber-400 transition-colors"
                        >
                          <Phone className="w-5 h-5 text-gray-900" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <h2 className="text-2xl font-bold mb-2">{attorney.name}</h2>
                    <p className="text-amber-400 font-semibold mb-4">{attorney.position}</p>
                    <p className="text-gray-600 mb-6">{attorney.bio}</p>
                    
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Award className="w-5 h-5 text-amber-400" />
                          <h3 className="font-semibold">Education</h3>
                        </div>
                        <ul className="space-y-1 text-gray-600">
                          {attorney.education.map((edu, eduIndex) => (
                            <li key={eduIndex}>{edu}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Scale className="w-5 h-5 text-amber-400" />
                          <h3 className="font-semibold">Areas of Expertise</h3>
                        </div>
                        <ul className="space-y-1 text-gray-600">
                          {attorney.expertise.map((exp, expIndex) => (
                            <li key={expIndex}>{exp}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <BookOpen className="w-5 h-5 text-amber-400" />
                          <h3 className="font-semibold">Languages</h3>
                        </div>
                        <p className="text-gray-600">{attorney.languages.join(", ")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Work with Our Expert Legal Team
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a consultation with one of our experienced attorneys to discuss your legal needs.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 bg-amber-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-amber-500 transition-colors text-lg group"
            >
              <span>Schedule a Consultation</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AttorneysPage;
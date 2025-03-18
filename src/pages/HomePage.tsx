import React from 'react';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import PracticeAreas from '../components/PracticeAreas';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Blog from '../components/Blog';
import CTA from '../components/CTA';
import ContactForm from '../components/ContactForm';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <PracticeAreas />
      <Team />
      <Testimonials />
      <FAQ />
      <Blog />
      <CTA />
      <ContactForm />
    </main>
  );
};

export default HomePage;
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PracticeAreasPage from './pages/PracticeAreasPage';
import AttorneysPage from './pages/AttorneysPage';
import FAQPage from './pages/FAQPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import FloatingButtons from './components/FloatingButtons';
import ScrollProgress from './components/ScrollProgress';
import WhatsAppWidget from './components/WhatsAppWidget';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <>
      <ScrollProgress />
      <Header 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/practice-areas" element={<PracticeAreasPage />} />
        <Route path="/attorneys" element={<AttorneysPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
      <Footer />
      <FloatingButtons />
      <WhatsAppWidget />
    </>
  );
}

export default App;
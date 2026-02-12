
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';
import Legal from './components/Legal';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'legal'>('home');

  const navigate = (page: 'home' | 'legal') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Handle back button
    const handlePopState = () => {
      if (window.location.hash === '#legal') {
        setCurrentPage('legal');
      } else {
        setCurrentPage('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onNavigate={navigate} />
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero />
            <Features />
            <Portfolio />
            <QuoteForm />
          </>
        ) : (
          <Legal />
        )}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
};

export default App;

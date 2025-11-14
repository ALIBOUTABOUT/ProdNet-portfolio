import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Cover from './components/Cover';
import ProjectIdea from './components/ProjectIdea';
import Problem from './components/Problem';
import Solution from './components/Solution';
import TargetAudience from './components/TargetAudience';
import Features from './components/Features';
import Contact from './components/Contact';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App" id="portfolio-content">
      <Header />
      <main>
        <Cover />
        <ProjectIdea />
        <Problem />
        <Solution />
        <TargetAudience />
        <Features />
        <Contact />
      </main>
      <footer className="footer" id="contact">
        <div className="footer-content">
          <p>© 2025 Team ProdNet. All rights reserved.</p>
          <p className="footer-tagline">Connecting producers with investors.</p>
          <div className="footer-team">
            <span>Benseba Nourhene</span>
            <span>•</span>
            <span>Abusaada Mohammed</span>
            <span>•</span>
            <span>Boutabout Ali</span>
          </div>
        </div>
      </footer>
      
      <button 
        className={`scroll-to-top ${showScrollTop ? 'show' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 19V5M5 12l7-7 7 7"/>
        </svg>
      </button>
    </div>
  );
}

export default App;

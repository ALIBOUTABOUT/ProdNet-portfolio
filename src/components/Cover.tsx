import React, { useEffect, useState } from 'react';
import './Cover.css';
import { useLanguage } from '../contexts/LanguageContext';

const Cover: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="cover" className={`cover-section ${isVisible ? 'visible' : ''}`}>
      <div className="animated-background">
        <div className="gradient-overlay"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
          <div className="shape shape-6"></div>
        </div>
      </div>
      <div className="cover-container">
        <div className="logo-container">
          <img 
            src="/prodnet-logo.png" 
            alt="ProdNet Logo" 
            className="main-logo"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
        
        <div className="cover-content">
          <h1 className="hero-name">
            <span className="team-label">{t('cover.team')}</span>
            <span className="prod">Prod</span>
            <span className="net">Net</span>
          </h1>
          
          <p className="hero-role">{t('cover.role')}</p>
          
          <p className="hero-tagline">
            {t('cover.tagline')}
          </p>

          <div className="team-profiles">
            <div className="profile-item">
              <div className="profile-avatar">
                <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <p className="profile-name">Boutabout Ali</p>
            </div>
            <div className="profile-item">
              <div className="profile-avatar">
                <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <p className="profile-name">Abusaada Mohammed</p>
            </div>
            <div className="profile-item">
              <div className="profile-avatar">
                <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <p className="profile-name">Benseba Nourhene</p>
            </div>
            <div className="profile-item">
              <div className="profile-avatar">
                <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <p className="profile-name">Bouremana Sara</p>
            </div>
          </div>

          <div className="cta-buttons">
            <button onClick={() => scrollToSection('screenshots')} className="btn-primary">{t('cover.viewApp')}</button>
            <button onClick={() => scrollToSection('contact-section')} className="btn-secondary">{t('cover.getInTouch')}</button>
          </div>
        </div>

        <div className="scroll-indicator">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Cover;

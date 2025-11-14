import React from 'react';
import './Features.css';
import { useLanguage } from '../contexts/LanguageContext';

const Features: React.FC = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      title: t('features.1.title'),
      description: t('features.1.desc')
    },
    {
      title: t('features.2.title'),
      description: t('features.2.desc')
    },
    {
      title: t('features.3.title'),
      description: t('features.3.desc')
    },
    {
      title: t('features.4.title'),
      description: t('features.4.desc')
    },
    {
      title: t('features.5.title'),
      description: t('features.5.desc')
    }
  ];

  return (
    <section id="features" className="section features-section">
      <div className="section-content">
        <h2 className="section-title">{t('features.title')}</h2>
        <p className="section-subtitle">
          {t('features.subtitle')}
        </p>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="feature-number">{index + 1}</div>
              <h3 className="feature-card-title">{feature.title}</h3>
              <p className="feature-card-description">{feature.description}</p>
              <div className="feature-card-line"></div>
            </div>
          ))}
        </div>

        <div id="screenshots" className="screenshots-section">
          <h3 className="screenshots-title">{t('features.screenshots')}</h3>
          <div className="screenshots-grid">
            <div className="screenshot-item">
              <img src="/screen1.jpg" alt="ProdNet App Screenshot 1" className="screenshot-image" />
            </div>
            <div className="screenshot-item">
              <img src="/screen2.jpg" alt="ProdNet App Screenshot 2" className="screenshot-image" />
            </div>
            <div className="screenshot-item">
              <img src="/screen3.jpg" alt="ProdNet App Screenshot 3" className="screenshot-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

import React from 'react';
import './Solution.css';
import { useLanguage } from '../contexts/LanguageContext';

const Solution: React.FC = () => {
  const { t } = useLanguage();
  
  const features = [
    { text: t('solution.feature1') },
    { text: t('solution.feature2') },
    { text: t('solution.feature3') },
    { text: t('solution.feature4') },
    { text: t('solution.feature5') }
  ];

  return (
    <section id="solution" className="section solution-section">
      <div className="section-content">
        <h2 className="section-title">{t('solution.title')}</h2>
        <p className="section-subtitle">
          {t('solution.subtitle')}
        </p>
        
        <div className="solution-intro">
          <p>
            {t('solution.intro')}
          </p>
        </div>

        <div className="solution-features">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="solution-feature"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-marker"></div>
              <span className="feature-text">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;

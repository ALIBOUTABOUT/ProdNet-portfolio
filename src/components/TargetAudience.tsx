import React from 'react';
import './TargetAudience.css';
import { useLanguage } from '../contexts/LanguageContext';

const TargetAudience: React.FC = () => {
  const { t } = useLanguage();
  
  const audiences = [
    {
      title: t('audience.farmers'),
      description: t('audience.farmers.desc'),
      color: '#27ae60'
    },
    {
      title: t('audience.artisans'),
      description: t('audience.artisans.desc'),
      color: '#e67e22'
    },
    {
      title: t('audience.investors'),
      description: t('audience.investors.desc'),
      color: '#3498db'
    }
  ];

  return (
    <section className="section target-audience-section">
      <div className="section-content">
        <h2 className="section-title">{t('audience.title')}</h2>
        <p className="section-subtitle">
          {t('audience.subtitle')}
        </p>
        
        <div className="audience-grid">
          {audiences.map((audience, index) => (
            <div 
              key={index} 
              className="audience-card"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                borderTopColor: audience.color
              }}
            >
              <h3 className="audience-title" style={{ color: audience.color }}>
                {audience.title}
              </h3>
              <p className="audience-description">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;

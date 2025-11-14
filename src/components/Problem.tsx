import React from 'react';
import './Problem.css';
import { useLanguage } from '../contexts/LanguageContext';

const Problem: React.FC = () => {
  const { t } = useLanguage();
  
  const problems = [
    {
      text: t('problem.1.title'),
      description: t('problem.1.desc')
    },
    {
      text: t('problem.2.title'),
      description: t('problem.2.desc')
    },
    {
      text: t('problem.3.title'),
      description: t('problem.3.desc')
    }
  ];

  return (
    <section id="problem" className="section problem-section">
      <div className="section-content">
        <h2 className="section-title">{t('problem.title')}</h2>
        <p className="section-subtitle">
          {t('problem.subtitle')}
        </p>
        
        <div className="problems-grid">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="problem-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="problem-number">{index + 1}</div>
              <h3 className="problem-title">{problem.text}</h3>
              <p className="problem-description">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;

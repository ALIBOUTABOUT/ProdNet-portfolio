import React from 'react';
import './ProjectIdea.css';
import { useLanguage } from '../contexts/LanguageContext';

const ProjectIdea: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="project-idea" className="section project-idea-section">
      <div className="section-content">
        <h2 className="section-title">{t('project.title')}</h2>
        
        <div className="idea-content">
          <p className="idea-text">
            {t('project.description')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectIdea;

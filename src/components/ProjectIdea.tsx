import React from 'react';
import './ProjectIdea.css';

const ProjectIdea: React.FC = () => {
  return (
    <section id="project-idea" className="section project-idea-section">
      <div className="section-content">
        <h2 className="section-title">Project Idea</h2>
        
        <div className="idea-content">
          <p className="idea-text">
            ProdNet is a platform that helps farmers, artisans, and small producers present their projects 
            and connect directly with investors looking for real economic opportunities. We create a transparent 
            bridge between productive talent and financial support, enabling growth and fostering meaningful 
            partnerships in the real economy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectIdea;

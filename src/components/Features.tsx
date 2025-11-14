import React from 'react';
import './Features.css';

const Features: React.FC = () => {
  const features = [
    {
      title: 'Custom Professional Profiles',
      description: 'Create detailed profiles showcasing your experience, projects, and capabilities with rich media support.'
    },
    {
      title: 'Project Presentation Space',
      description: 'Present your ideas with comprehensive project pages including images, descriptions, and financial needs.'
    },
    {
      title: 'Interaction & Messaging',
      description: 'Direct communication channels between producers and investors for questions, negotiations, and updates.'
    },
    {
      title: 'Investment Flow',
      description: 'Streamlined process for investments with clear terms, milestones, and secure transaction tracking.'
    },
    {
      title: 'Rating & Transparency System',
      description: 'Build trust through verified reviews, ratings, and transparent project progress tracking.'
    }
  ];

  return (
    <section id="features" className="section features-section">
      <div className="section-content">
        <h2 className="section-title">Main Features</h2>
        <p className="section-subtitle">
          Everything you need to connect and collaborate
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
          <h3 className="screenshots-title">App Screenshots</h3>
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

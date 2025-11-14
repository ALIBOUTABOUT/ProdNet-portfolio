import React from 'react';
import './Solution.css';

const Solution: React.FC = () => {
  const features = [
    { text: 'Professional project profiles' },
    { text: 'A space to showcase ideas' },
    { text: 'Direct interaction between producers and investors' },
    { text: 'Transparent project evaluation' },
    { text: 'A community area to exchange ideas' }
  ];

  return (
    <section id="solution" className="section solution-section">
      <div className="section-content">
        <h2 className="section-title">The Solution</h2>
        <p className="section-subtitle">
          How ProdNet bridges the gap
        </p>
        
        <div className="solution-intro">
          <p>
            ProdNet provides a comprehensive platform that connects producers directly with investors, 
            eliminating intermediaries and creating transparent, trustworthy relationships.
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

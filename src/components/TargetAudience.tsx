import React from 'react';
import './TargetAudience.css';

const TargetAudience: React.FC = () => {
  const audiences = [
    {
      title: 'Farmers',
      description: 'Need visibility and support to grow their agricultural projects and reach investors who understand the value of sustainable farming.',
      color: '#27ae60'
    },
    {
      title: 'Artisans / Small Industries',
      description: 'Need funding to grow their craft businesses, scale production, and connect with investors who appreciate handmade quality.',
      color: '#e67e22'
    },
    {
      title: 'Investors',
      description: 'Need clear, reliable opportunities to invest in real production projects with transparent evaluation and direct communication.',
      color: '#3498db'
    }
  ];

  return (
    <section className="section target-audience-section">
      <div className="section-content">
        <h2 className="section-title">Target Audience</h2>
        <p className="section-subtitle">
          Who benefits from ProdNet
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

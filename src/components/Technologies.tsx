import React from 'react';
import './Technologies.css';

const Technologies: React.FC = () => {
  const technologies = [
    {
      name: 'Figma',
      icon: '🎨',
      role: 'Design',
      color: '#F24E1E',
      description: 'UI/UX Design & Prototyping'
    },
    {
      name: 'Flutter',
      icon: '📱',
      role: 'Frontend',
      color: '#02569B',
      description: 'Cross-platform Mobile Development'
    },
    {
      name: 'Python',
      icon: '🐍',
      role: 'Backend',
      color: '#3776AB',
      description: 'Server-side Logic & APIs'
    },
    {
      name: 'MongoDB',
      icon: '🍃',
      role: 'Database',
      color: '#47A248',
      description: 'NoSQL Data Storage'
    }
  ];

  return (
    <section className="section technologies-section">
      <div className="section-content">
        <h2 className="section-title">Tools & Technologies</h2>
        <p className="section-subtitle">
          Our technology stack
        </p>
        
        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="tech-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="tech-icon-wrapper">
                <span className="tech-icon">{tech.icon}</span>
              </div>
              <div className="tech-content">
                <h3 className="tech-name" style={{ color: tech.color }}>
                  {tech.name}
                </h3>
                <span className="tech-role">{tech.role}</span>
                <p className="tech-description">{tech.description}</p>
              </div>
              <div 
                className="tech-accent" 
                style={{ backgroundColor: tech.color }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;

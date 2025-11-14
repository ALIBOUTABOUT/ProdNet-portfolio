import React from 'react';
import './Problem.css';

const Problem: React.FC = () => {
  const problems = [
    {
      text: 'Producers lack visibility and funding',
      description: 'Talented farmers and artisans struggle to showcase their work'
    },
    {
      text: 'Investors struggle to find real, trustworthy opportunities',
      description: 'Limited access to genuine, vetted production projects'
    },
    {
      text: 'There is no direct bridge between production and investment',
      description: 'Traditional channels create barriers and inefficiencies'
    }
  ];

  return (
    <section id="problem" className="section problem-section">
      <div className="section-content">
        <h2 className="section-title">The Problem</h2>
        <p className="section-subtitle">
          Current challenges in the producer-investor ecosystem
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

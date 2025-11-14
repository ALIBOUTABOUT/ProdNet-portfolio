import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  const handleNav = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="brand" onClick={() => handleNav('cover')} role="button" aria-label="Go to top">
          <span className="brand-mark" />
          <span className="brand-name">ProdNet</span>
        </div>
        <nav className="primary-nav" aria-label="Primary navigation">
          <button onClick={() => handleNav('project-idea')}>Project</button>
          <button onClick={() => handleNav('problem')}>Problem</button>
          <button onClick={() => handleNav('solution')}>Solution</button>
          <button onClick={() => handleNav('features')}>Features</button>
          <button onClick={() => handleNav('contact-section')}>Contact</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
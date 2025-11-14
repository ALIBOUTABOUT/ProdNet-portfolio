import React from 'react';
import './Header.css';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
  const { t } = useLanguage();
  
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
          <button onClick={() => handleNav('project-idea')}>{t('nav.project')}</button>
          <button onClick={() => handleNav('problem')}>{t('nav.problem')}</button>
          <button onClick={() => handleNav('solution')}>{t('nav.solution')}</button>
          <button onClick={() => handleNav('features')}>{t('nav.features')}</button>
          <button onClick={() => handleNav('contact-section')}>{t('nav.contact')}</button>
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;
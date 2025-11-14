import React from 'react';
import './Contact.css';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="contact-section" className="section contact-section" aria-labelledby="contact-title">
      <div className="section-content">
        <h2 id="contact-title" className="section-title">{t('contact.title')}</h2>
        
        <div className="contact-methods">
          <a href="mailto:teamprodnet@gmail.com" className="contact-method">
            <div className="contact-icon">
              <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
            </div>
            <div className="contact-details">
              <h3>Email</h3>
              <p className="contact-value">teamprodnet@gmail.com</p>
            </div>
          </a>

          <a href="tel:+213698542327" className="contact-method">
            <div className="contact-icon">
              <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            </div>
            <div className="contact-details">
              <h3>Phone</h3>
              <p className="contact-value">0698542327</p>
            </div>
          </a>
        </div>

        <div className="contact-footer">
          <p className="contact-message">
            {t('contact.description')}
          </p>
          <a href="mailto:teamprodnet@gmail.com" className="btn-email">{t('contact.send')}</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
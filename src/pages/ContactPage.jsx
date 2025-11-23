// src/pages/ContactPage.jsx

import React from 'react';
import './ContactPage.css'; // Stil dosyamız
import githubIcon from '../assets/github.png'; // GitHub ikonunuzun yolu
import linkedinIcon from '../assets/linkedin.png'; // LinkedIn ikonunuzun yolu

function ContactPage() {
  return (
    <section className="contact-section">
      <div className="contact-content">
        <h2>Bana Ulaşın</h2>
        <p className="contact-description">
          Projelerim hakkında konuşmak, iş birliği yapmak veya sadece merhaba demek için aşağıdaki iletişim kanallarını kullanabilirsiniz.
        </p>

        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-label">E-posta:</span>
            <a href="mailto:berrinsurucu67@gmail.com" className="contact-link">berrinsurucu67@gmail.com</a>
          </div>
          <div className="contact-item">
            <span className="contact-label">GitHub:</span>
            <a href="https://github.com/Berrinsrc" target="_blank" rel="noopener noreferrer" className="contact-link">github.com/Berrinsrc</a>
          </div>
          <div className="contact-item">
            <span className="contact-label">LinkedIn:</span>
            <a href="https://www.linkedin.com/in/berrin-s%C3%BCr%C3%BCc%C3%BC-22227930b/" target="_blank" rel="noopener noreferrer" className="contact-link">linkedin.com/in/berrin-sürücü</a>
          </div>
        </div>
        
        {/* İkonlar da istersen ekleyebilirsin */}
        <div className="social-links-contact">
          <a href="https://github.com/Berrinsrc" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/berrin-s%C3%BCr%C3%BCc%C3%BC-22227930b/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
          </a>
        </div>

      </div>
    </section>
  );
}

export default ContactPage;
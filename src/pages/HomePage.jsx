// src/pages/HomePage.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // HomePage'in kendi stil dosyası
import profileImage from '../assets/profile.jpg'; // Kendi fotoğrafınızın yolu (uzantısını kontrol edin!)
import githubIcon from '../assets/github.png'; // GitHub ikonunuzun yolu
import linkedinIcon from '../assets/linkedin.png'; // LinkedIn ikonunuzun yolu

// Yazı yazma animasyonu için özel bir bileşen
const Typewriter = ({ text }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 100); // Her harf arası bekleme süresi (ms)
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return <span className="typewriter-text">{currentText}</span>;
};


function HomePage() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Merhaba, ben Berrinnur Sürücü!</h1>
        <h2>
          <Typewriter text="Bilgisayar Mühendisliği 3. Sınıf Öğrencisiyim" />
        </h2>
        <p>
          Lisans sürecimi Bartın Üniversitesinde tamamlarken Sürekli öğrenmeye olan tutkum sayesinde, sektördeki yenilikleri yakından takip ediyor ve projelerime entegre etmek için çabalıyorum. Problemleri çözmek, karmaşık yapıları basitleştirmek ve fikirleri somut ürünlere dönüştürmek benim için bir tutku.

Bu portföy, tutkumu ve yeteneklerimi yansıtan çalışmalarımdan küçük bir kesiti sunuyor. Gelecekteki projelerde işbirliği yapmaktan ve dijital dünyanın geleceğine katkıda bulunmaktan heyecan duyarım.
        </p>

        <div className="social-links">
          <a href="https://github.com/Berrinsrc" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/berrin-s%C3%BCr%C3%BCc%C3%BC-22227930b/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
          </a>
        </div>

        <Link to="/projects" className="call-to-action">
        Projelerimi Gör
        </Link>
      </div>

      <div className="profile-image-container">
        <img src={profileImage} alt="Berrinnur Sürücü" className="profile-image" />
      </div>
    </section>
  );
}

export default HomePage;
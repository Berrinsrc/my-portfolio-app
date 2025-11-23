// src/components/Header.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Header'ın kendi stil dosyası
 // Kendi logo dosyanızın yolu (uzantısını kontrol edin!)

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo-container">
          <Link to="/">
            
            <span className="site-title">Berrinnur Sürücü</span>
          </Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Hakkımda</Link></li>
          <li><Link to="/projects">Projelerim</Link></li> {/* "Projelerim" olarak güncellendi */}
          <li><Link to="/contact">İletişim</Link></li> {/* "İletişim" olarak güncellendi */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // Header bileşeni

// Aşağıdaki iki import satırı, eğer HomePage ve ProjectsPage dosyaları mevcutsa kullanılır.
// Eğer henüz ProjectsPage.jsx dosyasını oluşturmadıysan, 'ProjectsPage' satırını yorum satırı yap veya sil.
import HomePage from './pages/HomePage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

import './App.css'; // Kendi App.css dosyanız

function App() {
  return (
    <Router>
      {/* Header bileşeni her sayfada görünsün istiyorsak buraya koyarız */}
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Eğer ProjectsPage.jsx dosyasını henüz oluşturmadıysan, aşağıdaki satırı yorum satırı yap: */}
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      {/* Footer bileşeni eklemek istersen: */}
      {/* import Footer from './components/Footer'; */}
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
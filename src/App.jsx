

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; 


import HomePage from './pages/HomePage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

import './App.css'; 

function App() {
  return (
    <Router>
      {}
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {}
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      {}
      {}
      {}
    </Router>
  );
}

export default App;
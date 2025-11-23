// src/pages/ProjectsPage.jsx

import React from 'react';
import ProjectCard from '../components/ProjectCard'; // Daha sonra oluşturacağız
import projectsData from '../projectsData'; // Proje verilerini içe aktaracağız
import './ProjectsPage.css'; // Kendi stil dosyası

function ProjectsPage() {
  return (
    <section className="projects-section">
      <h2>Projelerim</h2>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsPage;
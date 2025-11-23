// src/components/ProjectCard.jsx

import React from 'react';
import './ProjectCard.css'; // Stil dosyamız

function ProjectCard({ project }) {
  return (
    <div className="project-card"> {/* Ana proje kutucuğu */}
      <h3>{project.title}</h3>
      <p className="project-description">{project.description}</p> {/* Proje açıklaması */}

      <div className="technologies-container"> {/* Teknolojileri sarmalayan kutu */}
        {project.technologies.map((tech, index) => (
            <span key={index} className="tech-badge">{tech}</span> 
        ))}
      </div>

      <div className="project-actions"> {/* Butonları sarmalayan kutu */}
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="github-button">
          GitHub'da Görüntüle
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
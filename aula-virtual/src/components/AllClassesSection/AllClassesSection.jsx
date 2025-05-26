import React from 'react';
import './AllClassesSection.css'; // For component-specific styles

const AllClassesSection = () => {
  const classes = [
    "Clase 1", "Clase 2", "Clase 3", "Clase 4", "Clase 5", "Clase 6", "Clase 7", "Clase 8",
    "Pre-Entrega Proyecto", "Clase 9", "Clase 10", "Clase 11", "Clase 12", "Clase 13",
    "Clase 14", "Clase 15", "Clase 16", "Proyecto Final"
  ];
  const icons = [
    "chalkboard", "laptop-code", "code-branch", "cogs", "project-diagram", "tasks", "file-alt", "graduation-cap",
    "flag-checkered", "lightbulb", "comments", "users", "database", "server", "network-wired", "cloud", "rocket", "trophy"
  ];

  return (
    <section className="all-classes-section">
      <h3>Todas las Clases y Proyectos</h3>
      <div className="row">
        {classes.map((className, index) => {
          const iconClass = icons[index % icons.length]; // Cycle through icons
          return (
            <div className="col-lg-2 col-md-3 col-sm-4 col-6" key={index}>
              <div className="class-module-card">
                <i className={`fas fa-${iconClass}`}></i>
                <p>{className}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AllClassesSection;

import React from 'react';
import './CourseTitle.css'; // For component-specific styles

const CourseTitle = () => {
  return (
    <section className="course-title-section">
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <h1>React JS</h1>
          <nav className="nav course-nav mt-2 mt-md-0">
            <a className="nav-link active" href="#">Curso</a>
            <a className="nav-link" href="#">Participantes</a>
            <a className="nav-link" href="#">Calificaciones</a>
            <a className="nav-link" href="#">Competencias</a>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default CourseTitle;

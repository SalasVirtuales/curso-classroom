import React from 'react';
import './ClassContentDetails.css'; // For component-specific styles

// This component will be displayed when a "Clase X" tab is active.
// The `activeClassName` prop will be something like "Clase 1", "Clase 2", etc.
const ClassContentDetails = ({ activeClassName }) => {
  if (!activeClassName || !activeClassName.startsWith('Clase')) {
    return null; // Don't render if no active class or not a "Clase" tab
  }

  return (
    <div id="classSpecificContent" className="class-content-details">
      <h4 id="classSpecificTitle">Contenido de {activeClassName}</h4>
      <div className="row">
        <div className="col-md-3 col-sm-6 mb-3">
          <div className="content-box">
            <i className="fas fa-book-open"></i>
            <p>Material de clase</p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mb-3">
          <div className="content-box">
            <i className="fas fa-chalkboard-teacher"></i>
            <p>Presentación de clase</p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mb-3">
          <div className="content-box">
            <i className="fas fa-pencil-ruler"></i>
            <p>Ejercicios prácticos</p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mb-3">
          <div className="content-box">
            <i className="fas fa-question-circle"></i>
            <p>Cuestionario</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassContentDetails;

import React from 'react';
import { Card as BootstrapCard } from 'react-bootstrap'; // Aliased to avoid name clash
import './Card.css';

const Card = ({ title, iconClass, isClase, onClick }) => {
  if (isClase) {
    return (
      <BootstrapCard
        className="rb-card-clase" // Custom class for styling
        onClick={onClick}
        data-titulo={title}
        // h-100 is applied by .rb-card-clase in Card.css
      >
        <BootstrapCard.Body className="d-flex flex-column justify-content-center align-items-center text-center"> {/* Centering content */}
          {/* iconClass is intentionally not used for isClase cards as per task description */}
          <BootstrapCard.Title as="h3" className="titulo-tarjeta">{title}</BootstrapCard.Title>
        </BootstrapCard.Body>
      </BootstrapCard>
    );
  } else {
    // Existing logic for non-Clase cards
    const cardClasses = `tarjeta-modulo`; // Removed 'clase' from here as it's handled above
    return (
      <div className={cardClasses} data-titulo={title} onClick={onClick}>
        <div className="contenido-tarjeta">
          {iconClass && <i className={`icono-tarjeta ${iconClass}`}></i>}
          <h3 className="titulo-tarjeta">{title}</h3>
        </div>
      </div>
    );
  }
};

export default Card;

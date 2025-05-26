import React from 'react';
import { Card as BootstrapCard } from 'react-bootstrap'; // Importa y renombra Card de react-bootstrap
import './Card.css'; // Asegúrate de que este archivo CSS contenga los estilos para .tarjeta-modulo y .rb-card-clase

const Card = ({ title, iconClass, isClase, onClick }) => {
  // Si la tarjeta es de tipo 'Clase', utiliza el componente Card de React-Bootstrap
  if (isClase) {
    return (
      <BootstrapCard
        className="rb-card-clase" // Clase personalizada para estilos específicos de tarjetas de clase con Bootstrap
        onClick={onClick}
        data-titulo={title}
        // La altura (h-100) se aplica a través de .rb-card-clase en Card.css
      >
        <BootstrapCard.Body className="d-flex flex-column justify-content-center align-items-center text-center">
          {/* Para las tarjetas de clase, no se usa iconClass según la descripción de la tarea */}
          <BootstrapCard.Title as="h3" className="titulo-tarjeta">{title}</BootstrapCard.Title>
        </BootstrapCard.Body>
      </BootstrapCard>
    );
  } else {
    // Para las tarjetas generales (no de Clase), se mantiene la estructura de div original
    const cardClasses = `tarjeta-modulo`; // La clase 'clase' se aplica solo a las tarjetas BootstrapCard
    return (
      <div className={cardClasses} data-titulo={title} onClick={onClick}>
        <div className="contenido-tarjeta">
          {/* Renderiza el icono solo si iconClass está presente */}
          {iconClass && <i className={`icono-tarjeta ${iconClass}`}></i>}
          <h3 className="titulo-tarjeta">{title}</h3>
        </div>
      </div>
    );
  }
};

export default Card;

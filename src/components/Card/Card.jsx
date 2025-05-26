import React from 'react';
import './Card.css';

const Card = ({ title, iconClass, isClase, onClick }) => {
  const cardClasses = `tarjeta-modulo ${isClase ? 'clase' : ''}`;

  return (
    <div className={cardClasses} data-titulo={title} onClick={onClick}>
      <div className="contenido-tarjeta">
        {iconClass && <i className={`icono-tarjeta ${iconClass}`}></i>}
        <h3 className="titulo-tarjeta">{title}</h3>
      </div>
    </div>
  );
};

export default Card;

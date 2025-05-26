import React from 'react';
import './Alert.css';

const Alert = ({ message, isVisible, onClose }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div id="alertaPersonalizada" className="alerta-personalizada">
      <p id="mensajeAlerta">{message}</p>
      <button className="boton-cerrar" onClick={onClose}>
        Cerrar
      </button>
    </div>
  );
};

export default Alert;

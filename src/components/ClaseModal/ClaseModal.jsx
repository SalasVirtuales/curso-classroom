import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './ClaseModal.css';

const ClaseModal = ({ show, onHide, claseTitle }) => {
  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{claseTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-options-container">
          <Button variant="outline-primary" className="modal-option-button">
            <i className="fas fa-book"></i>
            Materiales
          </Button>
          <Button variant="outline-primary" className="modal-option-button">
            <i className="fas fa-laptop-code"></i>
            Ejercicios
          </Button>
          <Button variant="outline-primary" className="modal-option-button">
            <i className="fas fa-tasks"></i>
            Cuestionario
          </Button>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ClaseModal;

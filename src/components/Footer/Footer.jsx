import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="pie-pagina"> {/* text-center is applied by .pie-pagina in Footer.css */}
      <div className="contenedor-principal container">
        <div className="row align-items-center">
          <div className="col-md-4 text-md-start mb-3 mb-md-0">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start">
              <img src="https://placehold.co/45x45/4A0072/FFFFFF?text=VB" alt="Logo Vamos Buenos Aires" className="logo-pie" />
              <span className="fw-bold me-3">Vamos Buenos Aires</span>
              <img src="https://placehold.co/45x45/00BFFF/FFFFFF?text=DA" alt="Logo Desde Adentro" className="logo-pie" />
              <span className="fw-bold">Desde adentro</span>
            </div>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <a href="#" className="enlace-social mx-1"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="enlace-social mx-1"><i className="fab fa-twitter"></i></a>
            <a href="#" className="enlace-social mx-1"><i className="fab fa-youtube"></i></a>
            <a href="#" className="enlace-social mx-1"><i className="fab fa-instagram"></i></a>
            <a href="#" className="enlace-social mx-1"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <div className="col-md-4 text-md-end">
            <p>© Buenos Aires Ciudad</p> {/* Added copyright symbol and text as per typical footers */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

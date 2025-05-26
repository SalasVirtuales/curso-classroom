import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Inicio');
  // Placeholder for Bootstrap collapse state
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const navLinks = ['Inicio', 'Participantes', 'Calificaciones', 'Competencias'];

  return (
    <nav className="barra-navegacion navbar navbar-expand-lg">
      <div className="contenedor-principal container-fluid">
        <a className="navbar-brand" href="#">
          <span className="marca-navegacion">
            <img src="https://placehold.co/45x45/4A0072/FFFFFF?text=BA" alt="Logo BA Aprende" />
            Buenos Aires Aprende
          </span>
        </a>
        <button className="navbar-toggler" type="button" onClick={handleNavCollapse} aria-controls="barraNavegacionContenido" aria-expanded={!isNavCollapsed} aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="barraNavegacionContenido">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {navLinks.map(link => (
              <li className="nav-item" key={link}>
                <a
                  className={`enlace-navegacion nav-link ${activeLink === link ? 'activo' : ''}`}
                  aria-current={activeLink === link ? 'page' : undefined}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent page reload
                    setActiveLink(link);
                  }}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

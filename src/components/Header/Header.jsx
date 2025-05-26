import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <section className="seccion-encabezado">
      <div className="container"> {/* This container was in the original HTML */}
        <h1 className="titulo-pagina">React JS</h1>
        <div className="marco-video">
          <span>Video de Introducción a React JS</span>
        </div>
      </div>
    </section>
  );
};

export default Header;

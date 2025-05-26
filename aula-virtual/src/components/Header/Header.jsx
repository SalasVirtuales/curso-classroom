import React from 'react';
import './Header.css'; // For component-specific styles if needed later

const Header = () => {
  return (
    <header className="header-main">
      <div className="container d-flex justify-content-between align-items-center py-2">
        <div>
          <a className="navbar-brand-custom" href="#">
            <img src="https://placehold.co/150x40/ffffff/2c3e50?text=Buenos+Aires+Aprende" alt="Buenos Aires Aprende Logo" style={{ height: '30px', borderRadius: '4px' }} />
          </a>
        </div>
        <nav className="user-nav">
          <a href="#">Página Principal</a>
          <a href="#">Área personal</a>
          <a href="#">Mis cursos</a>
          <a href="#"><i className="fas fa-user-circle fa-lg"></i></a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

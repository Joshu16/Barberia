import React from 'react';

const Header = ({ isScrolled }) => {
  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo">
            <h1>
              <a href="#home">Barbería Excelencia</a>
            </h1>
          </div>

          {/* Navigation */}
          <nav className="nav">
            <ul className="nav-list">
              <li><a href="#services" className="nav-link">Servicios</a></li>
              <li><a href="#gallery" className="nav-link">Galería</a></li>
              <li><a href="#team" className="nav-link">Equipo</a></li>
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="header-cta">
            <a href="#appointment" className="btn-primary">
              Agenda
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

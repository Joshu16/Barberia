import React, { useState } from 'react';
import './Header.css';

const Header = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

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

          {/* Desktop Navigation */}
          <nav className="nav desktop-nav">
            <ul className="nav-list">
              <li><a href="#services" className="nav-link">Servicios</a></li>
              <li><a href="#gallery" className="nav-link">Galería</a></li>
              <li><a href="#team" className="nav-link">Equipo</a></li>
              <li><a href="#reviews" className="nav-link">Reseñas</a></li>
              <li><a href="#location" className="nav-link">Ubicación</a></li>
            </ul>
          </nav>


          {/* CTA Button */}
          <div className="header-cta">
            <a href="#appointment" className="btn-navbar">
              Agenda
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-list">
            <li><a href="#services" className="mobile-nav-link" onClick={closeMobileMenu}>Servicios</a></li>
            <li><a href="#gallery" className="mobile-nav-link" onClick={closeMobileMenu}>Galería</a></li>
            <li><a href="#team" className="mobile-nav-link" onClick={closeMobileMenu}>Equipo</a></li>
            <li><a href="#reviews" className="mobile-nav-link" onClick={closeMobileMenu}>Reseñas</a></li>
            <li><a href="#location" className="mobile-nav-link" onClick={closeMobileMenu}>Ubicación</a></li>
            <li><a href="#appointment" className="mobile-nav-link cta" onClick={closeMobileMenu}>Agenda</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

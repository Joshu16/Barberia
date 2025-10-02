import React, { useState, useEffect } from 'react';
import { Calendar, Scissors } from 'lucide-react';
import './LandingPage.css';

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="landing-page">
      {/* Header */}
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
                <li><a href="#about" className="nav-link">Nosotros</a></li>
                <li><a href="#services" className="nav-link">Servicios</a></li>
                <li><a href="#contact" className="nav-link">Contacto</a></li>
                <li><a href="#barbers" className="nav-link">Barberos</a></li>
                <li><a href="#articles" className="nav-link">Artículos</a></li>
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

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-subtitle">BARBERIA EXCELENCIA</div>
              <h1 className="hero-title">Más que un corte, Una experiencia</h1>
              <p className="hero-description">
                Disfruta de la experiencia de grooming más relajada y profesional cada vez que entres a nuestra barbería.
              </p>
              <div className="hero-buttons">
                <a href="#appointment" className="btn-primary">
                  Agendar
                </a>
                <a href="#services" className="btn-secondary">
                  Servicios
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

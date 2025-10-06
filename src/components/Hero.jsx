import React from 'react';

const Hero = () => {
  return (
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
  );
};

export default Hero;

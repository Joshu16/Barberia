import React from 'react';
import './Team.css';

const Team = () => {
  return (
    <section id="team" className="team-section">
      <div className="container">
        <div className="team-header">
          <h2 className="team-title">Nuestro Equipo</h2>
          <p className="team-subtitle">Profesionales dedicados a tu estilo</p>
        </div>
        
        <div className="team-container">
          {/* Main Barber - Roxana */}
          <div className="main-barber-card">
            <div className="barber-image">
              <img src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=500&fit=crop&q=80" alt="Roxana - Barbera Principal" />
              <div className="barber-overlay">
                <div className="barber-badge">Principal</div>
              </div>
            </div>
            <div className="barber-content">
              <h3 className="barber-name">Roxana</h3>
              <p className="barber-title">Barbera Principal</p>
              <p className="barber-description">
                Con más de 10 años de experiencia, especialista en cortes clásicos y modernos. 
                Su pasión por la perfección garantiza resultados excepcionales.
              </p>
              <div className="barber-specialties">
                <span className="specialty">Cortes Clásicos</span>
                <span className="specialty">Barba Premium</span>
                <span className="specialty">Estilos Modernos</span>
              </div>
            </div>
          </div>

          {/* Team Members */}
          <div className="team-members">
            <div className="team-member-card">
              <div className="member-image">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&q=80" alt="Carlos" />
              </div>
              <h4 className="member-name">Carlos</h4>
              <p className="member-role">Barbero</p>
            </div>
            
            <div className="team-member-card">
              <div className="member-image">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&q=80" alt="Miguel" />
              </div>
              <h4 className="member-name">Miguel</h4>
              <p className="member-role">Barbero</p>
            </div>
            
            <div className="team-member-card">
              <div className="member-image">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&q=80" alt="Diego" />
              </div>
              <h4 className="member-name">Diego</h4>
              <p className="member-role">Barbero</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

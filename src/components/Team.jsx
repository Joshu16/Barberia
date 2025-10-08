import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Team.css';

const Team = () => {
  const [headerRef, isHeaderVisible] = useScrollAnimation(0.2);
  const [mainBarberRef, isMainBarberVisible] = useScrollAnimation(0.1);
  const [teamMembersRef, isTeamMembersVisible] = useScrollAnimation(0.1);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const membersVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const memberVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="team" className="team-section">
      <div className="container">
        <motion.div 
          ref={headerRef}
          className="team-header"
          variants={containerVariants}
          initial="hidden"
          animate={isHeaderVisible ? "visible" : "hidden"}
        >
          <h2 className="team-title">Nuestro Equipo</h2>
          <p className="team-subtitle">Profesionales dedicados a tu estilo</p>
        </motion.div>
        
        <div className="team-container">
          {/* Main Barber - Roxana */}
          <motion.div 
            ref={mainBarberRef}
            className="main-barber-card"
            variants={cardVariants}
            initial="hidden"
            animate={isMainBarberVisible ? "visible" : "hidden"}
          >
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
              <div className="barber-requires-booking">
                <span className="booking-required">Requiere agendar</span>
              </div>
            </div>
          </motion.div>

          {/* Team Members */}
          <motion.div 
            ref={teamMembersRef}
            className="team-members"
            variants={membersVariants}
            initial="hidden"
            animate={isTeamMembersVisible ? "visible" : "hidden"}
          >
            <motion.div 
              className="team-member-card"
              variants={memberVariants}
            >
              <div className="member-image">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&q=80" alt="Carlos" />
              </div>
              <h4 className="member-name">Carlos</h4>
              <p className="member-role">Barbero</p>
            </motion.div>
            
            <motion.div 
              className="team-member-card"
              variants={memberVariants}
            >
              <div className="member-image">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&q=80" alt="Miguel" />
              </div>
              <h4 className="member-name">Miguel</h4>
              <p className="member-role">Barbero</p>
            </motion.div>
            
            <motion.div 
              className="team-member-card"
              variants={memberVariants}
            >
              <div className="member-image">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&q=80" alt="Diego" />
              </div>
              <h4 className="member-name">Diego</h4>
              <p className="member-role">Barbero</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Team;

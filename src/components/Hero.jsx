import React from 'react';
import { motion } from 'framer-motion';
import { useBooking } from '../contexts/BookingContext';
import './Hero.css';

const Hero = () => {
  const { openBookingModal } = useBooking();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.8
      }
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-text">
            <motion.div 
              className="hero-subtitle"
              variants={itemVariants}
            >
              BARBERIA EXCELENCIA
            </motion.div>
            <motion.h1 
              className="hero-title"
              variants={itemVariants}
            >
              Más que un corte, Una experiencia
            </motion.h1>
            <motion.p 
              className="hero-description"
              variants={itemVariants}
            >
              Disfruta de la experiencia de grooming más relajada y profesional cada vez que entres a nuestra barbería.
            </motion.p>
            <motion.div 
              className="hero-buttons"
              variants={buttonVariants}
            >
              <button onClick={openBookingModal} className="btn-navbar">
                Agendar
              </button>
              <button className="btn-secondary" onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>
                Servicios
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { motion } from 'framer-motion';
import { useSiteSettings } from '../hooks/useSanityData';
import { useBooking } from '../contexts/BookingContext';
import './Hero.css';

const Hero = () => {
  const { data: settings, loading } = useSiteSettings();
  const { openBookingModal } = useBooking();

  // Valores por defecto si no hay datos de Sanity
  const heroSubtitle = settings?.heroSubtitle || 'BARBERIA EXCELENCIA';
  const heroTitle = settings?.heroTitle || 'Más que un corte, Una experiencia';
  const heroDescription = settings?.heroDescription || 'Disfruta de la experiencia de grooming más relajada y profesional cada vez que entres a nuestra barbería.';
  
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
              {heroSubtitle}
            </motion.div>
            <motion.h1 
              className="hero-title"
              variants={itemVariants}
            >
              {heroTitle}
            </motion.h1>
            <motion.p 
              className="hero-description"
              variants={itemVariants}
            >
              {heroDescription}
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

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useBooking } from '../contexts/BookingContext';
import { useSiteSettings } from '../hooks/useSanityData';
import './MapSection.css';

const MapSection = () => {
  const { data: settings } = useSiteSettings();
  const [headerRef, isHeaderVisible] = useScrollAnimation(0.2);
  const [mapRef, isMapVisible] = useScrollAnimation(0.1);
  const [infoRef, isInfoVisible] = useScrollAnimation(0.1);
  const { openBookingModal } = useBooking();

  const address = settings?.address || "Barberia Roxana, WQ74+RVR, Av. Central, San José, Cd Colón";
  const phone = settings?.phone || "+506 8382 3505";
  const email = settings?.email || "info@barberiaroxana.com";
  const googleMapsUrl = settings?.googleMapsUrl || "https://www.google.com/maps/search/?api=1&query=Barberia+Roxana+WQ74%2BRVR+Av.+Central+San+José+Cd+Colón";
  const schedule = settings?.schedule || [
    { day: "Lunes - Viernes", hours: "9:00 AM - 7:00 PM" },
    { day: "Sábados", hours: "8:00 AM - 6:00 PM" },
    { day: "Domingos", hours: "10:00 AM - 4:00 PM" }
  ];

  // Variantes de animación
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

  const mapVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.95,
      y: 30
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const infoVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
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
    <section id="location" className="map-section">
      <div className="container">
        <motion.div 
          ref={headerRef}
          className="map-header"
          variants={containerVariants}
          initial="hidden"
          animate={isHeaderVisible ? "visible" : "hidden"}
        >
          <h2 className="map-title">Visítanos</h2>
          <p className="map-subtitle">Ubicación y contacto</p>
        </motion.div>
        
        <div className="map-container">
          <motion.div 
            ref={mapRef}
            className="map-wrapper"
            variants={mapVariants}
            initial="hidden"
            animate={isMapVisible ? "visible" : "hidden"}
          >
            {googleMapsUrl ? (
              <iframe
                src={googleMapsUrl.includes('embed') ? googleMapsUrl : `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.123456789!2d-84.123456!3d9.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0ff16b05f60a9%3A0x815510e63ca4f416!2sBarberia%20Roxana!5e0!3m2!1ses!2scr!4v1234567890123!5m2!1ses!2scr`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Barberia Roxana"
              />
            ) : (
              <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#1a1a1a', color: '#999' }}>
                <p>Mapa no disponible</p>
              </div>
            )}
          </motion.div>
          
          <motion.div 
            ref={infoRef}
            className="map-info"
            variants={infoVariants}
            initial="hidden"
            animate={isInfoVisible ? "visible" : "hidden"}
          >
            <motion.div 
              className="info-card"
              variants={cardVariants}
            >
              <div className="info-header">
                <MapPin className="info-icon" />
                <h3 className="info-title">Ubicación</h3>
              </div>
              <p className="info-address">{address}</p>
            </motion.div>

            <motion.div 
              className="info-card"
              variants={cardVariants}
            >
              <div className="info-header">
                <Clock className="info-icon" />
                <h3 className="info-title">Horarios</h3>
              </div>
              <div className="schedule-list">
                {schedule.map((item, index) => (
                  <div key={index} className="schedule-item">
                    <span className="schedule-day">{item.day}</span>
                    <span className="schedule-hours">{item.hours}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="info-card"
              variants={cardVariants}
            >
              <div className="info-header">
                <Phone className="info-icon" />
                <h3 className="info-title">Contacto</h3>
              </div>
              <div className="contact-info">
                <a href={`tel:${phone}`} className="contact-link">
                  <Phone size={16} />
                  {phone}
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="map-cta"
              variants={cardVariants}
            >
              <button onClick={openBookingModal} className="cta-button">
                Agendar Cita
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;

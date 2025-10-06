import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import './MapSection.css';

const MapSection = () => {
  const address = "Barberia Roxana, WQ74+RVR, Av. Central, San José, Cd Colón";
  const phone = "+506 8382 3505";
  const email = "info@barberiaroxana.com";
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Barberia+Roxana+WQ74%2BRVR+Av.+Central+San+José+Cd+Colón";

  const schedule = [
    { day: "Lunes - Viernes", hours: "9:00 AM - 7:00 PM" },
    { day: "Sábados", hours: "8:00 AM - 6:00 PM" },
    { day: "Domingos", hours: "10:00 AM - 4:00 PM" }
  ];

  return (
    <section id="location" className="map-section">
      <div className="container">
        <div className="map-header">
          <h2 className="map-title">Visítanos</h2>
          <p className="map-subtitle">Ubicación y contacto</p>
        </div>
        
        <div className="map-container">
          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.123456789!2d-84.123456!3d9.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0ff16b05f60a9%3A0x815510e63ca4f416!2sBarberia%20Roxana!5e0!3m2!1ses!2scr!4v1234567890123!5m2!1ses!2scr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Barberia Roxana"
            />
          </div>
          
          <div className="map-info">
            <div className="info-card">
              <div className="info-header">
                <MapPin className="info-icon" />
                <h3 className="info-title">Ubicación</h3>
              </div>
              <p className="info-address">{address}</p>
            </div>

            <div className="info-card">
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
            </div>

            <div className="info-card">
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
            </div>
            
            <div className="map-cta">
              <a href="#" className="cta-button">
                Agendar Cita
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;

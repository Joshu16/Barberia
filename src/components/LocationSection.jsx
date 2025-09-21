import { MapPin, Phone, Clock } from 'lucide-react'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

const LocationSection = () => {
  const [ref, isIntersecting] = useIntersectionObserver()

  return (
    <section className={`location-section ${isIntersecting ? 'animate' : ''}`} id="contacto" ref={ref} aria-labelledby="location-title">
      <div className="container">
        <header className="section-header">
          <h2 id="location-title" className="section-title">UBICACIÓN</h2>
          <p className="section-description">
            Encuéntranos en el corazón de Ciudad Colón, San José. Fácil acceso y estacionamiento disponible.
          </p>
        </header>
        
        <div className="location-content">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.123456789!2d-84.1234567!3d9.8765432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e1234567890%3A0x1234567890abcdef!2sCiudad%20Col%C3%B3n%2C%20San%20Jos%C3%A9%2C%20Costa%20Rica!5e0!3m2!1ses!2scr!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Barbería Excelencia en Ciudad Colón"
            ></iframe>
          </div>
          
          <div className="location-info">
            <div className="info-item">
              <MapPin size={20} aria-hidden="true" />
              <div>
                <h3>Dirección</h3>
                <address>
                  WQ74+RVR, Av. Central<br />
                  San José, Cd Colón<br />
                  Costa Rica
                </address>
              </div>
            </div>
            
            <div className="info-item">
              <Phone size={20} aria-hidden="true" />
              <div>
                <h3>Teléfono</h3>
                <p>
                  <a href="tel:+50683823505" aria-label="Llamar a Barbería Excelencia">
                    (506) 8382-3505
                  </a>
                </p>
              </div>
            </div>
            
            <div className="info-item">
              <Clock size={20} aria-hidden="true" />
              <div>
                <h3>Horarios</h3>
                <dl>
                  <dt>Lunes - Viernes:</dt>
                  <dd>9:00 AM - 6:00 PM</dd>
                  <dt>Sábado - Domingo:</dt>
                  <dd>Cerrado</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationSection
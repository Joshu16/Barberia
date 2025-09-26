import { useState } from 'react'
import { Calendar } from 'lucide-react'
import { sectionImages } from '../config/images'
import BookingModal from './BookingModal'

const HeroSection = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  const handleAgendarClick = () => {
    setIsBookingModalOpen(true)
  }

  return (
    <section 
      className="hero-section" 
      id="inicio" 
      role="main" 
      aria-labelledby="hero-title"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${sectionImages.hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="hero-content">
        <div className="hero-text">
          <h1 id="hero-title" className="hero-title">
            MÁS QUE UN CORTE<br />
            UNA EXPERIENCIA
          </h1>
          <p className="hero-subtitle">
            Cortes modernos, afeitado clásico y cuidado de barba en Ciudad Colón.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn-primary hero-cta" 
              onClick={handleAgendarClick}
              aria-label="Agendar cita en Barbería Excelencia"
            >
              <Calendar size={20} />
              Agenda Aquí
            </button>
            <button 
              className="btn-secondary hero-services-btn" 
              onClick={() => document.getElementById('servicios').scrollIntoView({ behavior: 'smooth' })}
              aria-label="Ver nuestros servicios"
            >
              Servicios
            </button>
          </div>
        </div>
      </div>
      
      <BookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </section>
  )
}

export default HeroSection
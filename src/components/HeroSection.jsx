import { Calendar } from 'lucide-react'

const HeroSection = () => {
  const handleAgendarClick = () => {
    // Reemplaza con tu enlace real de Calendly
    window.open('https://calendly.com/barberia-excelencia', '_blank')
  }

  return (
    <section className="hero-section" id="inicio" role="main" aria-labelledby="hero-title">
      <div className="hero-content">
        <div className="hero-text">
          <h1 id="hero-title" className="hero-title">
            MÁS QUE UN CORTE, UNA EXPERIENCIA
          </h1>
          <p className="hero-subtitle">
            Cortes modernos, afeitado clásico y cuidado de barba en Ciudad Colón.
          </p>
          <button 
            className="btn-primary hero-cta" 
            onClick={handleAgendarClick}
            aria-label="Agendar cita en Barbería Excelencia"
          >
            <Calendar size={20} />
            Agenda Aquí
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
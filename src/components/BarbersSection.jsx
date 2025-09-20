import { Send } from 'lucide-react'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import { sectionImages } from '../config/images'

const BarbersSection = () => {
  const [ref, isIntersecting] = useIntersectionObserver()
  
  const barbers = [
    {
      name: 'Carlos Rodríguez',
      title: 'Barbero Maestro',
      image: sectionImages.team[0] // Carlos Rodriguez
    },
    {
      name: 'María González',
      title: 'Estilista Senior',
      image: sectionImages.team[1] // Corte de cabello (reemplazado)
    },
    {
      name: 'Juan Pérez',
      title: 'Barbero',
      image: sectionImages.team[2] // La silla (reemplazado)
    }
  ]

  return (
    <section className={`barbers-section ${isIntersecting ? 'animate' : ''}`} id="nosotros" ref={ref} aria-labelledby="barbers-title">
      <div className="container">
        <header className="section-header">
          <h2 id="barbers-title" className="section-title">CONOCE A NUESTROS EXPERTOS</h2>
          <p className="section-description">
            Cada miembro de nuestro equipo está comprometido a brindar una experiencia excepcional de barbería en Ciudad Colón.
          </p>
        </header>
        
        <div className="barbers-grid">
          {barbers.map((barber, index) => (
            <article key={index} className="barber-card">
              <div className="barber-image">
                <img 
                  src={barber.image} 
                  alt={`${barber.name} - ${barber.title} en Barbería Excelencia Ciudad Colón`}
                  loading="lazy"
                  width="400"
                  height="400"
                />
              </div>
              <div className="barber-info">
                <h3 className="barber-name">{barber.name}</h3>
                <p className="barber-title">{barber.title}</p>
              </div>
            </article>
          ))}
          
          <div className="recruitment-card recruitment-card-mobile">
            <div className="recruitment-image">
              <img src={sectionImages.recruitment} alt="Únete a nuestro equipo" />
            </div>
            <div className="recruitment-content">
              <h3>¿Te gustaría unirte a nuestro equipo?</h3>
              <button className="btn-primary">
                <Send size={16} />
                Enviar CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BarbersSection
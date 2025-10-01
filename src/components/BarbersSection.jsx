import React from 'react'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import images from '../config/images'
import './BarbersSection.css'

const BarbersSection = () => {
  const [ref, isIntersecting] = useIntersectionObserver()

  const barbers = [
    {
      id: 1,
      name: 'Carlos Mendoza',
      title: 'Barbero Principal',
      specialty: 'Cortes clásicos y modernos',
      experience: '8 años',
      image: images.barbers.carlos,
      social: {
        facebook: '#',
        instagram: '#',
        twitter: '#'
      }
    },
    {
      id: 2,
      name: 'Miguel Rodríguez',
      title: 'Especialista en Barbas',
      specialty: 'Afeitado clásico y cuidado de barba',
      experience: '6 años',
      image: images.barbers.miguel,
      social: {
        facebook: '#',
        instagram: '#',
        twitter: '#'
      }
    },
    {
      id: 3,
      name: 'Andrés Herrera',
      title: 'Cortes Modernos',
      specialty: 'Tendencias actuales y estilos únicos',
      experience: '5 años',
      image: images.barbers.andres,
      social: {
        facebook: '#',
        instagram: '#',
        twitter: '#'
      }
    },
    {
      id: 4,
      name: 'Luis Jiménez',
      title: 'Afeitado Clásico',
      specialty: 'Técnicas tradicionales con navaja',
      experience: '7 años',
      image: images.barbers.luis,
      social: {
        facebook: '#',
        instagram: '#',
        twitter: '#'
      }
    }
  ]

  return (
    <section 
      id="barbers" 
      ref={ref}
      className={`barbers-section ${isIntersecting ? 'fade-in-up' : ''}`}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Nuestros Barberos</h2>
          <p className="section-description">
            Conoce al equipo de profesionales que harán que te veas y te sientas increíble
          </p>
        </div>

        {/* Barbers Grid */}
        <div className="barbers-grid">
          {barbers.map((barber, index) => (
            <div 
              key={barber.id}
              className={`barber-card ${isIntersecting ? 'fade-in-up' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="barber-image">
                <img 
                  src={barber.image} 
                  alt={barber.name}
                  loading="lazy"
                />
                <div className="barber-overlay">
                  <div className="barber-info-overlay">
                    <h4 className="barber-name-overlay">{barber.name}</h4>
                    <p className="barber-title-overlay">{barber.title}</p>
                  </div>
                </div>
              </div>
              
              <div className="barber-content">
                <div className="barber-header">
                  <h3 className="barber-name">{barber.name}</h3>
                  <span className="barber-title">{barber.title}</span>
                </div>
                
                <div className="barber-details">
                  <p className="barber-specialty">
                    <span className="detail-icon">✂️</span>
                    {barber.specialty}
                  </p>
                  <p className="barber-experience">
                    <span className="detail-icon">⭐</span>
                    {barber.experience} de experiencia
                  </p>
                </div>
                
                <div className="barber-social">
                  <a href={barber.social.facebook} className="social-link" aria-label="Facebook">
                    📘
                  </a>
                  <a href={barber.social.instagram} className="social-link" aria-label="Instagram">
                    📷
                  </a>
                  <a href={barber.social.twitter} className="social-link" aria-label="Twitter">
                    🐦
                  </a>
                </div>
                
                <button className="barber-btn">
                  Reservar con {barber.name.split(' ')[0]}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="barbers-cta">
          <p className="cta-text">
            ¿Listo para experimentar el mejor servicio de barbería?
          </p>
          <button className="btn btn-primary">
            Agendar Cita
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="barbers-decorations">
        <div className="decoration decoration-1"></div>
        <div className="decoration decoration-2"></div>
      </div>
    </section>
  )
}

export default BarbersSection



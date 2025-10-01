import React from 'react'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import images from '../config/images'
import './ServicesSection.css'

const ServicesSection = () => {
  const [ref, isIntersecting] = useIntersectionObserver()

  const services = [
    {
      id: 1,
      title: 'Corte de Cabello',
      price: '$15',
      description: 'Corte moderno y profesional con las últimas tendencias',
      image: images.services.haircut,
      icon: '✂️'
    },
    {
      id: 2,
      title: 'Afeitado Clásico',
      price: '$12',
      description: 'Afeitado tradicional con navaja y productos premium',
      image: images.services.shave,
      icon: '🪒'
    },
    {
      id: 3,
      title: 'Corte + Barba',
      price: '$25',
      description: 'Combo perfecto: corte de cabello y arreglo de barba',
      image: images.services.beard,
      icon: '💇‍♂️'
    },
    {
      id: 4,
      title: 'Tratamiento Capilar',
      price: '$20',
      description: 'Tratamiento hidratante y nutritivo para el cabello',
      image: images.services.treatment,
      icon: '💆‍♂️'
    },
    {
      id: 5,
      title: 'Corte + Barba + Tratamiento',
      price: '$40',
      description: 'Experiencia completa: corte, barba y tratamiento',
      image: images.services.combo,
      icon: '👑'
    }
  ]

  return (
    <section 
      id="services" 
      ref={ref}
      className={`services-section ${isIntersecting ? 'fade-in-up' : ''}`}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <p className="section-accent">Boardroom</p>
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-description">
            Ofrecemos una amplia gama de servicios de barbería profesional 
            para satisfacer todas tus necesidades de grooming.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`service-card ${isIntersecting ? 'fade-in-up' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-image">
                <img 
                  src={service.image} 
                  alt={service.title}
                  loading="lazy"
                />
                <div className="service-overlay">
                  <span className="service-icon">{service.icon}</span>
                </div>
              </div>
              
              <div className="service-content">
                <div className="service-header">
                  <h3 className="service-title">{service.title}</h3>
                  <span className="service-price">{service.price}</span>
                </div>
                
                <p className="service-description">{service.description}</p>
                
                <button className="service-btn">
                  Reservar Ahora
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="services-cta">
          <p className="cta-text">
            ¿No encuentras lo que buscas? Contáctanos para servicios personalizados.
          </p>
          <button className="btn btn-outline-gold">
            Consultar Servicios
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="services-decorations">
        <div className="decoration decoration-razor"></div>
        <div className="decoration decoration-scissors"></div>
      </div>
    </section>
  )
}

export default ServicesSection



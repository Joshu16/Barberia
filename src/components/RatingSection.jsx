import React from 'react'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import './RatingSection.css'

const RatingSection = () => {
  const [ref, isIntersecting] = useIntersectionObserver()

  const reviews = [
    {
      id: 1,
      name: 'Carlos M.',
      rating: 5,
      comment: 'Excelente servicio, muy profesional y el corte quedó perfecto. Definitivamente regresaré.',
      date: 'Hace 2 días'
    },
    {
      id: 2,
      name: 'Miguel R.',
      rating: 5,
      comment: 'La mejor barbería de Ciudad Colón. El afeitado clásico es increíble, muy recomendado.',
      date: 'Hace 1 semana'
    },
    {
      id: 3,
      name: 'Andrés H.',
      rating: 5,
      comment: 'Ambiente relajante y barberos muy talentosos. El trato es excelente y los precios justos.',
      date: 'Hace 2 semanas'
    },
    {
      id: 4,
      name: 'Luis J.',
      rating: 5,
      comment: 'Servicio de primera calidad. El tratamiento capilar me dejó el cabello increíble.',
      date: 'Hace 3 semanas'
    }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index} 
        className={`star ${index < rating ? 'filled' : ''}`}
      >
        ⭐
      </span>
    ))
  }

  return (
    <section 
      id="rating" 
      ref={ref}
      className={`rating-section ${isIntersecting ? 'fade-in-up' : ''}`}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Lo que dicen nuestros clientes</h2>
          <p className="section-description">
            La satisfacción de nuestros clientes es nuestra mayor recompensa
          </p>
        </div>

        {/* Overall Rating */}
        <div className="overall-rating">
          <div className="rating-number">
            <span className="rating-value">4.9</span>
            <div className="rating-stars">
              {renderStars(5)}
            </div>
            <p className="rating-text">Basado en 50+ reseñas</p>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div 
              key={review.id}
              className={`review-card ${isIntersecting ? 'fade-in-up' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="review-header">
                <div className="review-info">
                  <h4 className="review-name">{review.name}</h4>
                  <div className="review-stars">
                    {renderStars(review.rating)}
                  </div>
                </div>
                <span className="review-date">{review.date}</span>
              </div>
              
              <p className="review-comment">"{review.comment}"</p>
              
              <div className="review-source">
                <span className="source-icon">📱</span>
                <span className="source-text">Google Reviews</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="rating-cta">
          <p className="cta-text">
            ¿Quieres ser parte de nuestros clientes satisfechos?
          </p>
          <button className="btn btn-primary">
            Reservar Ahora
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="rating-decorations">
        <div className="decoration decoration-1"></div>
        <div className="decoration decoration-2"></div>
        <div className="decoration decoration-3"></div>
      </div>
    </section>
  )
}

export default RatingSection



import React from 'react'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import images from '../config/images'
import './HeroSection.css'

const HeroSection = () => {
  const [ref, isIntersecting] = useIntersectionObserver()

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      ref={ref}
      className={`hero-section ${isIntersecting ? 'fade-in-up' : ''}`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${images.hero.background})`
      }}
    >
      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            {/* Logo */}
            <div className="hero-logo">
              <h1 className="hero-logo-text">BARBER SHOP</h1>
              <p className="hero-logo-subtitle">Boardroom</p>
            </div>

            {/* Main Headline */}
            <h2 className="hero-title">
              MÁS QUE UN CORTE<br />
              UNA EXPERIENCIA
            </h2>

            {/* Subtitle */}
            <p className="hero-subtitle">
              Cortes modernos, afeitado clásico y cuidado de barba en Ciudad Colón.
            </p>

            {/* Call to Action Buttons */}
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('booking')}
              >
                Agenda Aquí
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('services')}
              >
                Servicios
              </button>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="hero-navigation">
            <button 
              className="nav-arrow nav-arrow-up"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Scroll to top"
            >
              ↑
            </button>
            <button 
              className="nav-arrow nav-arrow-down"
              onClick={() => scrollToSection('about')}
              aria-label="Scroll to next section"
            >
              ↓
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="hero-decorations">
        <div className="decoration decoration-1"></div>
        <div className="decoration decoration-2"></div>
        <div className="decoration decoration-3"></div>
      </div>
    </section>
  )
}

export default HeroSection



import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import { sectionImages } from '../config/images'
import BookingModal from './BookingModal'

const ServicesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [ref, isIntersecting] = useIntersectionObserver()
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState(null)
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  const allServices = [
    {
      id: 1,
      name: 'CORTE DE CABELLO',
      price: '₡20,000',
      description: 'Corte profesional adaptado a tu estilo',
      image: sectionImages.services[0]
    },
    {
      id: 2,
      name: 'AFEITADO CLÁSICO',
      price: '₡18,000',
      description: 'Afeitado con navaja clásica',
      image: sectionImages.services[1]
    },
    {
      id: 3,
      name: 'CORTE + AFEITADO',
      price: '₡35,000',
      description: 'Paquete completo de grooming',
      image: sectionImages.services[2]
    },
    {
      id: 4,
      name: 'ARREGLO DE BARBA',
      price: '₡8,000',
      description: 'Diseño y mantenimiento de barba',
      image: sectionImages.services[3]
    },
    {
      id: 5,
      name: 'TRATAMIENTO FACIAL',
      price: '₡12,000',
      description: 'Cuidado facial completo',
      image: sectionImages.services[4]
    }
  ]

  const nextSlide = () => {
    if (isMobile) {
      setCurrentSlide((prev) => (prev + 1) % allServices.length)
    } else {
      const maxSlide = allServices.length - 3
      setCurrentSlide((prev) => (prev + 1) % (maxSlide + 1))
    }
  }

  const prevSlide = () => {
    if (isMobile) {
      setCurrentSlide((prev) => (prev - 1 + allServices.length) % allServices.length)
    } else {
      const maxSlide = allServices.length - 3
      setCurrentSlide((prev) => (prev - 1 + (maxSlide + 1)) % (maxSlide + 1))
    }
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const handleBookService = (service) => {
    setSelectedService(service)
    setIsBookingModalOpen(true)
  }

  // En móvil mostramos solo una card, en desktop 3
  const visibleServices = isMobile 
    ? [allServices[currentSlide]]
    : allServices.slice(currentSlide, currentSlide + 3)

  return (
    <section className={`services-section ${isIntersecting ? 'animate' : ''}`} id="servicios" ref={ref} aria-labelledby="services-title">
      <div className="container">
        <header className="section-header">
          <h2 id="services-title" className="section-title">NUESTROS SERVICIOS</h2>
          <p className="section-description">
            Servicios de grooming excepcionales adaptados a tu estilo personal en Ciudad Colón. 
            Desde cortes modernos hasta afeitado clásico, ofrecemos la mejor experiencia de barbería en San José.
          </p>
        </header>
        
        <div className="services-container">
          <button className="services-btn services-prev" onClick={prevSlide}>
            <ChevronLeft size={24} />
          </button>
          
          <div className="services-grid">
            {visibleServices.map((service) => (
              <article key={service.id} className="service-card">
                <div className="service-image">
                  <img 
                    src={service.image} 
                    alt={`${service.name} - ${service.description} en Barbería Excelencia Ciudad Colón`}
                    loading="lazy"
                    width="400"
                    height="300"
                  />
                </div>
                <div className="service-content">
                  <h3 className="service-name">{service.name}</h3>
                  <p className="service-description">{service.description}</p>
                  <div className="service-price" aria-label={`Precio: ${service.price}`}>{service.price}</div>
                  <a 
                    href="#"
                    className="service-book-link"
                    onClick={(e) => {
                      e.preventDefault()
                      handleBookService(service)
                    }}
                  >
                    <Calendar size={16} />
                    Agendar Cita
                  </a>
                </div>
              </article>
            ))}
          </div>
          
          <button className="services-btn services-next" onClick={nextSlide}>
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="services-dots">
          {isMobile 
            ? allServices.map((_, index) => (
                <button
                  key={index}
                  className={`services-dot ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))
            : Array.from({ length: allServices.length - 2 }).map((_, index) => (
                <button
                  key={index}
                  className={`services-dot ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))
          }
        </div>
      </div>
      
      <BookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        selectedService={selectedService}
      />
    </section>
  )
}

export default ServicesSection
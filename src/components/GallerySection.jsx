import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import { sectionImages } from '../config/images'

const GallerySection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [ref, isIntersecting] = useIntersectionObserver()
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  const galleryImages = [
    {
      id: 1,
      src: sectionImages.gallery[0],
      alt: 'Corte de cabello y arreglo de barba'
    },
    {
      id: 2,
      src: sectionImages.gallery[1],
      alt: 'Barbero trabajando en la silla'
    },
    {
      id: 3,
      src: sectionImages.gallery[2],
      alt: 'Servicio con fondo blanco'
    },
    {
      id: 4,
      src: sectionImages.gallery[3],
      alt: 'Cliente sonriente satisfecho'
    },
    {
      id: 5,
      src: sectionImages.gallery[4],
      alt: 'Herramientas de barbería'
    },
    {
      id: 6,
      src: sectionImages.gallery[5],
      alt: 'Carlos Rodriguez - Barbero profesional'
    },
    {
      id: 7,
      src: sectionImages.gallery[6],
      alt: 'Únete a nuestro equipo'
    }
  ]

  const nextSlide = () => {
    if (isMobile) {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
    } else {
      const maxSlide = galleryImages.length - 3
      setCurrentSlide((prev) => (prev + 1) % (maxSlide + 1))
    }
  }

  const prevSlide = () => {
    if (isMobile) {
      setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
    } else {
      const maxSlide = galleryImages.length - 3
      setCurrentSlide((prev) => (prev - 1 + (maxSlide + 1)) % (maxSlide + 1))
    }
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  // En móvil mostramos solo una imagen, en desktop 3
  const visibleImages = isMobile 
    ? [galleryImages[currentSlide]]
    : galleryImages.slice(currentSlide, currentSlide + 3)

  return (
    <section className={`gallery-section ${isIntersecting ? 'animate' : ''}`} id="galeria" ref={ref} aria-labelledby="gallery-title">
      <div className="container">
        <header className="section-header">
          <h2 id="gallery-title" className="section-title">DESCUBRE NUESTROS TRABAJOS</h2>
          <p className="section-description">
            Nuestro equipo está dedicado a su oficio. Técnicas y estilos actualizados para el mejor servicio de barbería en Ciudad Colón.
          </p>
        </header>
        
        <div className="gallery-container">
          <button className="gallery-btn gallery-prev" onClick={prevSlide}>
            <ChevronLeft size={24} />
          </button>
          
          <div className="gallery-grid">
            {visibleImages.map((image) => (
              <figure key={image.id} className="gallery-item">
                <img 
                  src={image.src} 
                  alt={`${image.alt} - Barbería Excelencia Ciudad Colón`}
                  loading="lazy"
                  width="500"
                  height="500"
                />
              </figure>
            ))}
          </div>
          
          <button className="gallery-btn gallery-next" onClick={nextSlide}>
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="gallery-dots">
          {isMobile 
            ? galleryImages.map((_, index) => (
                <button
                  key={index}
                  className={`gallery-dot ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))
            : Array.from({ length: galleryImages.length - 2 }).map((_, index) => (
                <button
                  key={index}
                  className={`gallery-dot ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))
          }
        </div>
      </div>
    </section>
  )
}

export default GallerySection
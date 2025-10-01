import React, { useState } from 'react'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import images from '../config/images'
import './GallerySection.css'

const GallerySection = () => {
  const [ref, isIntersecting] = useIntersectionObserver()
  const [selectedImage, setSelectedImage] = useState(null)

  const openModal = (image, index) => {
    setSelectedImage({ image, index })
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage) {
      const nextIndex = (selectedImage.index + 1) % images.gallery.length
      setSelectedImage({ image: images.gallery[nextIndex], index: nextIndex })
    }
  }

  const prevImage = () => {
    if (selectedImage) {
      const prevIndex = selectedImage.index === 0 ? images.gallery.length - 1 : selectedImage.index - 1
      setSelectedImage({ image: images.gallery[prevIndex], index: prevIndex })
    }
  }

  return (
    <section 
      id="gallery" 
      ref={ref}
      className={`gallery-section ${isIntersecting ? 'fade-in-up' : ''}`}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Galería de Trabajos</h2>
          <p className="section-description">
            Descubre la calidad de nuestro trabajo a través de nuestra galería de cortes y afeitados.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {images.gallery.map((image, index) => (
            <div 
              key={index}
              className={`gallery-item ${isIntersecting ? 'fade-in-up' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openModal(image, index)}
            >
              <div className="gallery-image">
                <img 
                  src={image} 
                  alt={`Trabajo ${index + 1}`}
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <div className="gallery-icon">🔍</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="gallery-cta">
          <p className="cta-text">
            ¿Te gusta lo que ves? Agenda tu cita y experimenta la diferencia.
          </p>
          <button className="btn btn-primary">
            Reservar Cita
          </button>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="gallery-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <button className="modal-prev" onClick={prevImage}>‹</button>
            <button className="modal-next" onClick={nextImage}>›</button>
            <img 
              src={selectedImage.image} 
              alt={`Trabajo ${selectedImage.index + 1}`}
              className="modal-image"
            />
            <div className="modal-info">
              <span className="modal-counter">
                {selectedImage.index + 1} / {images.gallery.length}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Decorative Elements */}
      <div className="gallery-decorations">
        <div className="decoration decoration-1"></div>
        <div className="decoration decoration-2"></div>
      </div>
    </section>
  )
}

export default GallerySection



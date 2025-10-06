import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Array de todas las imágenes de la galería
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&h=800&fit=crop&q=80",
      alt: "Corte clásico",
      thumbnail: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&h=400&fit=crop&q=80"
    },
    {
      src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=800&fit=crop&q=80",
      alt: "Barba premium",
      thumbnail: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=200&h=200&fit=crop&q=80"
    },
    {
      src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=800&fit=crop&q=80",
      alt: "Corte moderno",
      thumbnail: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=200&h=200&fit=crop&q=80"
    },
    {
      src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&h=800&fit=crop&q=80",
      alt: "Afeitado clásico",
      thumbnail: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=200&h=400&fit=crop&q=80"
    },
    {
      src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=800&fit=crop&q=80",
      alt: "Tratamiento capilar",
      thumbnail: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=200&h=200&fit=crop&q=80"
    },
    {
      src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=800&fit=crop&q=80",
      alt: "Corte + Barba",
      thumbnail: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=200&h=200&fit=crop&q=80"
    },
    {
      src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&h=800&fit=crop&q=80",
      alt: "Estilo premium",
      thumbnail: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=200&h=400&fit=crop&q=80"
    },
    {
      src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=800&fit=crop&q=80",
      alt: "Experiencia completa",
      thumbnail: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&h=400&fit=crop&q=80"
    }
  ];

  // Función para abrir el modal
  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevenir scroll del body
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'unset'; // Restaurar scroll del body
  };

  // Navegación entre imágenes
  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  // Manejo de teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;
      
      switch (e.key) {
        case 'Escape':
          closeModal();
          break;
        case 'ArrowLeft':
          goToPrevious();
          break;
        case 'ArrowRight':
          goToNext();
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, currentIndex]);

  return (
    <>
      <section id="gallery" className="gallery-section">
        <div className="container">
          <div className="gallery-header">
            <h2 className="gallery-title">Nuestro trabajo habla por si solo</h2>
          </div>
          
          <div className="gallery-masonry">
            <div className="gallery-item gallery-item-large">
              <img 
                src={galleryImages[0].thumbnail} 
                alt={galleryImages[0].alt}
                onClick={() => openModal(galleryImages[0], 0)}
                className="gallery-image"
              />
            </div>
            <div className="gallery-item">
              <img 
                src={galleryImages[1].thumbnail} 
                alt={galleryImages[1].alt}
                onClick={() => openModal(galleryImages[1], 1)}
                className="gallery-image"
              />
            </div>
            <div className="gallery-item">
              <img 
                src={galleryImages[2].thumbnail} 
                alt={galleryImages[2].alt}
                onClick={() => openModal(galleryImages[2], 2)}
                className="gallery-image"
              />
            </div>
            <div className="gallery-item gallery-item-tall">
              <img 
                src={galleryImages[3].thumbnail} 
                alt={galleryImages[3].alt}
                onClick={() => openModal(galleryImages[3], 3)}
                className="gallery-image"
              />
            </div>
            <div className="gallery-item">
              <img 
                src={galleryImages[4].thumbnail} 
                alt={galleryImages[4].alt}
                onClick={() => openModal(galleryImages[4], 4)}
                className="gallery-image"
              />
            </div>
            <div className="gallery-item">
              <img 
                src={galleryImages[5].thumbnail} 
                alt={galleryImages[5].alt}
                onClick={() => openModal(galleryImages[5], 5)}
                className="gallery-image"
              />
            </div>
            <div className="gallery-item gallery-item-tall">
              <img 
                src={galleryImages[6].thumbnail} 
                alt={galleryImages[6].alt}
                onClick={() => openModal(galleryImages[6], 6)}
                className="gallery-image"
              />
            </div>
            <div className="gallery-item gallery-item-large">
              <img 
                src={galleryImages[7].thumbnail} 
                alt={galleryImages[7].alt}
                onClick={() => openModal(galleryImages[7], 7)}
                className="gallery-image"
              />
            </div>
          </div>
          
          <div className="gallery-cta">
            <p className="gallery-cta-text">¿Querés un estilo así? Reservá tu cita</p>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedImage && (
        <>
          <div className="gallery-modal-overlay" onClick={closeModal}>
            <div className="gallery-modal" onClick={(e) => e.stopPropagation()}>
              <div className="gallery-modal-content">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt}
                  className="gallery-modal-image"
                />
                <div className="gallery-modal-info">
                  <h3 className="gallery-modal-title">{selectedImage.alt}</h3>
                  <p className="gallery-modal-counter">
                    {currentIndex + 1} de {galleryImages.length}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Botones fuera del modal para evitar problemas de posicionamiento */}
          <button className="gallery-modal-close" onClick={closeModal}>
            <X size={24} />
          </button>
          
          <button className="gallery-modal-prev" onClick={goToPrevious}>
            <ChevronLeft size={24} />
          </button>
          
          <button className="gallery-modal-next" onClick={goToNext}>
            <ChevronRight size={24} />
          </button>
        </>
      )}
    </>
  );
};

export default Gallery;

import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useGalleryImages } from '../hooks/useSanityData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useBooking } from '../contexts/BookingContext';
import { LoadingState, EmptyState } from './LoadingState';
import { getImageUrl, hasImage } from '../utils/imageHelpers';
import './Gallery.css';

const Gallery = () => {
  const { data: galleryData, loading } = useGalleryImages();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [headerRef, isHeaderVisible] = useScrollAnimation(0.2);
  const [galleryRef, isGalleryVisible] = useScrollAnimation(0.1);
  const { openBookingModal } = useBooking();

  // Transformar datos de Sanity al formato que usa el componente
  const galleryImages = useMemo(() => {
    if (!galleryData) return [];
    
    return galleryData.map((item) => {
      const imageUrl = getImageUrl(item);
      return {
        src: imageUrl,
        alt: item.alt || '',
        thumbnail: imageUrl,
        _id: item._id,
        hasImage: hasImage(item)
      };
    });
  }, [galleryData]);

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

  // Variantes de animación
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const galleryVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 30
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <section id="gallery" className="gallery-section">
        <div className="container">
          <motion.div 
            ref={headerRef}
            className="gallery-header"
            variants={containerVariants}
            initial="hidden"
            animate={isHeaderVisible ? "visible" : "hidden"}
          >
            <h2 className="gallery-title">Nuestro trabajo habla por si solo</h2>
          </motion.div>
          
          {loading && <LoadingState message="Cargando galería..." />}
          {!loading && (!galleryImages || galleryImages.length === 0) && (
            <EmptyState message="No hay imágenes en la galería. Sube imágenes desde el panel de Sanity." />
          )}
          {!loading && galleryImages && galleryImages.length > 0 && (
            <motion.div 
              ref={galleryRef}
              className="gallery-masonry"
              variants={galleryVariants}
              initial="hidden"
              animate="visible"
            >
            {galleryImages.map((image, index) => {
              // Determinar el tamaño de la imagen basado en su posición
              let itemClass = 'gallery-item';
              if (index === 0 || index === galleryImages.length - 1) {
                itemClass += ' gallery-item-large';
              } else if (index === 3 || index === 6) {
                itemClass += ' gallery-item-tall';
              }

              return (
                <motion.div 
                  key={image._id || index}
                  className={itemClass}
                  variants={itemVariants}
                  initial="visible"
                  animate="visible"
                >
                  {image.hasImage ? (
                    <img 
                      src={image.thumbnail} 
                      alt={image.alt}
                      onClick={() => openModal(image, index)}
                      className="gallery-image"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="gallery-image-placeholder">
                      <span>Sin imagen</span>
                      <small style={{ display: 'block', marginTop: '0.5rem', fontSize: '0.8rem', opacity: 0.5 }}>
                        Sube desde Sanity
                      </small>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
          )}
          
          <motion.div 
            className="gallery-cta"
            variants={containerVariants}
            initial="hidden"
            animate={isGalleryVisible ? "visible" : "hidden"}
            transition={{ delay: 0.8 }}
          >
            <p className="gallery-cta-text">¿Querés un estilo así? Reservá tu cita</p>
            <button onClick={openBookingModal} className="gallery-cta-button">
              Agendar Cita
            </button>
          </motion.div>
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

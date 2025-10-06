import React from 'react';

const Gallery = () => {
  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="gallery-header">
          <h2 className="gallery-title">Nuestro trabajo habla por si solo</h2>
        </div>
        
        <div className="gallery-masonry">
          <div className="gallery-item gallery-item-large">
            <img src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&h=400&fit=crop&q=80" alt="Corte clásico" />
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=200&h=200&fit=crop&q=80" alt="Barba premium" />
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=200&h=200&fit=crop&q=80" alt="Corte moderno" />
          </div>
          <div className="gallery-item gallery-item-tall">
            <img src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=200&h=400&fit=crop&q=80" alt="Afeitado clásico" />
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=200&h=200&fit=crop&q=80" alt="Tratamiento capilar" />
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=200&h=200&fit=crop&q=80" alt="Corte + Barba" />
          </div>
          <div className="gallery-item gallery-item-tall">
            <img src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=200&h=400&fit=crop&q=80" alt="Estilo premium" />
          </div>
          <div className="gallery-item gallery-item-large">
            <img src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&h=400&fit=crop&q=80" alt="Experiencia completa" />
          </div>
        </div>
        
        <div className="gallery-cta">
          <p className="gallery-cta-text">¿Querés un estilo así? Reservá tu cita</p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

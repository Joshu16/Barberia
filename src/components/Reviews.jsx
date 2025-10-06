import React from 'react';
import { Star, ExternalLink } from 'lucide-react';

const Reviews = () => {
  // Datos de reseñas
  const reviews = [
    {
      id: 1,
      name: "Carlos Mendoza",
      rating: 5,
      comment: "Excelente servicio, Roxana es muy profesional y el ambiente es relajante. Definitivamente volveré. El corte quedó perfecto y la atención al detalle es impresionante.",
      date: "Hace 2 semanas",
      profilePhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&q=80"
    },
    {
      id: 2,
      name: "Miguel Torres",
      rating: 5,
      comment: "El mejor corte que he tenido en mucho tiempo. La atención al detalle es impresionante y Roxana sabe exactamente lo que necesita tu cabello. Muy recomendado.",
      date: "Hace 1 mes",
      profilePhoto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&q=80"
    },
    {
      id: 3,
      name: "Diego Ramírez",
      rating: 5,
      comment: "Servicio de primera calidad. Roxana es una artista con las tijeras y el ambiente de la barbería es único. El precio es justo para la calidad que recibes.",
      date: "Hace 3 semanas",
      profilePhoto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face&q=80"
    },
    {
      id: 4,
      name: "Andrés López",
      rating: 5,
      comment: "Ambiente profesional y cortes impecables. Recomendado al 100%. La barbería tiene un estilo clásico pero moderno que me encanta.",
      date: "Hace 1 semana",
      profilePhoto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face&q=80"
    },
    {
      id: 5,
      name: "Roberto Silva",
      rating: 5,
      comment: "La mejor barbería de la zona. Roxana es una profesional excepcional y siempre queda satisfecho con el resultado. El lugar tiene un ambiente muy acogedor.",
      date: "Hace 2 meses",
      profilePhoto: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&crop=face&q=80"
    },
    {
      id: 6,
      name: "Fernando Castro",
      rating: 5,
      comment: "Servicio excepcional y precios justos. El lugar tiene un ambiente único y Roxana siempre hace un trabajo impecable. Muy recomendado para cualquier ocasión.",
      date: "Hace 3 semanas",
      profilePhoto: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face&q=80"
    }
  ];

  return (
    <section id="reviews" className="reviews-section">
      <div className="container">
        <div className="reviews-header">
          <h2 className="reviews-title">Lo que dicen nuestros clientes</h2>
          <p className="reviews-subtitle">Experiencias reales de quienes confían en nosotros</p>
        </div>
        
        <div className="reviews-grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <div className="review-rating">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={`star ${i < review.rating ? 'filled' : 'empty'}`}
                    />
                  ))}
                </div>
                <div className="review-date">{review.date}</div>
              </div>
              <p className="review-comment">"{review.comment}"</p>
              <div className="review-author">
                <div className="review-author-info">
                  {review.profilePhoto && (
                    <img 
                      src={review.profilePhoto} 
                      alt={review.name}
                      className="review-author-photo"
                    />
                  )}
                  <span className="review-author-name">- {review.name}</span>
                </div>
                <div className="google-badge">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Google
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="reviews-cta">
          <div className="reviews-cta-content">
            <h3 className="reviews-cta-title">¿Tuviste una buena experiencia?</h3>
            <p className="reviews-cta-text">Ayúdanos compartiendo tu opinión en Google</p>
            <a 
              href="https://www.google.com/search?client=opera-gx&hs=gLJ&sca_esv=2eb052a5461778fe&sxsrf=AE3TifNNa43Wan-HSTnO58UQWanEHMlaug:1759710749620&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E0VMEW74K0DRCD3_dc-U15RzlSj79TOsT61v3YlctnzG9AmVmBGoa8RvqiPlUyplGwY-ch4bvfd2VZBfGfhxqMloqj-2&q=Barberia+Roxana+Reviews&sa=X&ved=2ahUKEwjT0Y2xqY6QAxW3mbAFHTHiODQQ0bkNegQIMxAE&biw=1398&bih=743&dpr=1#lrd=0x8fa0ff16b05f60a9:0x815510e63ca4f416,3,,,"
              target="_blank"
              rel="noopener noreferrer"
              className="reviews-cta-btn"
            >
              <ExternalLink size={18} />
              Dejar Reseña en Google
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

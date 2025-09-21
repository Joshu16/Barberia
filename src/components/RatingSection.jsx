import { Star, Crown, Heart, ExternalLink } from 'lucide-react'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

const RatingSection = () => {
  const [ref, isIntersecting] = useIntersectionObserver()

  const handleLeaveReview = () => {
    // Enlace a Google Reviews de Barbería Roxana
    window.open('https://www.google.com/search?q=barberia+roxana&sca_esv=0214036f541d3286&hl=en-CR&gl=cr&sxsrf=AE3TifO6QG18d7J-KAB0VDgu_2WMM93IZA%3A1758425691513&ei=W3LPaPCIH8L-wbkPoNbEkAI&ved=0ahUKEwiwotOV9uiPAxVCfzABHSArESIQ4dUDCBA&uact=5&oq=barberia+roxana&gs_lp=Egxnd3Mtd2l6LXNlcnAiD2JhcmJlcmlhIHJveanaYTIEECMYJzIKEAAYgAQYChjLATIGEAAYFhgeMggQABgWGAoYHjIIEAAYgAQYogQyCBAAGIAEGKIEMgUQABjvBTIIEAAYgAQYogQyCBAAGIAEGKIESOELUABY-QpwAHgBkAEAmAGhAaABxA6qAQQxLjE0uAEDyAEA-AEBmAIPoAL-DsICCxAuGIAEGJECGIoFwgIREC4YgAQYsQMY0QMYxwEYigXCAg4QLhiABBixAxjRAxjHAcICCxAAGIAEGLEDGIoFwgILEC4YgAQYsQMYgwHCAggQABiABBixA8ICCxAuGIAEGNEDGMcBwgILEAAYgAQYsQMYgwHCAgoQABiABBhDGIoFwgIUEC4YgAQYsQMYxwEYmAUYigUYrwHCAgoQLhiABBhDGIoFwgINEAAYgAQYQxjJAxiKBcICCxAAGIAEGJIDGIoFwgIQEAAYgAQYsQMYgwEYFBiHAsICChAAGIAEGBQYhwLCAg0QLhiABBhDGNQCGIoFwgIFEAAYgATCAgsQLhiABBjHARivAcICCBAAGIAEGMsBwgIQEC4YgAQYFBiHAhjHARivAcICCDhAuGIAEGMcBGMsBGK8BmAMAkgcEMC4xNaAHmrQBsgcEMC4xNbgH_g7CBwUwLjYuOcgHMg&sclient=gws-wiz-serp#lrd=0x8fa0ff16b05f60a9:0x815510e63ca4f416,3,,,,', '_blank')
  }

  return (
    <section className={`rating-section ${isIntersecting ? 'animate' : ''}`} ref={ref} aria-labelledby="rating-title">
      <div className="container">
        <div className="rating-content">
          <div className="rating-info">
            <div className="rating-header">
              <h2 id="rating-title" className="rating-title">EXCELENCIA</h2>
              <Crown size={32} className="crown-icon" />
            </div>
            <p className="business-type">SALA DE BELLEZA & BARBER SHOP</p>
            <div className="rating-stars">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={24} 
                    className={i < 4 ? 'star-filled' : i < 4.5 ? 'star-half' : 'star-empty'} 
                    aria-hidden="true"
                  />
                ))}
              </div>
              <span className="rating-number">4.5</span>
              <span className="rating-reviews">(19)</span>
            </div>
            
            {/* Botón de reseña debajo de las estrellas */}
            <button onClick={handleLeaveReview} className="btn-primary leave-review-btn">
              Deja tu Reseña <ExternalLink size={20} />
            </button>
            <div className="rating-divider">
              <div className="divider-line"></div>
              <Heart size={16} className="heart-icon" />
              <div className="divider-line"></div>
            </div>
            <p className="owner-name">ROXANA SOTO</p>
            <p className="rating-description">
              Barber shop · Ciudad Colón, San José
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RatingSection

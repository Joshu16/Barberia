import { Star } from 'lucide-react'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

const RatingSection = () => {
  const [ref, isIntersecting] = useIntersectionObserver()

  return (
    <section className={`rating-section ${isIntersecting ? 'animate' : ''}`} ref={ref} aria-labelledby="rating-title">
      <div className="container">
        <div className="rating-content">
          <div className="rating-info">
            <h2 id="rating-title" className="rating-title">BARBERÍA EXCELENCIA</h2>
            <div className="rating-stars">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={20} 
                    className={i < 4 ? 'star-filled' : i < 4.5 ? 'star-half' : 'star-empty'} 
                    aria-hidden="true"
                  />
                ))}
              </div>
              <span className="rating-number">4.5</span>
              <span className="rating-reviews">(19)</span>
            </div>
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

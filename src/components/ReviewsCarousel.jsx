import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { reviews } from '../data/reviews';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useBooking } from '../contexts/BookingContext';
import './Reviews.css';

// Componente de estrella personalizada más angular
const AngularStar = ({ filled, size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={filled ? 'currentColor' : 'none'}
    stroke="currentColor"
    strokeWidth={filled ? 0 : 1}
    className="angular-star"
  >
    <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2L12 17.6l-6 3.6 2.4-7.2-6-4.8h7.6L12 2z" />
  </svg>
);

const ReviewsCarousel = () => {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const [hoveredCard, setHoveredCard] = React.useState(null);
  const swiperRef = useRef(null);
  const [headerRef, isHeaderVisible] = useScrollAnimation(0.2);
  const [carouselRef, isCarouselVisible] = useScrollAnimation(0.1);
  const [ctaRef, isCtaVisible] = useScrollAnimation(0.2);
  const { openBookingModal } = useBooking();

  // Funciones para manejar el hover
  const handleCardMouseEnter = (cardId) => {
    setHoveredCard(cardId);
  };

  const handleCardMouseLeave = () => {
    setHoveredCard(null);
  };

  // Controlar autoplay basado en hover
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper;
      
      const handleMouseEnter = () => {
        swiper.autoplay.stop();
      };
      
      const handleMouseLeave = () => {
        swiper.autoplay.start();
      };
      
      const swiperEl = swiper.el;
      swiperEl.addEventListener('mouseenter', handleMouseEnter);
      swiperEl.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        swiperEl.removeEventListener('mouseenter', handleMouseEnter);
        swiperEl.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

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

  const carouselVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  return (
    <section id="reviews" className="reviews-section">
      <div className="container">
        <motion.div 
          ref={headerRef}
          className="reviews-header"
          variants={containerVariants}
          initial="hidden"
          animate={isHeaderVisible ? "visible" : "hidden"}
        >
          <h2 className="reviews-title">Lo que dicen nuestros clientes</h2>
          <p className="reviews-subtitle">Experiencias reales de quienes confían en nosotros</p>
        </motion.div>
        
        <motion.div 
          ref={carouselRef}
          className="reviews-carousel"
          variants={carouselVariants}
          initial="hidden"
          animate={isCarouselVisible ? "visible" : "hidden"}
        >
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            loopFillGroupWithBlank={false}
            onSlideChange={(swiper) => {
              setActiveSlide(swiper.realIndex);
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            className="reviews-swiper"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div 
                  className={`review-card ${hoveredCard === review.id ? 'hovered' : ''} ${hoveredCard && hoveredCard !== review.id ? 'blurred' : ''}`}
                  onMouseEnter={() => handleCardMouseEnter(review.id)}
                  onMouseLeave={handleCardMouseLeave}
                >
                  <div className="review-content">
                    <p className="review-text">"{review.comment}"</p>
                    <div className="review-author">
                      <div className="author-info">
                        <span className="author-name">{review.name}</span>
                        <div className="review-rating">
                          {[...Array(5)].map((_, i) => (
                            <AngularStar
                              key={i}
                              size={16}
                              filled={i < review.rating}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="swiper-button-prev">
            <ChevronLeft size={16} strokeWidth={1} />
          </div>
          <div className="swiper-button-next">
            <ChevronRight size={16} strokeWidth={1} />
          </div>
        </motion.div>
        
        <motion.div 
          ref={ctaRef}
          className="reviews-cta"
          variants={containerVariants}
          initial="hidden"
          animate={isCtaVisible ? "visible" : "hidden"}
          transition={{ delay: 0.6 }}
        >
          <h3 className="cta-title">¿Tuviste una buena experiencia?</h3>
          <p className="cta-subtitle">Ayúdanos compartiendo tu opinión en Google</p>
          <a 
            href="https://www.google.com/search?client=opera-gx&hs=gLJ&sca_esv=2eb052a5461778fe&sxsrf=AE3TifNNa43Wan-HSTnO58UQWanEHMlaug:1759710749620&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E0VMEW74K0DRCD3_dc-U15RzlSj79TOsT61v3YlctnzG9AmVmBGoa8RvqiPlUyplGwY-ch4bvfd2VZBfGfhxqMloqj-2&q=Barberia+Roxana+Reviews&sa=X&ved=2ahUKEwjT0Y2xqY6QAxW3mbAFHTHiODQQ0bkNegQIMxAE&biw=1398&bih=743&dpr=1#lrd=0x8fa0ff16b05f60a9:0x815510e63ca4f416,3,,,"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            <ExternalLink size={16} />
            Dejar Reseña en Google
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;

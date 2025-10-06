import React, { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

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
  const swiperRef = useRef(null);

  // Reseñas reales de Google
  const reviews = [
    {
      id: 1,
      name: "Maria Lizano",
      rating: 5,
      comment: "Excelente atención, Roxana es muy profesional y el ambiente es relajante. Definitivamente volveré.",
      date: "Hace 3 meses",
      verified: true,
      localGuide: true
    },
    {
      id: 2,
      name: "Verónica Flores",
      rating: 5,
      comment: "Un lugar lindo y tranquilo, genial para venir en familia! Excelente servicio al cliente.",
      date: "Hace 2 años",
      verified: true
    },
    {
      id: 3,
      name: "Sergio Monge",
      rating: 5,
      comment: "Precio aceptable, calidad buena, técnica buena, bonito local. Usa navajilla larga y no los dedos, lo cual para mi es primordial.",
      date: "Hace 6 años",
      verified: true,
      localGuide: true
    },
    {
      id: 4,
      name: "Marconey Arguedas",
      rating: 5,
      comment: "Roxana es excelente. Te puede ayudar con todo.",
      date: "Hace 6 años",
      verified: true
    },
    {
      id: 5,
      name: "Irela Rocha",
      rating: 5,
      comment: "Excelente servicio, muy recomendado para cualquier ocasión.",
      date: "Hace 2 años",
      verified: true
    },
    {
      id: 6,
      name: "Alejandro José Morales León",
      rating: 5,
      comment: "Excelente servicio, ambiente profesional y cortes impecables.",
      date: "Hace 4 años",
      verified: true
    },
    {
      id: 7,
      name: "Cesar Jimenez",
      rating: 5,
      comment: "On Vogue - La mejor experiencia de barbería que he tenido.",
      date: "Hace 7 años",
      verified: true,
      localGuide: true
    },
    {
      id: 8,
      name: "ultra x el ser mas poderoso",
      rating: 5,
      comment: "La mejor peluquería de la zona, servicio excepcional.",
      date: "Hace 6 años",
      verified: true,
      localGuide: true
    },
    {
      id: 9,
      name: "Luis R Cordoba",
      rating: 5,
      comment: "Recomendado al 100%, Roxana es una profesional excepcional.",
      date: "Hace 6 años",
      verified: true,
      localGuide: true
    }
  ];

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

  return (
    <section id="reviews" className="reviews-section">
      <div className="container">
        <div className="reviews-header">
          <h2 className="reviews-title">Lo que dicen nuestros clientes</h2>
          <p className="reviews-subtitle">Experiencias reales de quienes confían en nosotros</p>
        </div>
        
        <div className="reviews-carousel">
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
                <div className="review-card">
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
        </div>
        
        <div className="reviews-cta">
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
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;

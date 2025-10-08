import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { services } from '../data/services';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useBooking } from '../contexts/BookingContext';
import './Services.css';

const Services = () => {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const [isHovering, setIsHovering] = React.useState(false);
  const swiperRef = useRef(null);
  const [headerRef, isHeaderVisible] = useScrollAnimation(0.2);
  const [carouselRef, isCarouselVisible] = useScrollAnimation(0.1);
  const { openBookingModal } = useBooking();

  // Controlar autoplay basado en hover
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      if (isHovering) {
        swiperRef.current.swiper.autoplay.stop();
      } else {
        swiperRef.current.swiper.autoplay.start();
      }
    }
  }, [isHovering]);


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
    <section id="services" className="services-section">
      <div className="container">
        <motion.div 
          ref={headerRef}
          className="services-header"
          variants={containerVariants}
          initial="hidden"
          animate={isHeaderVisible ? "visible" : "hidden"}
        >
          <h2 className="services-title">Nuestros Servicios</h2>
          <p className="services-subtitle">Descubre nuestra gama completa de servicios profesionales</p>
        </motion.div>
        
        <motion.div 
          ref={carouselRef}
          className={`services-carousel ${isHovering ? 'has-hover' : ''}`}
          variants={carouselVariants}
          initial="hidden"
          animate={isCarouselVisible ? "visible" : "hidden"}
        >
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
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
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="services-swiper"
          >
            {services.map((service) => (
              <SwiperSlide key={service.id}>
                <div 
                  className="service-card"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <div className="service-image">
                    <img src={service.image} alt={service.title} />
                    <div className="service-overlay">
                      <div className="service-duration">{service.duration}</div>
                    </div>
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                    <button className="service-btn" onClick={openBookingModal}>Agendar</button>
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
          className="custom-pagination"
          variants={containerVariants}
          initial="hidden"
          animate={isCarouselVisible ? "visible" : "hidden"}
          transition={{ delay: 0.6 }}
        >
          {services.map((_, index) => (
            <button
              key={index}
              className={`pagination-dot ${index === activeSlide ? 'active' : ''}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

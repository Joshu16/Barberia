import React, { useState, useEffect } from 'react';
import { Calendar, Scissors, ChevronLeft, ChevronRight, ScissorsIcon, Zap, Sparkles, Baby, Palette } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './LandingPage.css';

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animación del quote que se repite
  useEffect(() => {
    const firstQuote = document.querySelector('.quote-first[data-animate="true"]');
    const secondQuote = document.querySelector('.quote-second[data-animate="true"]');
    
    if (firstQuote && secondQuote) {
      const startAnimation = () => {
        // Mostrar primera frase
        firstQuote.classList.add('animate');
        secondQuote.classList.remove('animate');
        
        // Después de 6 segundos (4s escritura + 2s pausa)
        setTimeout(() => {
          firstQuote.classList.remove('animate');
          secondQuote.classList.add('animate');
          
          // Después de 3 segundos más, ocultar segunda y repetir
          setTimeout(() => {
            secondQuote.classList.remove('animate');
            setTimeout(() => {
              startAnimation(); // Repetir
            }, 1000); // Esperar 1 segundo antes de repetir
          }, 3000);
        }, 6000); // 4s escritura + 2s pausa
      };
      
      // Iniciar la animación
      startAnimation();
    }
  }, []);

  // Datos de servicios
  const services = [
    {
      id: 1,
      title: "Corte Clásico",
      description: "El corte tradicional que nunca pasa de moda. Perfecto para el caballero moderno.",
      price: "$25",
      duration: "45 min",
      image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&h=300&fit=crop&q=80"
    },
    {
      id: 2,
      title: "Barba Premium",
      description: "Arreglo completo de barba con técnicas profesionales y productos de alta calidad.",
      price: "$20",
      duration: "30 min",
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&h=300&fit=crop&q=80"
    },
    {
      id: 3,
      title: "Corte + Barba",
      description: "Combo completo: corte de cabello y arreglo de barba en una sola sesión.",
      price: "$40",
      duration: "60 min",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop&q=80"
    },
    {
      id: 4,
      title: "Afeitado Clásico",
      description: "Afeitado tradicional con navaja caliente y productos de primera calidad.",
      price: "$30",
      duration: "40 min",
      image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&h=300&fit=crop&q=80"
    },
    {
      id: 5,
      title: "Tratamiento Capilar",
      description: "Hidratación y cuidado profundo para el cabello y cuero cabelludo.",
      price: "$35",
      duration: "50 min",
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&h=300&fit=crop&q=80"
    },
    {
      id: 6,
      title: "Corte Moderno",
      description: "Tendencias actuales y cortes innovadores para el caballero contemporáneo.",
      price: "$30",
      duration: "50 min",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop&q=80"
    }
  ];


  return (
    <div className="landing-page">
      {/* Header */}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <div className="logo">
              <h1>
                <a href="#home">Barbería Excelencia</a>
              </h1>
            </div>

            {/* Navigation */}
            <nav className="nav">
              <ul className="nav-list">
                <li><a href="#about" className="nav-link">Nosotros</a></li>
                <li><a href="#services" className="nav-link">Servicios</a></li>
                <li><a href="#gallery" className="nav-link">Galería</a></li>
                <li><a href="#contact" className="nav-link">Contacto</a></li>
                <li><a href="#barbers" className="nav-link">Barberos</a></li>
                <li><a href="#articles" className="nav-link">Artículos</a></li>
              </ul>
            </nav>

            {/* CTA Button */}
            <div className="header-cta">
              <a href="#appointment" className="btn-primary">
                Agenda
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-subtitle">BARBERIA EXCELENCIA</div>
              <h1 className="hero-title">Más que un corte, Una experiencia</h1>
              <p className="hero-description">
                Disfruta de la experiencia de grooming más relajada y profesional cada vez que entres a nuestra barbería.
              </p>
              <div className="hero-buttons">
                <a href="#appointment" className="btn-primary">
                  Agendar
                </a>
                <a href="#services" className="btn-secondary">
                  Servicios
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-section">
        <div className="container">
          <div className="quote-container">
            <p className="quote-text quote-first" data-animate="true">Tu peinado es tu carta de presentación.</p>
            <p className="quote-text quote-second" data-animate="true">Úsalo bien.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <div className="services-header">
            <h2 className="services-title">Nuestros Servicios</h2>
            <p className="services-subtitle">Descubre nuestra gama completa de servicios profesionales</p>
          </div>
          
            <div className="services-carousel">
              <Swiper
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
                    <div className="service-card">
                      <div className="service-image">
                        <img src={service.image} alt={service.title} />
                        <div className="service-overlay">
                          <div className="service-duration">{service.duration}</div>
                        </div>
                      </div>
                      <div className="service-content">
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-description">{service.description}</p>
                        <button className="service-btn">Agendar</button>
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
          
          <div className="custom-pagination">
            {services.map((_, index) => (
              <button
                key={index}
                className={`pagination-dot ${index === activeSlide ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
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
    </div>
  );
};

export default LandingPage;

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Información Principal */}
          <div className="footer-section">
            <div className="footer-logo">
              <h3>Barbería Roxana</h3>
              <p>Tu estilo, nuestra pasión</p>
            </div>
            <div className="footer-description">
              <p>
                Especialistas en cortes de cabello y arreglo de barba. 
                Ofrecemos servicios premium con la más alta calidad 
                y atención personalizada para cada cliente.
              </p>
            </div>
          </div>

          {/* Servicios */}
          <div className="footer-section">
            <h4>Servicios</h4>
            <ul className="footer-links">
              <li><a href="#services">Cortes de Cabello</a></li>
              <li><a href="#services">Arreglo de Barba</a></li>
              <li><a href="#services">Tratamientos Faciales</a></li>
              <li><a href="#services">Grooming Premium</a></li>
              <li><a href="#services">Productos Especializados</a></li>
            </ul>
          </div>

          {/* Horarios */}
          <div className="footer-section">
            <h4>Horarios</h4>
            <div className="footer-schedule">
              <div className="schedule-item">
                <span>Lunes - Sábado</span>
                <span>9:00 AM - 7:00 PM</span>
              </div>
              <div className="schedule-item">
                <span>Domingo</span>
                <span>Cerrado</span>
              </div>
            </div>
          </div>

          {/* Contacto */}
          <div className="footer-section">
            <h4>Contacto</h4>
            <div className="footer-contact">
              <div className="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 12L10.5 14.5L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Barbería Profesional</span>
              </div>
              <div className="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 12L10.5 14.5L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 12L10.5 14.5L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>info@barberiaroxana.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Redes Sociales */}
        <div className="footer-social">
          <div className="social-links">
            <a href="#" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" stroke="currentColor" strokeWidth="2"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </a>
            <a href="#" aria-label="WhatsApp">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="footer-divider"></div>

        {/* Copyright */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <a 
              href="https://bysaborio.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-brand-link"
            >
              <span className="footer-brand-text">
                Desarrollado por <span className="footer-brand-name">BySaborío Digital Solutions</span>
              </span>
              <img 
                src="https://bysaborio.vercel.app/assets/Logo%20PNG-BvnbT45m.png" 
                alt="BySaborío Digital Solutions" 
                className="footer-brand-logo"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

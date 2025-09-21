import { Facebook, Instagram, MessageCircle } from 'lucide-react'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

const Footer = () => {
  const [ref, isIntersecting] = useIntersectionObserver()
  
  const handleWhatsAppClick = () => {
    // Número real de WhatsApp
    window.open('https://wa.me/50683823505', '_blank')
  }

  return (
    <footer className={`footer ${isIntersecting ? 'animate' : ''}`} ref={ref} role="contentinfo">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>BARBERÍA EXCELENCIA</h3>
            <address>
              WQ74+RVR, Av. Central<br />
              San José, Cd Colón<br />
              Costa Rica
            </address>
            <p>
              <a href="tel:+50683823505" aria-label="Llamar a Barbería Excelencia">
                (506) 8382-3505
              </a>
            </p>
            <p>
              <a href="mailto:info@barberiaexcelencia.com" aria-label="Enviar email a Barbería Excelencia">
                info@barberiaexcelencia.com
              </a>
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Horarios de Atención</h4>
            <dl>
              <dt>Lunes - Viernes:</dt>
              <dd>9:00 AM - 6:00 PM</dd>
              <dt>Sábado - Domingo:</dt>
              <dd>Cerrado</dd>
            </dl>
            
            <div className="social-links" role="group" aria-label="Enlaces sociales de Barbería Excelencia">
              <a 
                href="https://www.facebook.com" 
                className="social-link"
                aria-label="Síguenos en Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/barberiaexcelencia" 
                className="social-link"
                aria-label="Síguenos en Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
            </div>
            
            <button 
              className="btn-primary footer-cta" 
              onClick={handleWhatsAppClick}
              aria-label="Contactar por WhatsApp"
            >
              <MessageCircle size={16} />
              WhatsApp
            </button>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 BARBERÍA EXCELENCIA. Todos los derechos reservados | Desarrollado por BySaborío</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
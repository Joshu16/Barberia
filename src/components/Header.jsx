import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Header = ({ isMenuOpen, setIsMenuOpen, onAgendarClick }) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`} role="banner">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>
              <a href="#inicio" aria-label="Barbería Excelencia - Inicio">
                BARBERÍA EXCELENCIA
              </a>
            </h1>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`} role="navigation" aria-label="Navegación principal">
            <ul className="nav-list">
              <li><a href="#inicio" className="nav-link" onClick={closeMenu} aria-label="Ir a la sección de inicio">Inicio</a></li>
              <li><a href="#servicios" className="nav-link" onClick={closeMenu} aria-label="Ver nuestros servicios">Servicios</a></li>
              <li><a href="#nosotros" className="nav-link" onClick={closeMenu} aria-label="Conoce a nuestro equipo">Nosotros</a></li>
              <li><a href="#galeria" className="nav-link" onClick={closeMenu} aria-label="Ver galería de trabajos">Galería</a></li>
              <li><a href="#contacto" className="nav-link" onClick={closeMenu} aria-label="Información de contacto">Contacto</a></li>
              <li><button className="btn-secondary" onClick={() => { closeMenu(); onAgendarClick(); }} aria-label="Agendar cita">Agenda</button></li>
            </ul>
          </nav>
          
          <button 
            className="menu-toggle" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
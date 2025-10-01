import React, { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo">
            <h1 className="logo-text">BARBER SHOP</h1>
            <p className="logo-subtitle">Boardroom</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <ul className="nav-list">
              <li><button onClick={() => scrollToSection('about')} className="nav-link">About Us</button></li>
              <li className="nav-dropdown">
                <button className="nav-link">Services <span className="dropdown-arrow">▼</span></button>
                <div className="dropdown-menu">
                  <button onClick={() => scrollToSection('services')} className="dropdown-link">Nuestros Servicios</button>
                  <button onClick={() => scrollToSection('gallery')} className="dropdown-link">Galería</button>
                </div>
              </li>
              <li><button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button></li>
              <li><button onClick={() => scrollToSection('barbers')} className="nav-link">Barbers</button></li>
              <li><button onClick={() => scrollToSection('faq')} className="nav-link">Articles</button></li>
            </ul>
          </nav>

          {/* Contact Info */}
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">🌍</span>
              <span>United States</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <span>+13-86034215</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`mobile-menu-btn ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`nav-mobile ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-mobile-list">
            <li><button onClick={() => scrollToSection('about')} className="nav-mobile-link">About Us</button></li>
            <li><button onClick={() => scrollToSection('services')} className="nav-mobile-link">Services</button></li>
            <li><button onClick={() => scrollToSection('gallery')} className="nav-mobile-link">Gallery</button></li>
            <li><button onClick={() => scrollToSection('barbers')} className="nav-mobile-link">Barbers</button></li>
            <li><button onClick={() => scrollToSection('contact')} className="nav-mobile-link">Contact</button></li>
            <li><button onClick={() => scrollToSection('faq')} className="nav-mobile-link">FAQ</button></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header



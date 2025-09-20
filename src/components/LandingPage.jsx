import { useState } from 'react'
import Header from './Header'
import HeroSection from './HeroSection'
import ServicesSection from './ServicesSection'
import GallerySection from './GallerySection'
import BarbersSection from './BarbersSection'
import LocationSection from './LocationSection'
import FAQSection from './FAQSection'
import Footer from './Footer'

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="landing-page">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <BarbersSection />
      <LocationSection />
      <FAQSection />
      <Footer />
    </div>
  )
}

export default LandingPage

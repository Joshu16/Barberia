import { useState } from 'react'
import Header from './Header'
import HeroSection from './HeroSection'
import RatingSection from './RatingSection'
import ServicesSection from './ServicesSection'
import GallerySection from './GallerySection'
import BarbersSection from './BarbersSection'
import LocationSection from './LocationSection'
import FAQSection from './FAQSection'
import Footer from './Footer'
import BookingModal from './BookingModal'

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  return (
    <div className="landing-page">
      <Header 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen}
        onAgendarClick={() => setIsBookingModalOpen(true)}
      />
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <RatingSection />
      <BarbersSection />
      <LocationSection />
      <FAQSection />
      <Footer />
      
      <BookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  )
}

export default LandingPage

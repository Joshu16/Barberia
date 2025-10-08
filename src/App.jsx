import LandingPage from './components/LandingPage'
import BookingModal from './components/BookingModal'
import { BookingProvider, useBooking } from './contexts/BookingContext'
import './App.css'

function AppContent() {
  const { isBookingModalOpen, closeBookingModal } = useBooking();

  return (
    <div className="App">
      <LandingPage />
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={closeBookingModal} 
      />
    </div>
  )
}

function App() {
  return (
    <BookingProvider>
      <AppContent />
    </BookingProvider>
  )
}

export default App
import { useState, useEffect } from 'react'
import { X, ChevronRight, User, Scissors, Calendar, MessageCircle } from 'lucide-react'

const BookingModal = ({ isOpen, onClose, selectedService = null }) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    service: selectedService?.name || '',
    hairLength: '',
    phone: ''
  })

  const steps = [
    {
      id: 'name',
      title: '¿Cuál es tu nombre?',
      icon: <User size={24} />,
      type: 'text',
      placeholder: 'Escribe tu nombre completo'
    },
    {
      id: 'gender',
      title: '¿Cuál es tu género?',
      icon: <User size={24} />,
      type: 'select',
      options: [
        { value: 'masculino', label: 'Masculino' },
        { value: 'femenino', label: 'Femenino' },
        { value: 'otro', label: 'Otro' }
      ]
    },
    ...(selectedService ? [] : [{
      id: 'service',
      title: '¿Qué servicio te interesa?',
      icon: <Scissors size={24} />,
      type: 'select',
      options: [
        { value: 'CORTE DE CABELLO', label: 'Corte de Cabello - ₡20,000' },
        { value: 'AFEITADO CLÁSICO', label: 'Afeitado Clásico - ₡18,000' },
        { value: 'CORTE + AFEITADO', label: 'Corte + Afeitado - ₡35,000' },
        { value: 'ARREGLO DE BARBA', label: 'Arreglo de Barba - ₡8,000' },
        { value: 'TRATAMIENTO FACIAL', label: 'Tratamiento Facial - ₡12,000' }
      ]
    }]),
    {
      id: 'hairLength',
      title: '¿Cuál es el largo de tu cabello?',
      icon: <Scissors size={24} />,
      type: 'select',
      options: [
        { value: 'muy-corto', label: 'Muy corto (buzz cut)' },
        { value: 'corto', label: 'Corto' },
        { value: 'medio', label: 'Medio' },
        { value: 'largo', label: 'Largo' },
        { value: 'muy-largo', label: 'Muy largo' }
      ]
    },
    {
      id: 'phone',
      title: '¿Cuál es tu número de WhatsApp?',
      icon: <MessageCircle size={24} />,
      type: 'text',
      placeholder: 'Ej: 8888-8888'
    }
  ]

  useEffect(() => {
    if (isOpen) {
      setCurrentStep(0)
      setFormData({
        name: '',
        gender: '',
        service: selectedService?.name || '',
        hairLength: '',
        phone: ''
      })
    }
  }, [isOpen, selectedService])

  const handleInputChange = (value) => {
    setFormData(prev => ({
      ...prev,
      [steps[currentStep].id]: value
    }))
  }

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1)
    } else {
      generateWhatsAppMessage()
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const generateWhatsAppMessage = () => {
    const servicePrice = selectedService?.price || getServicePrice(formData.service)
    const hairLengthText = {
      'muy-corto': 'muy corto (buzz cut)',
      'corto': 'corto',
      'medio': 'medio',
      'largo': 'largo',
      'muy-largo': 'muy largo'
    }[formData.hairLength] || formData.hairLength

    const message = `¡Hola! Me gustaría agendar una cita en Barbería Roxana 🎯

👤 *Nombre:* ${formData.name}
⚧ *Género:* ${formData.gender}
✂️ *Servicio:* ${formData.service} - ${servicePrice}
📏 *Largo del cabello:* ${hairLengthText}
📱 *WhatsApp:* ${formData.phone}

¿Podrían ayudarme a encontrar un horario disponible? ¡Gracias! 😊

---
*Desarrollado por BySaborio Digital Solutions*`

    const whatsappUrl = `https://wa.me/50683823505?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    onClose()
  }

  const getServicePrice = (service) => {
    const prices = {
      'CORTE DE CABELLO': '₡20,000',
      'AFEITADO CLÁSICO': '₡18,000',
      'CORTE + AFEITADO': '₡35,000',
      'ARREGLO DE BARBA': '₡8,000',
      'TRATAMIENTO FACIAL': '₡12,000'
    }
    return prices[service] || ''
  }

  const isCurrentStepValid = () => {
    const currentStepData = formData[steps[currentStep].id]
    return currentStepData && currentStepData.trim() !== ''
  }

  if (!isOpen) return null

  return (
    <div className="booking-modal-overlay">
      <div className="booking-modal">
        <div className="booking-modal-header">
          <div className="booking-progress">
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              ></div>
            </div>
            <span className="progress-text">
              {currentStep + 1} de {steps.length}
            </span>
          </div>
          <button className="close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="booking-modal-content">
          <div className="step-icon">
            {steps[currentStep].icon}
          </div>
          
          <h2 className="step-title">{steps[currentStep].title}</h2>
          
          <div className="step-content">
            {steps[currentStep].type === 'text' ? (
              <input
                type="text"
                value={formData[steps[currentStep].id]}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder={steps[currentStep].placeholder}
                className="booking-input"
                autoFocus
              />
            ) : (
              <div className="options-grid">
                {steps[currentStep].options.map((option) => (
                  <button
                    key={option.value}
                    className={`option-btn ${formData[steps[currentStep].id] === option.value ? 'selected' : ''}`}
                    onClick={() => handleInputChange(option.value)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="booking-actions">
            {currentStep > 0 && (
              <button className="btn-secondary" onClick={prevStep}>
                Anterior
              </button>
            )}
            <button 
              className="btn-primary" 
              onClick={nextStep}
              disabled={!isCurrentStepValid()}
            >
              {currentStep === steps.length - 1 ? (
                <>
                  <MessageCircle size={20} />
                  Agendar en WhatsApp
                </>
              ) : (
                <>
                  Siguiente
                  <ChevronRight size={20} />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingModal

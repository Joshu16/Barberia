import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, User, Scissors, Clock } from 'lucide-react';
import './BookingModal.css';

const BookingModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    hairLength: '',
    date: '',
    time: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Servicios disponibles (se actualizará con datos reales)
  const services = [
    { id: 'corte-clasico', name: 'Corte Clásico', duration: '45 min', price: '$25' },
    { id: 'barba-premium', name: 'Barba Premium', duration: '30 min', price: '$20' },
    { id: 'corte-barba', name: 'Corte + Barba', duration: '60 min', price: '$40' },
    { id: 'afeitado-clasico', name: 'Afeitado Clásico', duration: '40 min', price: '$30' },
    { id: 'tratamiento-capilar', name: 'Tratamiento Capilar', duration: '50 min', price: '$35' },
    { id: 'corte-moderno', name: 'Corte Moderno', duration: '50 min', price: '$30' }
  ];

  const hairLengths = [
    { id: 'corto', name: 'Corto' },
    { id: 'medio', name: 'Medio' },
    { id: 'largo', name: 'Largo' }
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
    '6:00 PM', '6:30 PM'
  ];

  // Obtener fecha mínima (2 días después de hoy)
  const getMinDate = () => {
    const today = new Date();
    today.setDate(today.getDate() + 2);
    return today.toISOString().split('T')[0];
  };

  // Obtener días disponibles (excluyendo domingos)
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    today.setDate(today.getDate() + 2);
    
    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Excluir domingos (0)
      if (date.getDay() !== 0) {
        dates.push({
          value: date.toISOString().split('T')[0],
          label: date.toLocaleDateString('es-ES', { 
            weekday: 'long', 
            day: 'numeric', 
            month: 'long' 
          })
        });
      }
    }
    return dates;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Crear mensaje para WhatsApp
    const selectedService = services.find(s => s.id === formData.service);
    const selectedHairLength = hairLengths.find(h => h.id === formData.hairLength);
    const selectedDate = new Date(formData.date).toLocaleDateString('es-ES', {
      weekday: 'long',
      day: 'numeric',
      month: 'long'
    });

    const message = `¡Hola! Me gustaría agendar una cita:

👤 *Nombre:* ${formData.name}
✂️ *Servicio:* ${selectedService?.name} (${selectedService?.duration})
💇 *Longitud del cabello:* ${selectedHairLength?.name}
📅 *Fecha:* ${selectedDate}
🕐 *Hora:* ${formData.time}

¿Está disponible este horario?`;

    // Redirigir a WhatsApp
    const whatsappUrl = `https://wa.me/50683823505?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    setIsSubmitting(false);
    onClose();
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.name.trim().length >= 2;
      case 2:
        return formData.service !== '';
      case 3:
        return formData.hairLength !== '';
      case 4:
        return formData.date !== '' && formData.time !== '';
      default:
        return false;
    }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 50
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2
      }
    }
  };

  const stepVariants = {
    hidden: { 
      opacity: 0, 
      x: 20
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      x: -20,
      transition: {
        duration: 0.2
      }
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="booking-modal-overlay" onClick={onClose}>
        <motion.div 
          className="booking-modal"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="booking-modal-header">
            <div className="booking-modal-title">
              <Calendar className="booking-icon" />
              <h2>Agendar Cita</h2>
            </div>
            <button className="booking-close-btn" onClick={onClose}>
              <X size={20} />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="booking-progress">
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${(currentStep / 4) * 100}%` }}
              />
            </div>
            <span className="progress-text">Paso {currentStep} de 4</span>
          </div>

          {/* Content */}
          <div className="booking-modal-content">
            <AnimatePresence mode="wait">
              {/* Step 1: Nombre */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  variants={stepVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="booking-step"
                >
                  <div className="step-header">
                    <User className="step-icon" />
                    <h3>¿Cuál es tu nombre?</h3>
                    <p>Necesitamos tu nombre para la reserva</p>
                  </div>
                  <div className="step-content">
                    <input
                      type="text"
                      placeholder="Tu nombre completo"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="booking-input"
                      autoFocus
                    />
                  </div>
                </motion.div>
              )}

              {/* Step 2: Servicio */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  variants={stepVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="booking-step"
                >
                  <div className="step-header">
                    <Scissors className="step-icon" />
                    <h3>¿Qué servicio necesitas?</h3>
                    <p>Selecciona el servicio que deseas</p>
                  </div>
                  <div className="step-content">
                    <div className="services-grid">
                      {services.map((service) => (
                        <button
                          key={service.id}
                          className={`service-option ${formData.service === service.id ? 'selected' : ''}`}
                          onClick={() => handleInputChange('service', service.id)}
                        >
                          <div className="service-info">
                            <span className="service-name">{service.name}</span>
                            <span className="service-details">{service.duration} • {service.price}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Longitud del cabello */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  variants={stepVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="booking-step"
                >
                  <div className="step-header">
                    <User className="step-icon" />
                    <h3>¿Qué longitud tiene tu cabello?</h3>
                    <p>Esto nos ayuda a preparar mejor el servicio</p>
                  </div>
                  <div className="step-content">
                    <div className="hair-length-options">
                      {hairLengths.map((length) => (
                        <button
                          key={length.id}
                          className={`hair-option ${formData.hairLength === length.id ? 'selected' : ''}`}
                          onClick={() => handleInputChange('hairLength', length.id)}
                        >
                          {length.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Fecha y hora */}
              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  variants={stepVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="booking-step"
                >
                  <div className="step-header">
                    <Clock className="step-icon" />
                    <h3>¿Cuándo prefieres venir?</h3>
                    <p>Selecciona fecha y hora disponible</p>
                  </div>
                  <div className="step-content">
                    <div className="datetime-selection">
                      <div className="date-selection">
                        <label>Fecha</label>
                        <select
                          value={formData.date}
                          onChange={(e) => handleInputChange('date', e.target.value)}
                          className="booking-select"
                        >
                          <option value="">Selecciona una fecha</option>
                          {getAvailableDates().map((date) => (
                            <option key={date.value} value={date.value}>
                              {date.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="time-selection">
                        <label>Hora</label>
                        <select
                          value={formData.time}
                          onChange={(e) => handleInputChange('time', e.target.value)}
                          className="booking-select"
                        >
                          <option value="">Selecciona una hora</option>
                          {timeSlots.map((time) => (
                            <option key={time} value={time}>
                              {time}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer */}
          <div className="booking-modal-footer">
            {currentStep > 1 && (
              <button className="btn-secondary" onClick={handleBack}>
                Atrás
              </button>
            )}
            <div className="footer-spacer" />
            {currentStep < 4 ? (
              <button 
                className="btn-primary" 
                onClick={handleNext}
                disabled={!isStepValid()}
              >
                Siguiente
              </button>
            ) : (
              <button 
                className="btn-primary" 
                onClick={handleSubmit}
                disabled={!isStepValid() || isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Agendar en WhatsApp'}
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BookingModal;

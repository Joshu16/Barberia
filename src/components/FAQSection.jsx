import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

const FAQSection = () => {
  const [ref, isIntersecting] = useIntersectionObserver()
  const [openFAQ, setOpenFAQ] = useState(null)

  const faqs = [
    {
      id: 1,
      question: "¿Dónde está ubicada Barbería Excelencia?",
      answer: "Barbería Excelencia está ubicada en el Centro Comercial Plaza Real, Local 15, en Ciudad Colón, San José, Costa Rica. Tenemos fácil acceso y estacionamiento disponible para nuestros clientes."
    },
    {
      id: 2,
      question: "¿Cuáles son los horarios de atención?",
      answer: "Nuestros horarios son: Lunes a Sábado de 9:00 AM a 6:00 PM y Domingos de 10:00 AM a 4:00 PM. Cerramos los días feriados nacionales."
    },
    {
      id: 3,
      question: "¿Necesito hacer cita previa?",
      answer: "Sí, recomendamos hacer cita previa para garantizar tu espacio y evitar esperas. Puedes agendar a través de nuestro sitio web, llamando al (506) 8382-3505 o por WhatsApp."
    },
    {
      id: 4,
      question: "¿Qué servicios ofrecen?",
      answer: "Ofrecemos corte de cabello, afeitado clásico, arreglo de barba, tratamientos faciales y paquetes completos de grooming masculino. Todos nuestros servicios incluyen productos de alta calidad."
    },
    {
      id: 5,
      question: "¿Cuáles son los precios de los servicios?",
      answer: "Nuestros precios van desde ₡8,000 para arreglo de barba hasta ₡35,000 para el paquete completo. Ofrecemos descuentos para estudiantes y paquetes familiares."
    },
    {
      id: 6,
      question: "¿Aceptan tarjetas de crédito?",
      answer: "Sí, aceptamos efectivo, tarjetas de crédito y débito. También ofrecemos facilidades de pago para servicios múltiples."
    }
  ]

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  return (
    <section className={`faq-section ${isIntersecting ? 'animate' : ''}`} ref={ref} aria-labelledby="faq-title">
      <div className="container">
        <header className="section-header">
          <h2 id="faq-title" className="section-title">PREGUNTAS FRECUENTES</h2>
          <p className="section-description">
            Resolvemos las dudas más comunes sobre nuestros servicios de barbería en Ciudad Colón.
          </p>
        </header>
        
        <div className="faq-container">
          {faqs.map((faq) => (
            <div key={faq.id} className="faq-item">
              <button
                className="faq-question"
                onClick={() => toggleFAQ(faq.id)}
                aria-expanded={openFAQ === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <span>{faq.question}</span>
                {openFAQ === faq.id ? (
                  <ChevronUp size={20} aria-hidden="true" />
                ) : (
                  <ChevronDown size={20} aria-hidden="true" />
                )}
              </button>
              <div
                id={`faq-answer-${faq.id}`}
                className={`faq-answer ${openFAQ === faq.id ? 'open' : ''}`}
                aria-hidden={openFAQ !== faq.id}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection

import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [showAll, setShowAll] = useState(false);
  const [openItems, setOpenItems] = useState({});

  const faqData = [
    {
      question: "¿Cuáles son los horarios de atención?",
      answer: "Nuestro horario es de lunes a sábado de 9:00 AM a 7:00 PM. Los domingos estamos cerrados para que nuestro equipo pueda descansar y estar al 100% para la próxima semana."
    },
    {
      question: "¿Necesito agendar una cita o puedo llegar sin cita?",
      answer: "Recomendamos agendar tu cita con anticipación para garantizar tu lugar. Aunque aceptamos clientes sin cita, el tiempo de espera puede variar según la disponibilidad del momento."
    },
    {
      question: "¿Qué servicios ofrecen?",
      answer: "Ofrecemos cortes de cabello clásicos y modernos, arreglo de barba, tratamientos faciales, servicios de grooming premium, y productos especializados para el cuidado personal masculino."
    },
    {
      question: "¿Cuánto tiempo dura una sesión promedio?",
      answer: "Un corte de cabello estándar toma entre 30-45 minutos, mientras que un servicio completo con barba puede durar hasta 60 minutos. Esto nos permite dedicar el tiempo necesario para lograr la perfección."
    },
    {
      question: "¿Aceptan pagos con tarjeta?",
      answer: "Sí, aceptamos efectivo, tarjetas de débito y crédito, y también transferencias bancarias. Nuestro objetivo es hacer que tu experiencia sea lo más cómoda posible."
    },
    {
      question: "¿Tienen productos para la venta?",
      answer: "Sí, contamos con una selección cuidadosa de productos premium para el cuidado del cabello y la barba, incluyendo pomadas, aceites, champús especializados y herramientas de grooming."
    },
    {
      question: "¿Ofrecen servicios para niños?",
      answer: "Sí, atendemos a niños de todas las edades. Nuestro equipo está capacitado para hacer que la experiencia sea cómoda y divertida para los más pequeños."
    },
    {
      question: "¿Qué medidas de higiene implementan?",
      answer: "Mantenemos los más altos estándares de higiene. Todos nuestros instrumentos se esterilizan después de cada uso, utilizamos productos desechables cuando es posible, y mantenemos el local impecablemente limpio."
    }
  ];

  const displayedFAQs = showAll ? faqData : faqData.slice(0, 4);

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="faq-header">
          <h2 className="faq-title">Preguntas Frecuentes</h2>
          <p className="faq-subtitle">
            Resolvemos las dudas más comunes sobre nuestros servicios y procesos
          </p>
        </div>

        <div className="faq-container">
          {displayedFAQs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div 
                className="faq-question"
                onClick={() => toggleItem(index)}
              >
                <h3>{faq.question}</h3>
                <div className={`faq-icon ${openItems[index] ? 'open' : ''}`}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path 
                      d="M5 7.5L10 12.5L15 7.5" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className={`faq-answer ${openItems[index] ? 'open' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="faq-actions">
            <button 
              className="btn-show-more"
              onClick={() => setShowAll(true)}
            >
              Ver más
            </button>
          </div>
        )}

        {showAll && (
          <div className="faq-actions">
            <button 
              className="btn-show-less"
              onClick={() => setShowAll(false)}
            >
              Ver menos
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQ;

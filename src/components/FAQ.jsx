import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useSiteSettings } from '../hooks/useSanityData';
import { LoadingState, EmptyState } from './LoadingState';
import './FAQ.css';

const FAQ = () => {
  const { data: settings, loading } = useSiteSettings();
  const [showAll, setShowAll] = useState(false);
  const [openItems, setOpenItems] = useState({});
  const [headerRef, isHeaderVisible] = useScrollAnimation(0.2);
  const [faqRef, isFaqVisible] = useScrollAnimation(0.1);

  // Solo usar FAQ de Sanity, sin fallback
  const faqData = settings?.faq || [];
  const displayedFAQs = showAll ? faqData : faqData.slice(0, 4);

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Variantes de animación
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const faqVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <motion.div 
          ref={headerRef}
          className="faq-header"
          variants={containerVariants}
          initial="hidden"
          animate={isHeaderVisible ? "visible" : "hidden"}
        >
          <h2 className="faq-title">Preguntas Frecuentes</h2>
          <p className="faq-subtitle">
            Resolvemos las dudas más comunes sobre nuestros servicios y procesos
          </p>
        </motion.div>

        {loading && <LoadingState message="Cargando preguntas frecuentes..." />}
        {!loading && faqData.length === 0 && (
          <EmptyState message="No hay preguntas frecuentes disponibles. Agrega preguntas desde el panel de Sanity." />
        )}
        {!loading && faqData.length > 0 && (
        <motion.div 
          ref={faqRef}
          className="faq-container"
          variants={faqVariants}
          initial="hidden"
          animate={isFaqVisible ? "visible" : "hidden"}
        >
          {displayedFAQs.map((faq, index) => (
            <motion.div 
              key={index} 
              className="faq-item"
              variants={itemVariants}
            >
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
            </motion.div>
          ))}
        </motion.div>
        )}

        {!loading && faqData.length > 0 && !showAll && faqData.length > 4 && (
          <motion.div 
            className="faq-actions"
            variants={containerVariants}
            initial="hidden"
            animate={isFaqVisible ? "visible" : "hidden"}
            transition={{ delay: 0.4 }}
          >
            <button 
              className="btn-show-more"
              onClick={() => setShowAll(true)}
            >
              Ver más
            </button>
          </motion.div>
        )}

        {!loading && faqData.length > 0 && showAll && faqData.length > 4 && (
          <motion.div 
            className="faq-actions"
            variants={containerVariants}
            initial="hidden"
            animate={isFaqVisible ? "visible" : "hidden"}
            transition={{ delay: 0.4 }}
          >
            <button 
              className="btn-show-less"
              onClick={() => setShowAll(false)}
            >
              Ver menos
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FAQ;

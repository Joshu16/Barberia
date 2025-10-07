import React, { useState, useEffect, useRef } from 'react';
import './Quote.css';

const Quote = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [showSecondQuote, setShowSecondQuote] = useState(false);
  const [showFirstQuote, setShowFirstQuote] = useState(true);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer para detectar cuando la sección es visible al 80%
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            // La sección es visible al 80%, iniciar animación
            setHasAnimated(true);
            startAnimation();
          } else if (!entry.isIntersecting && hasAnimated) {
            // La sección ya no es visible, resetear para la próxima vez
            setHasAnimated(false);
            setDisplayedText('');
            setShowSecondQuote(false);
            setShowFirstQuote(true);
          }
        });
      },
      {
        threshold: 0.8, // 80% de la sección debe ser visible
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  // Función para iniciar la animación
  const startAnimation = () => {
    const fullText = "Tu peinado es tu carta de presentación.";
    let currentIndex = 0;
    let timeoutId;

    const typeWriter = () => {
      if (currentIndex < fullText.length) {
        const currentText = fullText.slice(0, currentIndex + 1);
        setDisplayedText(currentText);
        currentIndex++;
        timeoutId = setTimeout(typeWriter, 75);
      } else {
        // Terminó de escribir, esperar 2 segundos y mostrar segunda frase
        setTimeout(() => {
          setShowFirstQuote(false); // Ocultar primera frase
          setShowSecondQuote(true); // Mostrar segunda frase
          // Después de 3 segundos, reiniciar
          setTimeout(() => {
            setShowSecondQuote(false);
            setShowFirstQuote(true); // Mostrar primera frase de nuevo
            setDisplayedText('');
            currentIndex = 0;
            setTimeout(typeWriter, 1000);
          }, 3000);
        }, 2000);
      }
    };

    typeWriter();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  };

  return (
    <section ref={sectionRef} className="quote-section">
      <div className="container">
        <div className="quote-container">
          <p className={`quote-text quote-first ${showFirstQuote ? '' : 'hidden'}`}>{displayedText}</p>
          <p className={`quote-text quote-second ${showSecondQuote ? 'animate' : ''}`}>Úsalo bien.</p>
        </div>
      </div>
    </section>
  );
};

export default Quote;

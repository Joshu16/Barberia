import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [showSecondQuote, setShowSecondQuote] = useState(false);
  const [showFirstQuote, setShowFirstQuote] = useState(true);

  // Animación de escritura simple
  useEffect(() => {
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
  }, []);

  return (
    <section className="quote-section">
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

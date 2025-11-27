import React, { useState, useEffect } from 'react';
import { useSiteSettings } from '../hooks/useSanityData';
import './Quote.css';

const Quote = () => {
  const { data: settings } = useSiteSettings();
  const [currentText, setCurrentText] = useState('');
  const [showSecond, setShowSecond] = useState(false);

  const fullText = settings?.quoteText || "Tu peinado es tu carta de presentación.";

  useEffect(() => {
    let index = 0;
    let intervalId;

    const startTyping = () => {
      intervalId = setInterval(() => {
        if (index < fullText.length) {
          setCurrentText(fullText.slice(0, index + 1));
          index++;
        } else {
          clearInterval(intervalId);
          
          // Mostrar segunda frase después de 2 segundos
          setTimeout(() => {
            setShowSecond(true);
            
            // Reiniciar después de 3 segundos
            setTimeout(() => {
              setShowSecond(false);
              setCurrentText('');
              index = 0;
              startTyping(); // Reiniciar
            }, 3000);
          }, 2000);
        }
      }, 100);
    };

    startTyping();

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []);

  return (
    <section className="quote-section">
      <div className="container">
        <div className="quote-container">
          {!showSecond ? (
            <p className="quote-text quote-first">
              {currentText}
              <span className="cursor">|</span>
            </p>
          ) : (
            <p className="quote-text quote-second">Úsalo bien.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Quote;

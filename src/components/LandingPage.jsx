import React, { useState, useEffect } from 'react';
import './LandingPage.css';
import Header from './Header';
import Hero from './Hero';
import Quote from './Quote';
import Services from './Services';
import Gallery from './Gallery';
import Team from './Team';
import ReviewsCarousel from './ReviewsCarousel';

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [showSecondQuote, setShowSecondQuote] = useState(false);
  const [showFirstQuote, setShowFirstQuote] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <div className="landing-page">
      <Header isScrolled={isScrolled} />
      <Hero />
      <Quote 
        displayedText={displayedText}
        showFirstQuote={showFirstQuote}
        showSecondQuote={showSecondQuote}
      />
      <Services />
      <Gallery />
      <Team />
      <ReviewsCarousel />
    </div>
  );
};

export default LandingPage;
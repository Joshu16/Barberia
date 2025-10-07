import React from 'react';
import './LandingPage.css';
import Header from './Header';
import Hero from './Hero';
import Quote from './Quote';
import Services from './Services';
import Gallery from './Gallery';
import Team from './Team';
import ReviewsCarousel from './ReviewsCarousel';
import MapSection from './MapSection';
import FAQ from './FAQ';
import Footer from './Footer';
import { useScroll } from '../hooks/useScroll';

const LandingPage = () => {
  const isScrolled = useScroll(50);

  return (
    <div className="landing-page">
      <Header isScrolled={isScrolled} />
      <Hero />
      <Quote />
      <Services />
      <Gallery />
      <Team />
      <ReviewsCarousel />
      <MapSection />
      <FAQ />
      <Footer />
    </div>
  );
};

export default LandingPage;
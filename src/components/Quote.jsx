import React from 'react';

const Quote = ({ displayedText, showFirstQuote, showSecondQuote }) => {
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

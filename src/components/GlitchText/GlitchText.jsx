import React from 'react';
import './GlitchText.css';

const GlitchText = ({ text, className = '' }) => {
  return (
    <h2 className={`glitch-text ${className}`} data-text={text}>
      {text}
    </h2>
  );
};

export default GlitchText;

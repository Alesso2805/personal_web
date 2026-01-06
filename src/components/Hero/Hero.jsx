import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useLanguage } from '../../context/LanguageContext';
import './Hero.css';

export default function Hero() {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  
  const { t } = useLanguage();
  const [typedText, setTypedText] = useState('');

  // Typing effect
  useEffect(() => {
    setTypedText('');
    const text = t.hero.role;
    let index = 0;
    
    // Start typing after title animation (approx 1.5s delay)
    const timeoutId = setTimeout(() => {
      const intervalId = setInterval(() => {
        setTypedText(text.slice(0, index + 1));
        index++;
        if (index === text.length) clearInterval(intervalId);
      }, 50); // Speed: 50ms per char
      
      return () => clearInterval(intervalId);
    }, 1500);

    return () => clearTimeout(timeoutId);
  }, [t.hero.role]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      const chars = containerRef.current.querySelectorAll('.char');
      
      tl.from(chars, {
        yPercent: 120,
        stagger: 0.05,
        duration: 1.2,
        delay: 0.2
      })
      .to(scrollRef.current, {
        opacity: 1,
        duration: 0.5
      }, '-=0.5');

    }, containerRef);

    return () => ctx.revert();
  }, [t]); 

  const renderTitle = (text) => {
    return text.split('').map((char, i) => (
      <span key={i} className="char-wrapper">
        <span className="char">{char === ' ' ? '\u00A0' : char}</span>
      </span>
    ));
  };

  return (
    <section ref={containerRef} className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          <div className="line">{renderTitle(t.hero.greeting.toUpperCase())}</div>
          <div className="line text-outline">{renderTitle(t.hero.name.toUpperCase())}</div>
          <div className="line text-outline">{renderTitle(t.hero.lastName1.toUpperCase())}</div>
          <div className="line text-outline">{renderTitle(t.hero.lastName2.toUpperCase())}</div>
        </h1>
        <p className="hero-subtitle">
          {typedText}<span className="cursor-blink">|</span>
        </p>
      </div>
      
      <div ref={scrollRef} className="scroll-indicator">
        <span className="scroll-text">{t.hero.scroll}</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}

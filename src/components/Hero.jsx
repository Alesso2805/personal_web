import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

export default function Hero() {
  const containerRef = useRef(null);
  const subtitleRef = useRef(null);
  const scrollRef = useRef(null);
  
  const { t } = useLanguage();

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
      .from(subtitleRef.current, {
        y: 20,
        opacity: 0,
        duration: 1
      }, '-=0.8')
      .to(scrollRef.current, {
        opacity: 1,
        duration: 0.5
      }, '-=0.5');

    }, containerRef);

    return () => ctx.revert();
  }, [t]); // Re-run animation when language changes if desired, or just update text

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
        </h1>
        <p ref={subtitleRef} className="hero-subtitle">{t.hero.role}</p>
      </div>
      
      <div ref={scrollRef} className="scroll-indicator">
        <span className="scroll-text">{t.hero.scroll}</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}

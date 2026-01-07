import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../../context/LanguageContext';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
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
      // Setup ScrollTrigger for the fly-through effect
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=1500", // Distance of the "flight"
          scrub: 1, // Smooth scrolling
          pin: true,
          anticipatePin: 1
        }
      });

      // Fly through the content
      tl.to(contentRef.current, {
        scale: 50, // Massive scale to simulate flying through
        z: 1000,
        opacity: 0,
        duration: 1,
        ease: "power1.inOut"
      });
      
      // Hide scroll indicator early
      tl.to(scrollRef.current, {
         opacity: 0,
         duration: 0.2
      }, 0);

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
      <div ref={contentRef} className="hero-content">
        <h1 className="hero-title">
          <div className="line">{renderTitle(t.hero.greeting.toUpperCase())}</div>
          <div className="line text-outline">{renderTitle(t.hero.name.toUpperCase())}</div>
          <div className="line text-outline">{renderTitle(t.hero.lastName1.toUpperCase())}</div>
          <div className="line text-outline">{renderTitle(t.hero.lastName2.toUpperCase())}</div>
        </h1>
      </div>
      
      <div ref={scrollRef} className="scroll-indicator">
        <span className="scroll-text">{t.hero.scroll}</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}

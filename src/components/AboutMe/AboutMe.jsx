import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../../context/LanguageContext';
import GlitchText from '../GlitchText/GlitchText';
import './AboutMe.css';

gsap.registerPlugin(ScrollTrigger);

export default function AboutMe() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=1500", 
          scrub: 1,
          pin: true,
          anticipatePin: 1
        }
      });

      // Initial state
      gsap.set(contentRef.current, { opacity: 0 });

      // Title zooms in and fades out
      tl.to(titleRef.current, {
        scale: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut"
      });

      // Content fades in as title zooms out
      tl.to(contentRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out"
      }, "-=0.5"); // Overlap with the end of title animation

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="about-me-section">
      <div className="about-me-container">
        <div ref={titleRef} className="about-me-title-wrapper">
            <h2 className="about-me-title">{t.about.title}</h2>
        </div>
        
        <div ref={contentRef} className="about-me-content">
          <div className="about-card">
             <p className="about-me-description">{t.about.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

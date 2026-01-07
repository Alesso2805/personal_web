import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../../context/LanguageContext';
import GlitchText from '../GlitchText/GlitchText';
import './Education.css';

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
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
          end: "+=2000",
          scrub: 1,
          pin: true,
          anticipatePin: 1
        }
      });

      // Initial state
      gsap.set('.education-item', { 
        x: 800, 
        opacity: 0 
      });
      gsap.set(contentRef.current, { opacity: 1 });

      // Title zooms in and fades out
      tl.to(titleRef.current, {
        scale: 50,
        opacity: 0,
        duration: 2,
        ease: "power2.inOut"
      });

      // Education items cascade in from right to left
      tl.to('.education-item', {
        x: 0,
        opacity: 1,
        duration: 3,
        stagger: 0.5,
        ease: "power2.out"
      }, "-=0.5");

    }, containerRef);

    return () => ctx.revert();
  }, [t.education.items]);

  return (
    <section ref={containerRef} className="education-section">
      <div className="education-container">
        <div ref={titleRef} className="education-title-wrapper">
            <GlitchText text={t.education.title} className="education-title" />
        </div>
        
        <div ref={contentRef} className="education-content">
          <div className="education-list">
            {t.education.items.map((item, index) => (
                <div key={index} className="education-item">
                    <div className="edu-year text-accent">{item.period}</div>
                    <div className="edu-info">
                        <h3 className="edu-role">{item.degree}</h3>
                        <h4 className="edu-company">{item.institution}</h4>
                        <div className="edu-period-mobile">{item.period}</div>
                        {item.details && <p className="edu-desc">{item.details}</p>}
                    </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

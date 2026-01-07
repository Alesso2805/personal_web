import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../../context/LanguageContext';
import GlitchText from '../GlitchText/GlitchText';
import './Experience.css';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
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
          end: "+=2000", // Increased scroll distance to accommodate list
          scrub: 1,
          pin: true,
          anticipatePin: 1
        }
      });

      // Initial state
      gsap.set('.experience-item', { 
        x: 800, // Start from far right
        opacity: 0 
      });
      gsap.set(contentRef.current, { opacity: 1 }); // Ensure container is visible

      // Title zooms in and fades out
      tl.to(titleRef.current, {
        scale: 50,
        opacity: 0,
        duration: 2,
        ease: "power2.inOut"
      });

      // Experience items cascade in from right to left
      tl.to('.experience-item', {
        x: 0,
        opacity: 1,
        duration: 3,
        stagger: 0.5, // Stagger effect
        ease: "power2.out"
      }, "-=0.5"); // Start slightly before title finishes

    }, containerRef);

    return () => ctx.revert();
  }, [t.experience.jobs]);

  return (
    <section ref={containerRef} className="experience-section">
      <div className="experience-container">
        <div ref={titleRef} className="experience-title-wrapper">
            <GlitchText text={t.experience.title} className="experience-title" />
        </div>
        
        <div ref={contentRef} className="experience-content">
          <div className="experience-list">
            {t.experience.jobs.map((item, index) => (
                <div key={index} className="experience-item">
                    <div className="exp-year text-accent">{item.period}</div>
                    <div className="exp-info">
                        <h3 className="exp-role">{item.role}</h3>
                        <h4 className="exp-company">
                            {item.company} <span className="exp-location">| {item.location}</span>
                        </h4>
                        <div className="exp-period-mobile">{item.period}</div>
                        <p className="exp-desc">{item.description}</p>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

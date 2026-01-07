import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useLanguage } from '../../context/LanguageContext';
import GlitchText from '../GlitchText/GlitchText';
import './CVSection.css';

export default function CVSection() {
  const containerRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // Animate Section Title
      gsap.from('.section-title', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });

      // Animate List Items
      gsap.from('.cv-item, .skills-box', {
        scrollTrigger: {
          trigger: '.cv-grid',
          start: 'top 85%',
        },
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: 'power2.out'
      });

    }, containerRef);
    return () => ctx.revert();
  }, []); // Should re-trigger on t change ideally, but keeping simple for scroll trigger stability

  return (
    <section ref={containerRef} className="cv-section section-padding container">
      
      {/* Skills */}
      <div className="cv-block">
        <GlitchText text={t.skills.title} className="section-title" />
        
        {/* Languages */}
        <div className="skills-box cv-item">
            <div className="cv-content" style={{gridColumn: '1 / -1'}}>
                <h3 className="cv-role skill-category-title">01_ {t.skills.languages.label}</h3>
                <div className="skills-container">
                  {t.skills.languages.items.map((skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
            </div>
        </div>

        {/* Technologies */}
        <div className="skills-box cv-item">
            <div className="cv-content" style={{gridColumn: '1 / -1'}}>
                <h3 className="cv-role skill-category-title">02_ {t.skills.tech.label}</h3>
                <div className="skills-container">
                  {t.skills.tech.items.map((skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
            </div>
        </div>
      </div>

    </section>
  );
}

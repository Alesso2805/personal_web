import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { useLanguage } from '../../context/LanguageContext';
import { content } from '../../data/translations';
import { FiArrowUpRight } from 'react-icons/fi';
import './Certifications.css';

const Certifications = () => {
  const { language } = useLanguage();
  const t = content[language].certifications;
  
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const imageContainerRef = useRef(null);
  const [activeImage, setActiveImage] = useState('');

  useEffect(() => {
    // Only set up GSAP if not on mobile (simple check)
    if (window.matchMedia("(min-width: 769px)").matches) {
      const moveImage = (e) => {
        gsap.to(imageContainerRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1, // Quick follow
          ease: "power2.out"
        });
      };

      window.addEventListener('mousemove', moveImage);

      return () => {
        window.removeEventListener('mousemove', moveImage);
        gsap.killTweensOf(imageContainerRef.current);
      };
    }
  }, []);

  const handleMouseEnter = (image) => {
    setActiveImage(image);
    gsap.to(imageContainerRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = () => {
    gsap.to(imageContainerRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      ease: "power2.in"
    });
  };

  return (
    <section className="certifications section-padding" ref={containerRef}>
      <div className="container">
        <h2 className="section-title" dangerouslySetInnerHTML={{ __html: t.title }}></h2>
        
        <div className="cert-list">
          {t.items.map((item, index) => (
            <a 
              key={index} 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="cert-item"
              onMouseEnter={() => handleMouseEnter(item.image)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="cert-info">
                <h3>{item.name}</h3>
                <p>{item.issuer}</p>
              </div>
              <div className="cert-meta">
                <span className="cert-year">{item.date}</span>
                <span className="cert-link-icon"><FiArrowUpRight size={20} /></span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="cert-image-container" ref={imageContainerRef}>
        {activeImage && <img src={activeImage} alt="Certificate Preview" className="cert-image" ref={imageRef} />}
      </div>
    </section>
  );
};

export default Certifications;

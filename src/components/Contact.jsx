import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import './Contact.css';

export default function Contact() {
  const containerRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-item', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: 'back.out(1.7)'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="contact-section section-padding container">
      <h2 className="section-title">{t.contact.title}</h2>
      <div className="contact-content">
        <p className="contact-text">
          {t.contact.text.split('\n').map((line, i) => (
            <span key={i}>{line}<br/></span>
          ))}
        </p>
        
        <a href={`mailto:${t.contact.email}`} className="email-link contact-item">
          {t.contact.email}
        </a>

        <div className="social-links">
          <a href="https://github.com/Alesso2805" className="social-icon contact-item"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/alessandro-david-polanco-71657421b/" className="social-icon contact-item"><FaLinkedin /></a>
          <a href={`mailto:${t.contact.email}`} className="social-icon contact-item"><FaEnvelope /></a>
        </div>
      </div>
    </section>
  );
}

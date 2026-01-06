import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useLanguage } from '../context/LanguageContext';
import './Projects.css';

// Images can remain static or moved to data if needed, keeping simple mapping here
const projectImages = [
  "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
];

export default function Projects() {
  const wrapperRef = useRef(null);
  const containerRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalWidth = containerRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      
      if (totalWidth > viewportWidth) {
        gsap.to(containerRef.current, {
          x: -(totalWidth - viewportWidth + 100),
          ease: "none",
          scrollTrigger: {
            trigger: wrapperRef.current,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => "+=" + containerRef.current.scrollWidth,
            invalidateOnRefresh: true
          }
        });
      }
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={wrapperRef} className="projects-wrapper">
      <div className="projects-header container">
        <h2 className="section-title">{t.projects.title}</h2>
      </div>
      <div ref={containerRef} className="projects-container">
        {t.projects.items.map((project, i) => (
          <div key={i} className="project-card">
            <div className="project-image">
               <img src={projectImages[i] || projectImages[0]} alt={project.title} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

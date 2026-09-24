



import { useEffect, useRef, useState } from 'react';
import './Projects.css';
import { projectsData } from '../data/projects';

function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <div className="section-header">
        <h2 className="section-title">Featured Projects</h2>
        <div className="section-underline"></div>
      </div>

      <div className={`projects-grid ${isVisible ? 'is-visible' : ''}`}>
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech-list">
                {project.tech.map((item, index) => (
                  <span key={index} className="tech-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-links">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noreferrer" 
                className="project-link-btn"
              >
                GitHub
              </a>
              {project.demo && project.demo !== "#" && (
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="project-link-btn demo-btn"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
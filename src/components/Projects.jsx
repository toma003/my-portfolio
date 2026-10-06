import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';
import { projectsData } from '../data/projects';

/* ==========================================
   EASY TOGGLES
   ========================================== */
const ENABLE_SCROLL_ANIMATION = true; // Set false to stop cards sliding up on scroll

const Projects = () => {
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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="projects-section" id="projects" ref={sectionRef}>
      <div className="projects-container">
        
        {/* Header */}
        <div className="projects-header">
          <p className="projects-subheading">PORTFOLIO SHOWCASE</p>
          <h2 className="projects-heading">Featured Projects</h2>
          <div className="heading-accent-line"></div>
        </div>

        {/* 3-Column Grid */}
        <div className={`projects-grid ${isVisible && ENABLE_SCROLL_ANIMATION ? 'is-visible' : ''}`}>
          {projectsData && projectsData.map((project) => (
            <div 
              key={project.id} 
              className={`project-card ${ENABLE_SCROLL_ANIMATION ? 'has-scroll-anim' : ''}`}
            >
              <div className="project-banner">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="banner-img" />
                ) : (
                  <div className="banner-placeholder">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="banner-icon">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                    </svg>
                    <span className="banner-category">{project.category}</span>
                  </div>
                )}
              </div>

              <div className="project-card-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag-pill">{tag}</span>
                  ))}
                </div>

                <div className="project-card-footer">
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-github">
                    GitHub ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
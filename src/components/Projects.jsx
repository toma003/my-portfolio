import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';
import { projectsData } from '../data/projects';

/* ==========================================================================
   TEACHER CONTROL SWITCH: PROJECT MODAL TOGGLE
   Set to `true` to enable pop-up modal.
   Set to `false` to disable the modal entirely.
   ========================================================================== */
const ENABLE_PROJECT_MODAL = true;

const Projects = () => {
  /* Scroll-entrance visibility */
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  /* Modal pop-up state */
  const [activeProject, setActiveProject] = useState(null);

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

  const handleOpenModal = (project) => {
    if (!ENABLE_PROJECT_MODAL) return;
    setActiveProject(project);
  };

  const handleCloseModal = () => {
    setActiveProject(null);
  };

  return (
    <section className="projects-section" id="projects" ref={sectionRef}>
      <div className="projects-container">

        {/* Section Header */}
        <div className="projects-header">
          <p className="projects-subheading">PORTFOLIO SHOWCASE</p>
          <h2 className="projects-heading">Featured Projects</h2>
          <div className="heading-accent-line"></div>
          {ENABLE_PROJECT_MODAL && (
            <p className="projects-hint">Click on any project card to see more details</p>
          )}
        </div>

        {/* 3-Column Projects Grid */}
        <div className={`projects-grid ${isVisible ? 'is-visible' : ''}`}>
          {projectsData && projectsData.map((project) => (
            <div 
              key={project.id} 
              className={`project-card ${ENABLE_PROJECT_MODAL ? 'clickable-card' : ''}`}
              onClick={() => handleOpenModal(project)}
            >
              {/* Optional Project Banner */}
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

              {/* Card Body */}
              <div className="project-card-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                {/* Tech Pills */}
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag-pill">{tag}</span>
                  ))}
                </div>

                {/* Card Actions Footer */}
                <div className="project-card-footer" onClick={(e) => e.stopPropagation()}>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="project-action-btn btn-github"
                  >
                    GitHub ↗
                  </a>
                  {ENABLE_PROJECT_MODAL && (
                    <button 
                      type="button" 
                      className="project-inspect-link"
                      onClick={() => handleOpenModal(project)}
                    >
                      Details →
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ==========================================================================
          MODAL POP-UP DIALOG
         ========================================================================== */}
      {ENABLE_PROJECT_MODAL && activeProject && (
        <div className="project-modal-backdrop" onClick={handleCloseModal}>
          <div 
            className="project-modal-card" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top */}
            <div className="modal-header">
              <div>
                <span className="modal-category-badge">{activeProject.category}</span>
                <h3 className="modal-title">{activeProject.title}</h3>
              </div>
              <button 
                type="button" 
                className="modal-close-btn" 
                onClick={handleCloseModal}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Modal Description */}
            <p className="modal-overview">{activeProject.description}</p>

            {/* Meta Grid */}
            <div className="modal-meta-grid">
              <div className="meta-box">
                <span className="meta-label">Project Type:</span>
                <span className="meta-value">{activeProject.modalData.type}</span>
              </div>
              <div className="meta-box">
                <span className="meta-label">Duration:</span>
                <span className="meta-value">{activeProject.modalData.duration}</span>
              </div>
            </div>

            {/* Key Features */}
            <div className="modal-block">
              <h4 className="modal-block-title">Key Implementations</h4>
              <ul className="modal-features-list">
                {activeProject.modalData.keyFeatures.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="modal-block">
              <h4 className="modal-block-title">Technologies Used</h4>
              <div className="modal-tags-wrap">
                {activeProject.tags.map((tag, idx) => (
                  <span key={idx} className="modal-tech-badge">{tag}</span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="modal-footer-actions">
              <a 
                href={activeProject.githubUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="modal-github-btn"
              >
                View on GitHub ↗
              </a>
              <button type="button" className="modal-close-action" onClick={handleCloseModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Projects;
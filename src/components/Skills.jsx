
import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';

/* ==========================================================================
   Set to `true` to animate cards when scrolling into view.
   Set to `false` to show cards immediately.
   ========================================================================== */
const ENABLE_SCROLL_ANIMATION = true;

/* ==========================================================================
   SKILLS DATA (Edit categories, descriptions, or tags here)
   ========================================================================== */
const skillsData = [
  {
    category: "Frontend Development",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="skill-icon">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    description: "Building responsive, modern single-page applications with clean component architecture and reusable hooks.",
    tags: ["React", "JavaScript", "HTML5", "CSS3"]
  },
  {
    category: "Backend & Systems",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="skill-icon">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 3h13.5m-9-6.75h9m-9 3h9m-9-6h9M4.5 4.5h15a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-15A2.25 2.25 0 012.25 17.25V6.75A2.25 2.25 0 014.5 4.5z" />
      </svg>
    ),
    description: "Architecting object-oriented backends, database management systems, and core data-structure algorithms.",
    tags: ["Java", "C++", "C", "PHP", "Python"]
  },
  {
    category: "Databases & Dev Tools",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="skill-icon">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    description: "Designing structured relational schemas, writing optimized SQL queries, and maintaining Git version workflows.",
    tags: ["MySQL", "GitHub", "Git", "VS Code"]
  }
];

function Skills() {
  /* Triggers pop-up entrance on scroll */
  const [isVisible, setIsVisible] = useState(!ENABLE_SCROLL_ANIMATION);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!ENABLE_SCROLL_ANIMATION) return;

    const observer = new IntersectionObserver( // A browser feature that watches the screen.
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Runs once when visible in the user's screen
        }
      },
      { threshold: 0.15 } // Triggers when 15% of section enters viewport
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="skills-container">

        {/* Section Header */}
        <div className="skills-header">
          <p className="skills-subheading">WHAT I WORK WITH</p>
          <h2 className="skills-heading">Technical Skills & Expertise</h2>
          <div className="heading-accent-line"></div>
        </div>

        {/* Grid with scroll pop-up animation */}
        <div className={`skills-grid ${ENABLE_SCROLL_ANIMATION ? (isVisible ? 'is-visible' : '') : 'no-animation'}`}>
          {skillsData.map((item, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon-container">
                {item.icon}
              </div>
              <h3 className="skill-card-title">{item.category}</h3>
              <p className="skill-card-description">{item.description}</p>
              
              <div className="skill-tags-wrapper">
                {item.tags.map((tag, tagIdx) => (
                  <span key={tagIdx} className="skill-pill-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
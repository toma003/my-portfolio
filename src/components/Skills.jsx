



import { useEffect, useRef, useState } from 'react';
import './Skills.css';

function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Runs once when visible
        }
      },
      { threshold: 0.2 } // Triggers when 20% of the section is on screen
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="section-header">
        <h2 className="section-title">Technical Skills</h2>
        <div className="section-underline"></div>
      </div>

      <div className={`skills-grid ${isVisible ? 'is-visible' : ''}`}>
        <div className="skill-card">
          <h3 className="skill-category-title">Programming Languages</h3>
          <div className="skill-badges">
            <span className="skill-badge">C</span>
            <span className="skill-badge">C++</span>
            <span className="skill-badge">Java</span>
            <span className="skill-badge">Python</span>
            <span className="skill-badge">JavaScript</span>
          </div>
        </div>

        <div className="skill-card">
          <h3 className="skill-category-title">Web & Frameworks</h3>
          <div className="skill-badges">
            <span className="skill-badge">React</span>
            <span className="skill-badge">HTML5</span>
            <span className="skill-badge">CSS</span>
            <span className="skill-badge">PHP</span>
          </div>
        </div>

        <div className="skill-card">
          <h3 className="skill-category-title">Tools & Databases</h3>
          <div className="skill-badges">
            <span className="skill-badge">GitHub</span>
            <span className="skill-badge">MySQL</span>
            <span className="skill-badge">VS Code</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;


import { useState, useEffect } from 'react';
import './Hero.css';

function Hero() {
  const fullText = 'Tomalika Paul Toma.';
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 130);

      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <section id="about" className="hero-section">
      <div className="hero-content">
        <p className="hero-greeting">Hi, my name is</p>
        
        {/* Dynamic Typewriter Heading */}
        <h1 className="hero-title">
          <span>{displayText}</span>
          <span className="typewriter-cursor">|</span>
        </h1>

        <h3 className="hero-subtitle">
          Engineering student building real-world software skills.
        </h3>

        <p className="hero-description">
          I'm a Computer Science and Engineering student who enjoys problem-solving 
          and building software end-to-end — from a Java-based game to a database 
          management application. Currently, I'm expanding my skills into modern 
          frontend engineering.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            Check out my work
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
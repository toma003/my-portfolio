import React, { useState, useEffect } from 'react';
import './Hero.css';
import profileImg from '../assets/profile.jpg'; // Ensure your picture is in src/assets/

const Hero = () => {
  /* ==========================================================================
     FEATURE: TYPING ANIMATION STATE & LOGIC
     (If teacher asks to remove typing effect, delete this block and replace 
      {displayedName} in <h1> with your static name text)
     ========================================================================== */
  const fullText = "Tomalika Paul Toma.";
  const [displayedName, setDisplayedName] = useState("");
  const typingSpeed = 150;     // Milliseconds per character

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedName(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        
        {/* =========================================================
            LEFT COLUMN: TEXT & CALL TO ACTIONS
           ========================================================= */}
        <div className="hero-content">
          <p className="hero-greeting">Hi, my name is</p>
          
          {/* Animated Name Heading with Blinking Cursor Pipe */}
          <h1 className="hero-name">
            {displayedName}
            <span className="cursor-blink">|</span>
          </h1>

          <h2 className="hero-tagline">
            Engineering student building real-world software skills.
          </h2>

          <p className="hero-bio">
            I'm a Computer Science and Engineering student who enjoys problem-solving
            and building software end-to-end — from a Java-based game to a database
            management application. Currently, I'm expanding my skills into modern
            frontend engineering.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              Check out my work
            </a>
            <a href="#contact" className="btn-secondary">
              Get in touch <span className="arrow">→</span>
            </a>
          </div>
        </div>

        {/* =========================================================
            RIGHT COLUMN: ARCHED PORTAL PROFILE PICTURE
           ========================================================= */}
        <div className="hero-visual">
          <div className="portal-glow-ring">
            <div className="portal-frame">
              <img src={profileImg} alt="Profile" className="profile-img" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
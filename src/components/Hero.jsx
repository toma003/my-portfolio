import React, { useState, useEffect } from 'react';
import './Hero.css';
import profileImg from '../assets/profile.jpg';


const ENABLE_TYPING_ANIMATION = true; // <-- change only this word (true / false)

const Hero = () => {
  const fullText = "Tomalika Paul Toma.";
  
  // If switch is true -> starts empty (""); if false -> starts with full name immediately
  const [displayedName, setDisplayedName] = useState(ENABLE_TYPING_ANIMATION ? "" : fullText);
  const typingSpeed = 150; // Milliseconds per character

  useEffect(() => {
    // 1-line exit: if disabled, do not run typing effect at all
    if (!ENABLE_TYPING_ANIMATION) return;

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
        <div className="hero-content">
          <p className="hero-greeting">Hi, my name is</p>
          
          <h1 className="hero-name">
            {displayedName}
            {/* Blinking cursor only shows when typing animation is enabled */}
            {ENABLE_TYPING_ANIMATION && <span className="cursor-blink">|</span>}
          </h1>

          <h4 className="hero-tagline">
            Engineering student building real-world software skills.
          </h4>

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

        {/* right column: arched portal profile picture */}
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
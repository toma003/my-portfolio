

import { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [activeSection, setActiveSection] = useState('about');

useEffect(() => {
  const sections = document.querySelectorAll('section[id], header[id]');

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // 1. If reached the very bottom of the page, highlight 'contact'
    if (windowHeight + scrollY >= documentHeight - 60) {
      setActiveSection('contact');
      return;
    }

    // 2. Otherwise, calculate standard section intersection
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 140;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        setActiveSection(sectionId);
      }
    });
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Run immediately on mount

  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  return (
    <nav className="navbar">
      <div className="nav-logo">Tomalika Paul Toma</div>
      <ul className="nav-links">
        <li>
          <a
            href="#about"
            className={activeSection === 'about' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className={activeSection === 'skills' ? 'nav-link active' : 'nav-link'}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={activeSection === 'projects' ? 'nav-link active' : 'nav-link'}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={activeSection === 'contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
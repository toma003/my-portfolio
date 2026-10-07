import React, { useState, useEffect } from 'react';
import './Navbar.css';

/* (Edit or add sections here) */
const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' }
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // 1. Highlight contact when user reaches bottom
      if (windowHeight + scrollY >= documentHeight - 80) {
        setActiveSection('contact');
        return;
      }

      // 2. Track active section
      const allSections = document.querySelectorAll('section[id]');
      allSections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll); // clean-up function
  }, []);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="navbar-header">
      <nav className="navbar-container">
        
        {/* Left: Boxed Tech Logo */}
        <a href="#home" className="nav-logo-box" onClick={closeMenu} aria-label="Home">
          <span className="logo-initials">TP</span>
        </a>

        {/* Center: Desktop Navigation Links (Becomes dropdown on mobile) */}
        <ul className={`nav-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`nav-link-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            </li>
          ))}
          {/* Mobile-only contact link inside dropdown */}
          <li className="mobile-only-link">
            <a 
              href="#contact" 
              className={`nav-link-item ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Right: Standout "Let's Talk" CTA Button + Hamburger Icon */}
        <div className="nav-right-actions">
          <a
            href="#contact"
            className={`nav-cta-btn ${activeSection === 'contact' ? 'cta-active' : ''}`}
          >
            Let's Talk
          </a>

          {/* Hamburger toggle for mobile */}
          <button 
            type="button" 
            className={`hamburger-btn ${isMobileMenuOpen ? 'is-active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;
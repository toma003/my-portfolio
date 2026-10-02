import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';

/* ==========================================================================
   TEACHER CONTROL SWITCH: SCROLL POP-UP TOGGLE
   Set to `true` to animate the contact card smoothly on scroll.
   Set to `false` to display immediately without animation.
   ========================================================================== */
const ENABLE_SCROLL_ANIMATION = true;

const Contact = () => {
  /* Scroll pop-up visibility */
  const [isVisible, setIsVisible] = useState(!ENABLE_SCROLL_ANIMATION);
  const sectionRef = useRef(null);

  /* Form state */
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!ENABLE_SCROLL_ANIMATION) return;

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section className="contact-footer-section" id="contact" ref={sectionRef}>
      <div className="contact-wrapper">

        {/* =========================================================
            1. UNIFIED GET IN TOUCH GLASS CARD (2 Columns)
           ========================================================= */}
        <div className={`contact-card ${isVisible ? 'is-visible' : ''}`}>
          
          {/* Left Column: Info & Socials */}
          <div className="contact-info-col">
            <span className="contact-badge">LET'S CONNECT</span>
            <h2 className="contact-title">Get in Touch</h2>
            <h3 className="contact-tagline">I'd like to hear from you!</h3>
            
            <p className="contact-description">
              I'm currently looking for new opportunities to learn and collaborate. 
              Whether you have a question, a project idea, or just want to say hi, 
              feel free to reach out!
            </p>

            {/* Email Direct Link */}
            <div className="contact-direct-email">
              <span className="email-icon">✉</span>
              <a href="mailto:tomalikapaul150@gmail.com" className="email-link">
                tomapaul150@gmail.com
              </a>
            </div>

            {/* Social Icons */}
            <div className="contact-socials">
              <a 
                href="https://github.com/toma003" 
                target="_blank" 
                rel="noreferrer" 
                className="social-btn" 
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="social-svg">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com/in/tomalika-paul-t-3514503a2/" 
                target="_blank" 
                rel="noreferrer" 
                className="social-btn" 
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="social-svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="contact-form-col">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row-dual">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    required 
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Jane"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane.doe@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  required 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <div className="form-actions">
                <button type="submit" className="contact-submit-btn">
                  Send Message →
                </button>
                {submitted && (
                  <span className="submit-success-msg">✓ Message recorded!</span>
                )}
              </div>
            </form>
          </div>

        </div>

        {/* =========================================================
            2. INTEGRATED FOOTER BAR (Clean & Centered)
           ========================================================= */}
        <div className="integrated-footer">
          <p className="footer-copyright">
            Designed & Built by <span className="highlight-name">Tomalika Paul Toma</span> • © {new Date().getFullYear()}
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;
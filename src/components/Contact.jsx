


import { useEffect, useRef, useState } from 'react';
import './Contact.css';

function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

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
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleOpen = () => {
    setIsSubmitted(false);
    setFormData({ name: '', email: '', message: '' });
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="section-header">
        <h2 className="section-title">Get In Touch</h2>
        <div className="section-underline"></div>
      </div>

      <div className={`contact-card ${isVisible ? 'is-visible' : ''}`}>
        <p className="contact-message">
          I'm currently looking for opportunities to learn and collaborate. Feel free
          to reach out if you'd like to connect.
        </p>

        <button type="button" onClick={handleOpen} className="email-button">
          Say Hello
        </button>

        <p className="contact-email-text">
          or email directly at: <span>tomapaul150@gmail.com</span>
        </p>

        <div className="contact-links">
          {/* GitHub Icon */}
          <a
            href="https://github.com/toma003"
            target="_blank"
            rel="noreferrer"
            className="social-icon-btn"
            title="GitHub"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/tomalika-paul-t-3514503a2/"
            target="_blank"
            rel="noreferrer"
            className="social-icon-btn"
            title="LinkedIn"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 1 0-.01-2.9 1.45 1.45 0 0 0 .01 2.9m1.37 9.74V9.94H5.1v8.56h2.73z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* POPUP MODAL */}
      {isOpen && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={handleClose}>✕</button>
            <div className="modal-header">
              <span className="modal-icon">✉</span>
              <h3 className="modal-title">Contact Me</h3>
            </div>
            {isSubmitted ? (
              <div className="modal-success">
                <h4>Message Sent!</h4>
                <p>Thank you for reaching out. I'll get back to you soon.</p>
                <button type="button" className="email-button" onClick={handleClose}>Close</button>
              </div>
            ) : (
              <form className="modal-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Your Message</label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Message ✉</button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;
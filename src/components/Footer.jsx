

import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer-main">
        Designed & Built by <span className="footer-name">Tomalika Paul Toma</span> • © {currentYear}
      </p>
      <p className="footer-sub">
        Built with React & Vite
      </p>
    </footer>
  );
}

export default Footer;
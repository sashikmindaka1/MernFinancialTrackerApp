import './Footer.css';

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        
        {/* Left Side: Brand Logo & Short Bio */}
        <div className="footer-brand">
          <h2 className="footer-logo">SM <span>Financial</span></h2>
          <p className="footer-text">
            Empowering you to take control of your money, track expenses, and build lasting wealth with smart digital solutions.
          </p>
        </div>

        {/* Center: Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#about">About Us</a></li>
          </ul>
        </div>

        {/* Right Side: Contact & Copyright Info */}
        <div className="footer-info">
          <h4>Get In Touch</h4>
          <p>Email: support@smfinancial.com</p>
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} SM Financial. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
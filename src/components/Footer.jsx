import { NavLink } from "react-router-dom";


export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        {/* Brand */}
        <div className="footer-brand">
          <h2><i className="ti ti-code-circle" aria-hidden="true"></i>MyPortfolio</h2>
          <p>Crafting modern web experiences with React & Full Stack technologies.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><NavLink to="/"><i className="ti ti-home"></i>Home</NavLink></li>
            <li><NavLink to="/projects"><i className="ti ti-layout-grid"></i>Projects</NavLink></li>
            <li><NavLink to="/about"><i className="ti ti-user"></i>About</NavLink></li>
            <li><NavLink to="/contact"><i className="ti ti-mail"></i>Contact</NavLink></li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="footer-social">
          <h4>Connect</h4>
          <div className="soc-row">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="soc-btn" title="GitHub">
              <i className="ti ti-brand-github"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="soc-btn" title="LinkedIn">
              <i className="ti ti-brand-linkedin"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="soc-btn" title="Twitter">
              <i className="ti ti-brand-twitter"></i>
            </a>
            <a href="mailto:you@email.com" className="soc-btn" title="Email">
              <i className="ti ti-mail"></i>
            </a>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p className="copy">© {new Date().getFullYear()} All rights reserved</p>
        <span className="built">
          <i className="ti ti-brand-react"></i>
          Built with React &amp; designed by me
        </span>
      </div>

    </footer>
  );
}
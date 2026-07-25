import { NavLink } from "react-router-dom";
import { useState } from "react";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        {/* Logo */}
        <NavLink to="/" className="logo">
          <i className="ti ti-code-circle" aria-hidden="true"></i>
          MyPortfolio
        </NavLink>

        {/* Centered Links (desktop) */}
        <div className="nav-center">
          <ul className="nav-links">
            <li><NavLink to="/" end><i className="ti ti-home" aria-hidden="true"></i>Home</NavLink></li>
            <li><a href="/#skills"><i className="ti ti-code" aria-hidden="true"></i>Skills</a></li>
            <li><a href="/#projects"><i className="ti ti-layout-grid" aria-hidden="true"></i>Projects</a></li>
            <li><a href="/#certificates"><i className="ti ti-certificate" aria-hidden="true"></i>Certificates</a></li>
            <li><a href="/#education"><i className="ti ti-school" aria-hidden="true"></i>Education</a></li>
            <li><a href="/#tools"><i className="ti ti-tool" aria-hidden="true"></i>Tools</a></li>
            <li><NavLink to="/contact"><i className="ti ti-mail" aria-hidden="true"></i>Contact</NavLink></li>
          </ul>
        </div>

        {/* Right side */}
        <div className="nav-right">
          <a href="/resume/my_resume.pdf" download className="resume-btn desktop">
            <i className="ti ti-download" aria-hidden="true"></i>Resume
          </a>
          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" end onClick={() => setMenuOpen(false)}>
          <i className="ti ti-home"></i>Home
        </NavLink>
        <a href="/#skills" onClick={() => setMenuOpen(false)}>
          <i className="ti ti-code"></i>Skills
        </a>
        <a href="/#projects" onClick={() => setMenuOpen(false)}>
          <i className="ti ti-layout-grid"></i>Projects
        </a>
        <a href="/#certificates" onClick={() => setMenuOpen(false)}>
          <i className="ti ti-certificate"></i>Certificates
        </a>
        <a href="/#education" onClick={() => setMenuOpen(false)}>
          <i className="ti ti-school"></i>Education
        </a>
        <a href="/#tools" onClick={() => setMenuOpen(false)}>
          <i className="ti ti-tool"></i>Tools
        </a>
        <NavLink to="#contact" onClick={() => setMenuOpen(false)}>
          <i className="ti ti-mail"></i>Contact
        </NavLink>
        <a href="/resume/my_resume.pdf" download className="resume-btn mobile">
          <i className="ti ti-download"></i>Download Resume
        </a>
      </div>
    </>
  );
}
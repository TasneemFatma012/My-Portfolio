import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import Projects from "./Projects";
import Certificates from "./Certificates";
import About from "./About";
import Contact from "./Contact";

// React Icons
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiPostman,
  SiVercel,
  SiRender,
 
  SiEjs,
  SiJsonwebtokens,
} from "react-icons/si";

import { MdAnalytics } from "react-icons/md";
import { VscVscode } from "react-icons/vsc";
const typingPhrases = [
  "Full Stack Developer",
  "React Developer",
  "MERN Stack Engineer",
  "Open to Work",
];

// Technology Data
const technologies = [
  { name: "React.js", icon: <FaReact color="#61DBFB" /> },
  { name: "Node.js", icon: <FaNodeJs color="#3C873A" /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "EJS", icon: <SiEjs color="#B4CA65" /> },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
  { name: "SQL", icon: <FaDatabase color="#4db6ff" /> },
  { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
  { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
  { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
  { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#38BDF8" /> },
  { name: "JWT Auth", icon: <SiJsonwebtokens color="#ff4d4d" /> },
  { name: "Git", icon: <FaGitAlt color="#F05032" /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Power BI", icon: <MdAnalytics color="#F2C811" /> },
];

// Tool Data
const tools = [
  { name: "VS Code", icon: <VscVscode color="#007ACC" /> },
  { name: "Git", icon: <FaGitAlt color="#F05032" /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
  { name: "MongoDB Compass", icon: <SiMongodb color="#47A248" /> },
  { name: "MySQL", icon: <SiMysql color="#00758F" /> },
  { name: "Vercel", icon: <SiVercel /> },
  { name: "Render", icon: <SiRender color="#46E3B7" /> },
];

export default function Home() {
  const typedRef = useRef(null);
  const statsRef = useRef([]);

  /* Typing Animation */

  useEffect(() => {
    let pi = 0;
    let ci = 0;
    let deleting = false;
    let timer;

    function type() {
      const el = typedRef.current;

      if (!el) return;

      const word = typingPhrases[pi];

      if (!deleting) {
        el.textContent = word.slice(0, ++ci);

        if (ci === word.length) {
          deleting = true;
          timer = setTimeout(type, 1200);
          return;
        }
      } else {
        el.textContent = word.slice(0, --ci);

        if (ci === 0) {
          deleting = false;
          pi = (pi + 1) % typingPhrases.length;
        }
      }

      timer = setTimeout(type, deleting ? 60 : 100);
    }

    type();

    return () => clearTimeout(timer);
  }, []);

  /* Stats Counter */

  useEffect(() => {
    statsRef.current.forEach((el) => {
      if (!el) return;

      const target = Number(el.dataset.target);

      let current = 0;

      const step = Math.ceil(target / 30);

      const timer = setInterval(() => {
        current = Math.min(current + step, target);

        el.textContent = current;

        if (current >= target) clearInterval(timer);
      }, 50);
    });
  }, []);

  return (
    <div className="home" id="top">

      {/* Progress */}

      <div className="progress-bar">
        <div className="progress-fill" id="progress-fill"></div>
      </div>

      {/* HERO */}

      <section className="hero">

        <div className="hero-photo-col">

          <div className="hero-photo-frame">

            <img
              src="./images/my-pic.jpeg"
              alt="Tasneem Fatma"
              className="hero-photo"
            />

          </div>

        </div>

        <div className="hero-text">

          <p className="hero-eyebrow">
            Available for Hire
          </p>

          <h1>
            Hi, I'm
            <span className="hero-highlight">
              {" "}Tasneem Fatma
            </span>
          </h1>

          <div className="typing-wrap">
            <span ref={typedRef}></span>
            <span className="typing-cursor"></span>
          </div>

          <div className="buttons">

            <Link
              to="/projects"
              className="btn btn-primary"
            >
              View Projects
            </Link>

            <a
              href="../resume/resume.pdf"
              download
              className="btn btn-secondary"
            >
              Download Resume
            </a>

          </div>

          <div className="socials">

            <a
              href="https://github.com/TasneemFatma012"
              target="_blank"
              rel="noreferrer"
              className="soc-btn"
            >
              <i className="ti ti-brand-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/tasneem-fatma-7933ba344"
              target="_blank"
              rel="noreferrer"
              className="soc-btn"
            >
              <i className="ti ti-brand-linkedin"></i>
            </a>

            <a
              href="mailto:tasneemfatma8271@gmail.com"
              className="soc-btn"
            >
              <i className="ti ti-mail"></i>
            </a>

          </div>

        </div>

      </section>

      {/* STATS */}

      <div className="stats-row">

        <div className="stat">
          <div
            className="stat-num"
            data-target="5"
            ref={(el) => (statsRef.current[0] = el)}
          >
            0
          </div>

          <div className="stat-lbl">
            Certificates
          </div>
        </div>

        <div className="stat">
          <div
            className="stat-num"
            data-target="1"
            ref={(el) => (statsRef.current[1] = el)}
          >
            0
          </div>

          <div className="stat-lbl">
            Internship
          </div>
        </div>

        <div className="stat">
          <div
            className="stat-num"
            data-target="6"
            ref={(el) => (statsRef.current[2] = el)}
          >
            0
          </div>

          <div className="stat-lbl">
            Projects
          </div>
        </div>

      </div>
            {/* ================= SKILLS ================= */}

      <section className="section" id="skills">

        <p className="section-label">
          Skills
        </p>

        <div className="section-head">

          <div className="sec-icon">
            <i className="ti ti-code"></i>
          </div>

          <h2>
            Technologies
          </h2>

        </div>

        <div className="skills-grid">

          {technologies.map((tech, index) => (

            <div
              className="skill-card"
              key={index}
            >

              <div className="skill-icon">
                {tech.icon}
              </div>

              <h4>{tech.name}</h4>

            </div>

          ))}

        </div>

      </section>



      {/* ================= FEATURED PROJECTS ================= */}

      <section
        className="section"
        id="projects"
      >

        <p className="section-label">
          Featured Work
        </p>

        <div className="section-head">

          <div className="sec-icon">
            <i className="ti ti-layout-grid"></i>
          </div>

          <h2>
            Featured Projects
          </h2>

        </div>

        <p
          style={{
            color: "var(--text-secondary)",
            marginBottom: "30px",
          }}
        >
          Here are some of my recent Full Stack, React and MERN
          applications. Every project demonstrates responsive UI,
          backend integration, authentication and deployment.
        </p>

        <Projects />

      </section>
            {/* ================= CERTIFICATES ================= */}

      <section
        className="section"
        id="certificates"
      >
 <Certificates />

      </section>



      {/* ================= EDUCATION ================= */}

      <section
        className="section"
        id="education"
      >

        <About />

      </section>



      {/* ================= TOOLS ================= */}

      <section
        className="section"
        id="tools"
      >

        <p className="section-label">
          Development Tools
        </p>

        <div className="section-head">

          <div className="sec-icon">
            <i className="ti ti-tool"></i>
          </div>

          <h2>
            Tools & Platforms
          </h2>

        </div>

        <div className="skills-grid">

          {tools.map((tool, index) => (

            <div
              className="skill-card"
              key={index}
            >

              <div className="skill-icon">
                {tool.icon}
              </div>

              <h4>{tool.name}</h4>

            </div>

          ))}

        </div>

      </section>



      {/* ================= CONTACT CTA ================= */}

      <section className="section" id="contact">
        <Contact />
      </section>

    </div>
  );
}
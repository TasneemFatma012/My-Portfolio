import {
  FaGraduationCap,
  FaBriefcase,
  FaUniversity,
  FaLaptopCode,
} from "react-icons/fa";

export default function About() {
  return (
    <section className="about-section">

      {/* EDUCATION */}

      <div className="about-block">

        <div className="title-row">
          <FaGraduationCap className="title-icon" />
          <h2>Education</h2>
        </div>

        <div className="timeline">

          <div className="timeline-card">
            <div className="timeline-icon">
              <FaUniversity />
            </div>

            <div className="timeline-content">
              <h3>Master of Computer Applications</h3>
              <h4>Arka Jain University</h4>
              <p>2025 – 2027</p>
              <span>CGPA : 9.08</span>
            </div>
          </div>

          <div className="timeline-card">
            <div className="timeline-icon">
              <FaUniversity />
            </div>

            <div className="timeline-content">
              <h3>Bachelor of Computer Applications</h3>
              <h4>Jamshedpur Women's College</h4>
              <p>2020 – 2023</p>
              <span>CGPA : 9.0</span>
            </div>
          </div>

          <div className="timeline-card">
            <div className="timeline-icon">
              <FaUniversity />
            </div>

            <div className="timeline-content">
              <h3>Intermediate (+2)</h3>
              <h4>Karim City College</h4>
              <p>2018 – 2020</p>
              <span>72%</span>
            </div>
          </div>

          <div className="timeline-card">
            <div className="timeline-icon">
              <FaUniversity />
            </div>

            <div className="timeline-content">
              <h3>Class X</h3>
              <h4>M.O. Academy</h4>
              <p>2018</p>
              <span>85%</span>
            </div>
          </div>

        </div>

      </div>

      {/* EXPERIENCE */}

      <div className="about-block">

        <div className="title-row">
          <FaBriefcase className="title-icon" />
          <h2>Experience</h2>
        </div>

        <div className="timeline">

          <div className="timeline-card">
            <div className="timeline-icon">
              <FaLaptopCode />
            </div>

            <div className="timeline-content">
              <h3>Full Stack Developer</h3>
              <h4>Personal Projects</h4>
              <p>MERN Stack Development</p>

              <span>
                HomeAssist • Portfolio • Zerodha Clone • Trading Dashboard
              </span>
            </div>
          </div>

          <div className="timeline-card">
            <div className="timeline-icon">
              <FaLaptopCode />
            </div>

            <div className="timeline-content">
              <h3>Frontend Developer</h3>
              <h4>React.js</h4>
              <p>Modern UI Development</p>

              <span>
                React • Routing • APIs • Responsive Design
              </span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
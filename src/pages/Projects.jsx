import { useMemo, useState } from "react";
import {
  FaCode,
  FaServer,
  FaLayerGroup,
  FaSearch,
  FaLaptopCode,
} from "react-icons/fa";

import ProjectCard from "../components/ProjectCard";
import Modal from "../components/Modal";

/* ===========================
   PROJECT DATA
=========================== */
const projects = [
  {
    id: 1,
    title: "SkyNest",
    subtitle: "Airbnb Inspired Rental Platform",
    category: "Full Stack",
    image: "/images/SkyNest.png",
    status: "Completed",
    year: "2026",
    duration: "3 Months",
    role: "Full Stack Developer",
    featured: true,

    description:
      "A full-stack vacation rental platform where users can explore listings, book properties, leave reviews, and hosts can manage their listings through a secure dashboard.",

    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Bootstrap",
      "Cloudinary",
      "JWT",
      "Render"
    ],

    features: [
      "Authentication",
      "Role Based Access",
      "CRUD Listings",
      "Booking System",
      "Reviews & Ratings",
      "Image Upload",
      "Responsive UI",
      "Host Dashboard"
    ],

    architecture: {
      frontend: "React",
      backend: "Node.js + Express",
      database: "MongoDB",
      deployment: "Render"
    },

    challenges: [
      "Secure Authentication",
      "Cloudinary Image Upload",
      "Role Based Authorization",
      "Booking Workflow"
    ],

    learnings: [
      "REST APIs",
      "Authentication",
      "MongoDB Relationships",
      "Deployment"
    ],

    github: "https://github.com/TasneemFatma012/SkyNest-platform.git",
    demo: "https://majorproject-31pu.onrender.com"
  },

  {
    id: 2,
    title: "Home Mitra",
    subtitle: "Local Service Marketplace",
    category: "Full Stack",
    image: "/images/home-mitra.png",
    status: "Completed",
    year: "2026",
    duration: "2 Months",
    role: "Full Stack Developer",

    description:
      "A marketplace for booking trusted local services with user authentication, service listings, booking management, and an admin dashboard.",

    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Cloudinary"
    ],

    features: [
      "Authentication",
      "Service Booking",
      "Wishlist",
      "Admin Dashboard",
      "Search",
      "Categories"
    ],

    architecture: {
      frontend: "React",
      backend: "Express",
      database: "MongoDB",
      deployment: "Render"
    },

    challenges: [
      "Booking Management",
      "Role Based Access",
      "Database Design"
    ],

    learnings: [
      "Express",
      "MongoDB",
      "Authentication",
      "Project Deployment"
    ],

    github: "https://github.com/TasneemFatma012/home-mitra.git",
    demo: "https://home-mitra.onrender.com"
  },

  {
    id: 3,
    title: "Nexora Trading Dashboard",
    subtitle: "Stock Trading Dashboard",
    category: "Full Stack",
    image: "/images/Nexora.png",
    status: "Completed",
    year: "2026",
    duration: "2 Months",
    role: "Frontend & Backend Developer",

    description:
      "A trading dashboard inspired by Zerodha Kite with holdings, funds, orders, watchlist, charts, and portfolio analytics.",

    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Chart.js"
    ],

    features: [
      "Dashboard",
      "Portfolio",
      "Orders",
      "Funds",
      "Holdings",
      "Analytics Charts"
    ],

    architecture: {
      frontend: "React",
      backend: "Node.js",
      database: "MongoDB",
      deployment: "Vercel"
    },

    challenges: [
      "Chart Integration",
      "Responsive Dashboard",
      "State Management"
    ],

    learnings: [
      "React Components",
      "REST APIs",
      "Chart.js",
      "Performance Optimization"
    ],

    github:
      "https://github.com/TasneemFatma012/Nexora-Trading-Platform-Dasboard.git",

    demo:
      "https://nexora-dashboard-zeta.vercel.app"
  },

  {
    id: 4,
    title: "Portfolio Website",
    subtitle: "Developer Portfolio",
    category: "Frontend",
    image: "/images/portfolio.png",
    status: "Completed",
    year: "2026",
    duration: "1 Month",
    role: "Frontend Developer",

    description:
      "A modern developer portfolio showcasing projects, skills, certificates, contact information, and resume with beautiful animations.",

    technologies: [
      "React",
      "JavaScript",
      "CSS",
      "Framer Motion"
    ],

    features: [
      "Dark Theme",
      "Responsive Design",
      "Animated Sections",
      "Project Filter",
      "Contact Form",
      "Resume Download"
    ],

    architecture: {
      frontend: "React",
      backend: "None",
      database: "None",
      deployment: "Vercel"
    },

    challenges: [
      "Responsive Layout",
      "Animation Optimization"
    ],

    learnings: [
      "React Hooks",
      "UI Design",
      "Animations"
    ],

    github: "https://github.com/TasneemFatma012",
    demo: "https://your-portfolio.vercel.app"
  },

  {
    id: 5,
    title: "Backend REST API",
    subtitle: "Authentication & CRUD API",
    category: "Backend",
    image: "/images/backend.png",
    status: "Completed",
    year: "2026",
    duration: "1 Month",
    role: "Backend Developer",

    description:
      "A scalable REST API with JWT authentication, CRUD operations, role-based authorization, validation, and MongoDB integration.",

    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Postman"
    ],

    features: [
      "JWT Authentication",
      "Role Based Access",
      "CRUD APIs",
      "Input Validation",
      "Error Handling",
      "REST Architecture"
    ],

    architecture: {
      frontend: "API Only",
      backend: "Express",
      database: "MongoDB",
      deployment: "Render"
    },

    challenges: [
      "JWT Security",
      "Middleware Design",
      "API Validation"
    ],

    learnings: [
      "REST API Design",
      "JWT",
      "Middleware",
      "Backend Deployment"
    ],

    github:
      "https://github.com/TasneemFatma012/zerodha-backend.git",

    demo: "#"
  }
];
/* ===========================
   CATEGORY DATA
=========================== */

const categories = [
  {
    name:"All",
    icon:<FaLaptopCode/>
  },

  {
    name:"Frontend",
    icon:<FaCode/>
  },

  {
    name:"Backend",
    icon:<FaServer/>
  },

  {
    name:"Full Stack",
    icon:<FaLayerGroup/>
  }
];

export default function Projects(){

  const [filter,setFilter]=useState("All");

  const [search,setSearch]=useState("");

  const [selected,setSelected]=useState(null);

  /* ===========================
     FILTER + SEARCH
  =========================== */

  const filteredProjects=useMemo(()=>{

    return projects.filter(project=>{

      const categoryMatch=
      filter==="All"
      ||
      project.category===filter;

      const searchMatch=
      project.title
      .toLowerCase()
      .includes(search.toLowerCase());

      return categoryMatch && searchMatch;

    });

  },[filter,search]);

  const totalProjects=projects.length;

  const frontendCount=
  projects.filter(
    p=>p.category==="Frontend"
  ).length;

  const backendCount=
  projects.filter(
    p=>p.category==="Backend"
  ).length;

  const fullstackCount=
  projects.filter(
    p=>p.category==="Full Stack"
  ).length;
    return (
    <section className="projects">


      {/* ================= STATS ================= */}

      <div className="project-stats">

        <div className="stat-card">

          <h3>{totalProjects}</h3>

          <span>Total Projects</span>

        </div>

        <div className="stat-card">

          <h3>{fullstackCount}</h3>

          <span>Full Stack</span>

        </div>

        <div className="stat-card">

          <h3>{frontendCount}</h3>

          <span>Frontend</span>

        </div>

        <div className="stat-card">

          <h3>{backendCount}</h3>

          <span>Backend</span>

        </div>

      </div>

      {/* ================= TERMINAL ================= */}

      <div className="term-bar">

        <div className="term-chrome">

          <span className="red"></span>
          <span className="yellow"></span>
          <span className="green"></span>

        </div>

        <div className="term-line">

          <span className="prompt">$</span>

          ls ./projects

          {filter !== "All" && (

            <span className="arg">

              {" "}
              --filter=
              {filter.toLowerCase().replace(" ", "-")}

            </span>

          )}

          <span className="cursor"></span>

        </div>

      </div>

      {/* ================= SEARCH ================= */}

      <div className="search-box">

        <FaSearch />

        <input
          type="text"
          placeholder="Search project..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {/* ================= FILTERS ================= */}

      <div className="filters">

        {categories.map((cat) => (

          <button
            key={cat.name}
            className={
              filter === cat.name
                ? "active"
                : ""
            }
            onClick={() => setFilter(cat.name)}
          >

            {cat.icon}

            <span>{cat.name}</span>

          </button>

        ))}

      </div>

      {/* ================= PROJECT GRID ================= */}

      <div className="project-grid">

        {filteredProjects.length > 0 ? (

          filteredProjects.map((project) => (

            <ProjectCard
              key={project.title}
              project={project}
              featured={project.featured}
              onClick={() => setSelected(project)}
            />

          ))

        ) : (

          <div className="empty-projects">

            <h3>No Project Found</h3>

            <p>
              Try searching with another keyword.
            </p>

          </div>

        )}

      </div>
            {/* ================= MODAL ================= */}

      {selected && (
        <Modal
          project={selected}
          close={() => setSelected(null)}
        />
      )}

      {/* ================= FOOTER ================= */}

      <div className="projects-footer">

        <h3>Want to see more projects?</h3>

        <p>
          Visit my GitHub profile to explore more repositories,
          experiments and open-source contributions.
        </p>

        <a
          href="https://github.com/TasneemFatma012"
          target="_blank"
          rel="noopener noreferrer"
          className="github-btn"
        >
          View GitHub
        </a>

      </div>

    </section>
  );
}
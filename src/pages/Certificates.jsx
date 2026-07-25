import { useState } from "react";
import {
  FaCode,
  FaServer,
  FaLayerGroup,
  FaChartBar,
  FaBriefcase,
  FaAward,
} from "react-icons/fa";

import CertificateCard from "../components/CertificateCard";
import Modal from "../components/Modal";

const certificates = [
  {
    title: "Full Stack Web Development",
    issuer: "Apna College",
    category: "Full Stack",
    image: "/certificates/fullstack.png",
    pdf: "/certificates/fullstack.pdf",
  },
  {
    title: "Database Management System",
    issuer: "NPTEL",
    category: "Backend",
    image: "/certificates/dbms.png",
    pdf: "/certificates/dbms.pdf",
  },
  {
    title: "Web Development Internship",
    issuer: "Internship Certificate",
    category: "Frontend",
    image: "/certificates/web-internship.png",
    pdf: "/certificates/web-internship.pdf",
  },
  {
    title: "Basic Excel with Data Analytics",
    issuer: "Skill Venturing Digital Pvt. Ltd.",
    category: "Data",
    image: "/certificates/excel.png",
    pdf: "/certificates/excel.pdf",
  },
  {
    title: "Business Communication",
    issuer: "Coursera",
    category: "Professional",
    image: "/certificates/Coursera.png",
    pdf: "/certificates/Coursera.pdf",
  },
];

const categories = [
  {
    name: "All",
    icon: <FaAward />,
  },
  {
    name: "Frontend",
    icon: <FaCode />,
  },
  {
    name: "Backend",
    icon: <FaServer />,
  },
  {
    name: "Full Stack",
    icon: <FaLayerGroup />,
  },
  {
    name: "Data",
    icon: <FaChartBar />,
  },
  {
    name: "Professional",
    icon: <FaBriefcase />,
  },
];

export default function Certificates() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const filteredCertificates =
    filter === "All"
      ? certificates
      : certificates.filter(
          (item) => item.category === filter
        );

  return (
    <section className="certificates">

      <div className="certificate-header">

        <h2>🏆 My Certifications</h2>

        <p>
          {filteredCertificates.length} Certificate
          {filteredCertificates.length > 1 ? "s" : ""}
        </p>

      </div>

      {/* Filter */}

      <div className="filters">

        {categories.map((cat) => (

          <button
            key={cat.name}
            className={filter === cat.name ? "active" : ""}
            onClick={() => setFilter(cat.name)}
          >
            {cat.icon}
            <span>{cat.name}</span>
          </button>

        ))}

      </div>

      {/* Cards */}

      <div className="certificate-grid">

        {filteredCertificates.map((certificate, index) => (

          <CertificateCard
            key={index}
            certificate={certificate}
            onClick={() => setSelected(certificate)}
          />

        ))}

      </div>

      {selected && (
        <Modal
          project={selected}
          close={() => setSelected(null)}
        />
      )}

    </section>
  );
}
export default function ProjectCard({
  project,
  featured,
  onClick,
}) {
  return (
    <div
      className={`project-card ${featured ? "featured" : ""}`}
      onClick={onClick}
    >
      <div className="card-media">
        <img
          src={project.image}
          alt={project.title}
        />

        <span className="project-category">
          {project.category}
        </span>

        {featured && (
          <span className="featured-badge">
            ⭐ Featured
          </span>
        )}
      </div>

      <div className="card-body">
        <h3>{project.title}</h3>

        <p className="subtitle">
          {project.subtitle}
        </p>

        <p className="description">
          {project.description}
        </p>

        <div className="tech-stack">
          {project.technologies
            .slice(0, 4)
            .map((tech) => (
              <span key={tech} className="tech-chip">
                {tech}
              </span>
            ))}
        </div>

        <div className="card-footer">
          <span>{project.year}</span>

          <span>{project.duration}</span>

          <button className="view-btn">
            View Details →
          </button>
        </div>
      </div>
    </div>
  );
}
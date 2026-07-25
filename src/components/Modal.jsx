export default function Modal({ project, close }) {
  if (!project) return null;

  return (
    <div className="modal-bg" onClick={close}>
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="close"
          onClick={close}
        >
          ✖
        </button>

        <div className="card-media">
          <img
            src={project.image}
            alt={project.title}
          />
        </div>

        <h2>{project.title}</h2>

        <p>{project.description}</p>

        <div className="modal-buttons">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}
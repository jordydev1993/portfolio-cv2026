import PropTypes from 'prop-types';

function ProjectCard({ project }) {
  const hasExternalImage = project.imagen && project.imagen.startsWith('http');
  const label = project.imagen || project.nombre;

  return (
    <article className="project-card">
      <div className="project-visual" data-variant={project.id % 4}>
        {hasExternalImage ? (
          <img src={project.imagen} alt={project.nombre} className="project-image" />
        ) : (
          <div className="project-placeholder">
            <span>{label}</span>
          </div>
        )}
      </div>

      <div className="project-content">
        <div className="project-meta">
          <span>{project.rol}</span>
          <span>{project.fecha}</span>
        </div>
        <h3>{project.nombre}</h3>
        <p>{project.descripcion}</p>
        <div className="tag-row">
          {project.tecnologias.map((tech) => (
            <span key={tech} className="tech-chip">
              {tech}
            </span>
          ))}
        </div>
        <div className="project-actions">
          <a href={project.enlace} target="_blank" rel="noreferrer">
            Ver proyecto
          </a>
        </div>
      </div>
    </article>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    rol: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    tecnologias: PropTypes.arrayOf(PropTypes.string).isRequired,
    fecha: PropTypes.string.isRequired,
    enlace: PropTypes.string.isRequired,
    imagen: PropTypes.string,
  }).isRequired,
};

export default ProjectCard;

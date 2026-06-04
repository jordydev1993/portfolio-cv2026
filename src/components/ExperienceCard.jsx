import PropTypes from 'prop-types';

function ExperienceCard({ experience }) {
  return (
    <article className="experience-card">
      <div className="experience-meta">
        <span>{experience.puesto}</span>
        <strong>{experience.empresa}</strong>
        <small>{experience.ubicacion}</small>
        <small>
          {experience.fecha_inicio} - {experience.fecha_fin}
        </small>
      </div>
      <ul className="experience-list">
        {experience.responsabilidades.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    puesto: PropTypes.string.isRequired,
    empresa: PropTypes.string.isRequired,
    ubicacion: PropTypes.string.isRequired,
    fecha_inicio: PropTypes.string.isRequired,
    fecha_fin: PropTypes.string.isRequired,
    responsabilidades: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default ExperienceCard;

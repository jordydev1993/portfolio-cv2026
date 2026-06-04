import PropTypes from 'prop-types';

function SkillBadge({ label }) {
  return <span className="skill-badge">{label}</span>;
}

SkillBadge.propTypes = {
  label: PropTypes.string.isRequired,
};

export default SkillBadge;

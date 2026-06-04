import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

function Navbar({ tema, toggleTema, personal }) {
  const nameInitials = personal.nombre
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('');

  const navigationItems = [
    { to: '/', label: 'Inicio' },
    { to: '/about', label: 'Sobre mí' },
    { to: '/projects', label: 'Proyectos' },
    { to: '/contact', label: 'Contacto' },
  ];

  return (
    <header className="topbar">
      <Link to="/" className="brand" aria-label={`Ir al inicio de ${personal.nombre}`}>
        <span className="brand-mark">{nameInitials}</span>
        <span className="brand-copy">
          <strong>{personal.nombre}</strong>
          <small>{personal.titulo}</small>
        </span>
      </Link>

      <nav className="navlinks" aria-label="Navegación principal">
        {navigationItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => `navlink ${isActive ? 'is-active' : ''}`}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <button type="button" className="theme-toggle" onClick={toggleTema}>
        <span>{tema === 'dark' ? 'Modo claro' : 'Modo oscuro'}</span>
        <strong>{tema === 'dark' ? '☀' : '☾'}</strong>
      </button>
    </header>
  );
}

Navbar.propTypes = {
  tema: PropTypes.oneOf(['light', 'dark']).isRequired,
  toggleTema: PropTypes.func.isRequired,
  personal: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
  }).isRequired,
};

export default Navbar;

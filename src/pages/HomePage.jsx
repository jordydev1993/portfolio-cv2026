import { useRef } from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import SkillBadge from '../components/SkillBadge';
import ProjectCard from '../components/ProjectCard';
import ExperienceCard from '../components/ExperienceCard';
import { experienceData, personalData, projectsData, skillsData } from '../data/portfolioData';

function HomePage() {
  const projectsRef = useRef(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="page-shell">
      <section className="hero-panel hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker">Portfolio / CV interactivo</p>
          <h1>{personalData.nombre}</h1>
          <p className="hero-title">{personalData.titulo}</p>
          <p className="hero-description">{personalData.sobre_mi}</p>

          <div className="tag-row hero-tags">
            {skillsData.tecnicas.slice(0, 6).map((skill) => (
              <SkillBadge key={skill} label={skill} />
            ))}
          </div>

          <div className="hero-actions">
            <button type="button" className="primary-button" onClick={scrollToProjects}>
              Ver proyectos
            </button>
            <Link to="/contact" className="secondary-button">
              Contacto
            </Link>
          </div>
        </div>

        <aside className="hero-card">
          <div className="hero-card-top">
            <span>Ubicación</span>
            <strong>{personalData.ubicacion}</strong>
          </div>
          <div className="hero-card-top">
            <span>Email</span>
            <strong>{personalData.email}</strong>
          </div>
          <div className="hero-card-top">
            <span>Enlaces</span>
            <strong className="hero-links">
              <a href={personalData.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={personalData.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={personalData.sitio_web} target="_blank" rel="noreferrer">
                Web
              </a>
            </strong>
          </div>
        </aside>
      </section>

      <section className="content-section" ref={projectsRef}>
        <SectionHeading eyebrow="Portfolio" title="Proyectos destacados" action={<Link to="/projects">Ver todos</Link>} />
        <div className="projects-grid compact-grid">
          {projectsData.slice(0, 2).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="content-section">
        <SectionHeading eyebrow="Experiencia" title="Trayectoria profesional" action={<Link to="/about">Ver más</Link>} />
        <div className="experience-grid compact-grid">
          {experienceData.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </section>

     <section className="content-section about-teaser">
  <SectionHeading 
    eyebrow="Sobre mí" 
    title="Analista de Sistemas apasionado por las soluciones tecnológicas" 
    action={<Link to="/about">Ver más</Link>} 
  />
  <p>
    Soy Analista de Sistemas con más de 5 años de experiencia en análisis de requerimientos, 
    diseño de soluciones y gestión de proyectos. Me especializo en transformar necesidades de negocio 
    en sistemas funcionales y escalables.
  </p>
</section>
    </div>
  );
}

export default HomePage;

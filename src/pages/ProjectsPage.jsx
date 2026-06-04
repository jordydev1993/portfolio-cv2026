import { useEffect, useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/portfolioData';

function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        setError('');
        await new Promise((resolve) => setTimeout(resolve, 180));
        setProjects(projectsData);
      } catch {
        setError('No fue posible cargar los proyectos.');
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  return (
    <div className="page-shell">
      <section className="content-section">
        <SectionHeading eyebrow="Proyectos" title="Trabajo seleccionado" />
        {loading ? <p className="state-message">Cargando proyectos...</p> : null}
        {error ? <p className="state-message error-message">{error}</p> : null}
        {!loading && !error ? (
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : null}
      </section>
    </div>
  );
}

export default ProjectsPage;

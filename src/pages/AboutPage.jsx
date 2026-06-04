import SectionHeading from '../components/SectionHeading';
import SkillBadge from '../components/SkillBadge';
import ExperienceCard from '../components/ExperienceCard';
import {
  certificationsData,
  educationData,
  experienceData,
  languagesData,
  personalData,
  skillsData,
} from '../data/portfolioData';

function AboutPage() {
  return (
    <div className="page-shell">
      <section className="content-section">
        <SectionHeading eyebrow="Sobre mí" title={personalData.nombre} />
        <div className="panel-copy">
          <p>{personalData.sobre_mi}</p>
          <p>
            Trabajo con foco en análisis, documentación y mejora de procesos. El objetivo es traducir necesidades de
            negocio en soluciones claras, mantenibles y medibles.
          </p>
        </div>
      </section>

      <section className="content-section">
        <SectionHeading eyebrow="Habilidades" title="Competencias" />
        <div className="badge-cloud">
          {skillsData.tecnicas.map((skill) => (
            <SkillBadge key={skill} label={skill} />
          ))}
        </div>
        <div className="badge-cloud secondary-cloud">
          {skillsData.blandas.map((skill) => (
            <SkillBadge key={skill} label={skill} />
          ))}
        </div>
      </section>

      <section className="content-section">
        <SectionHeading eyebrow="Experiencia" title="Historial laboral" />
        <div className="experience-grid">
          {experienceData.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </section>

      <section className="content-section">
        <SectionHeading eyebrow="Educación" title="Formación" />
        <div className="education-grid">
          {educationData.map((item) => (
            <article className="education-card" key={item.id}>
              <span>{item.institucion}</span>
              <h3>{item.titulo}</h3>
              <p>
                {item.fecha_inicio} - {item.fecha_fin}
              </p>
              <p>{item.descripcion}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section two-column-grid">
        <article className="info-card">
          <SectionHeading eyebrow="Certificaciones" title="Credenciales" />
          <ul className="plain-list">
            {certificationsData.map((certification) => (
              <li key={certification}>{certification}</li>
            ))}
          </ul>
        </article>

        <article className="info-card">
          <SectionHeading eyebrow="Idiomas" title="Capacidades lingüísticas" />
          <ul className="plain-list">
            {languagesData.map((language) => (
              <li key={language.idioma}>
                <strong>{language.idioma}</strong> - {language.nivel}
              </li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  );
}

export default AboutPage;

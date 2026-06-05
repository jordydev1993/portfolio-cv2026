function CalendlyEmbed() {
  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/your-name/30min';

  return (
    <aside className="calendly-panel">
      <p className="section-eyebrow">Calendly</p>
      <h3>Agendá una llamada</h3>
      <p>
        Acceso directo a mi calendario para que puedas reservar un espacio y charlar sobre oportunidades, proyectos o cualquier consulta que tengas.
      </p>
      <a className="calendly-button" href={calendlyUrl} target="_blank" rel="noreferrer">
        Abrir Calendly
      </a>
      
    </aside>
  );
}

export default CalendlyEmbed;

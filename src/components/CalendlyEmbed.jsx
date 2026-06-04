function CalendlyEmbed() {
  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/your-name/30min';

  return (
    <aside className="calendly-panel">
      <p className="section-eyebrow">Calendly</p>
      <h3>Agendá una llamada</h3>
      <p>
        El embed de Calendly puede bloquearse en GitHub Pages; por eso te dejo un acceso directo estable para abrir tu
        agenda sin romper el diseño.
      </p>
      <a className="calendly-button" href={calendlyUrl} target="_blank" rel="noreferrer">
        Abrir Calendly
      </a>
      <p className="calendly-note">Definí <strong>VITE_CALENDLY_URL</strong> con tu enlace real para usar tu agenda.</p>
    </aside>
  );
}

export default CalendlyEmbed;

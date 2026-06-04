import { useEffect } from 'react';

function CalendlyEmbed() {
  useEffect(() => {
    const scriptId = 'calendly-widget-script';

    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/your-name/30min';

  return (
    <div className="calendly-panel">
      <div
        className="calendly-inline-widget"
        data-url={calendlyUrl}
        style={{ minWidth: '320px', height: '760px' }}
      />
      <p className="calendly-note">
        Si querés agendar una llamada directa, reemplazá <strong>VITE_CALENDLY_URL</strong> por tu enlace real de
        Calendly.
      </p>
    </div>
  );
}

export default CalendlyEmbed;

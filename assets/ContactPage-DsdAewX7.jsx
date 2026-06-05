import { useEffect, useReducer } from 'react';
import SectionHeading from '../components/SectionHeading';
import CalendlyEmbed from '../components/CalendlyEmbed';
import { personalData } from '../data/portfolioData';

const initialState = {
  nombre: '',
  email: '',
  mensaje: '',
  touched: {},
  submitted: false,
};

function formReducer(state, action) {
  switch (action.type) {
    case 'ACTUALIZAR_CAMPO':
      return {
        ...state,
        [action.campo]: action.valor,
      };
    case 'VALIDAR_CAMPO':
      return {
        ...state,
        touched: {
          ...state.touched,
          [action.campo]: true,
        },
      };
    case 'SUBMIT_OK':
      return {
        ...initialState,
        submitted: true,
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

function validateField(name, value) {
  if (name === 'nombre') {
    return value.trim().length >= 2 ? '' : 'Ingresá tu nombre completo.';
  }

  if (name === 'email') {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Ingresá un email válido.';
  }

  if (name === 'mensaje') {
    return value.trim().length >= 20 ? '' : 'Escribí un mensaje de al menos 20 caracteres.';
  }

  return '';
}

function ContactPage() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const fieldErrors = {
    nombre: validateField('nombre', state.nombre),
    email: validateField('email', state.email),
    mensaje: validateField('mensaje', state.mensaje),
  };

  const hasErrors = Object.values(fieldErrors).some(Boolean);

  useEffect(() => {
    if (!state.submitted) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      dispatch({ type: 'RESET' });
    }, 4500);

    return () => window.clearTimeout(timer);
  }, [state.submitted]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch({ type: 'ACTUALIZAR_CAMPO', campo: name, valor: value });
  };

  const handleBlur = (event) => {
    dispatch({ type: 'VALIDAR_CAMPO', campo: event.target.name });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (hasErrors) {
      dispatch({ type: 'VALIDAR_CAMPO', campo: 'nombre' });
      dispatch({ type: 'VALIDAR_CAMPO', campo: 'email' });
      dispatch({ type: 'VALIDAR_CAMPO', campo: 'mensaje' });
      return;
    }

    dispatch({ type: 'SUBMIT_OK' });
  };

  const getInputClassName = (fieldName) => {
    if (!state.touched[fieldName] && !state.submitted) {
      return 'field-input';
    }

    return `field-input ${fieldErrors[fieldName] ? 'is-invalid' : 'is-valid'}`;
  };

  return (
    <div className="page-shell contact-layout">
      <section className="content-section">
        <SectionHeading eyebrow="Contacto" title="Hablemos del próximo proyecto" />
        <div className="contact-grid">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <label>
              Nombre
              <input
                className={getInputClassName('nombre')}
                name="nombre"
                type="text"
                value={state.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Tu nombre"
              />
              {state.touched.nombre || state.submitted ? <small>{fieldErrors.nombre}</small> : null}
            </label>

            <label>
              Email
              <input
                className={getInputClassName('email')}
                name="email"
                type="email"
                value={state.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="tu@email.com"
              />
              {state.touched.email || state.submitted ? <small>{fieldErrors.email}</small> : null}
            </label>

            <label>
              Mensaje
              <textarea
                className={getInputClassName('mensaje')}
                name="mensaje"
                rows="7"
                value={state.mensaje}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Contame qué necesitás y en qué plazo querés avanzar."
              />
              {state.touched.mensaje || state.submitted ? <small>{fieldErrors.mensaje}</small> : null}
            </label>

            <div className="form-actions contact-actions">
              <button type="submit" className="primary-button">
                Enviar mensaje
              </button>
              <button type="button" className="secondary-button" onClick={() => dispatch({ type: 'RESET' })}>
                Limpiar
              </button>
            </div>

            {state.submitted ? (
              <p className="success-banner">
                Gracias. Te responderé pronto al correo que enviaste.
              </p>
            ) : null}
          </form>

          <aside className="contact-aside">
            <div className="contact-card">
              <h3>Datos directos</h3>
              <p>{personalData.email}</p>
              <p>{personalData.telefono}</p>
              <p>{personalData.ubicacion}</p>
            </div>
            <CalendlyEmbed />
          </aside>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;

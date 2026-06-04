# Actividad: CV Portafolio SPA en React

## Objetivo

Construir un **CV/Portafolio personal** como una **Single Page Application (SPA)** en React usando todos los conceptos vistos en clase. El resultado será un sitio web desplegado gratuitamente en **GitHub Pages**.

---

## Secciones obligatorias

Tu portafolio debe tener al menos estas 4 páginas:

| Página | Ruta | Contenido mínimo |
|---|---|---|
| **Inicio** | `/` | Nombre, título/profesión, foto, skills principales, link a contacto |
| **Sobre mí** | `/about` | Descripción personal, experiencia, educación, habilidades con badges |
| **Proyectos** | `/projects` | Lista de proyectos con cards (cargados desde JSON o fetch) |
| **Contacto** | `/contact` | Formulario de contacto con validación completa |

---

## Requisitos técnicos

Debés usar la mayor cantidad posible de los siguientes conceptos vistos en clase:

| Concepto | Dónde lo vimos | Dónde aplicarlo en tu portafolio |
|---|---|---|
| `BrowserRouter` / `HashRouter` | `main.jsx` | Envolver toda la app para navegación SPA |
| `<Routes>` y `<Route>` | `App.jsx` | Definir las rutas de cada página |
| `<Link>` | `NavigationBar.jsx` | Navbar con links a cada sección |
| `useState` | `components/useState/` | Tema dark/light, toggle de secciones, formulario |
| `useEffect` | `components/useEffect/` | Cargar proyectos, efecto de scroll, guardar tema |
| `useReducer` | `components/useReducer/` | Estado del formulario de contacto |
| `useRef` | `components/ollama/` | Auto-scroll, referencia a elementos del DOM |
| Custom hook `useLocalStorage` | `components/hooks-personalizados/` | Persistir el tema dark/light entre recargas |
| `PropTypes` | `basicos/TercerComponente.jsx` | Validar props de componentes (ProjectCard, SkillBadge, Navbar) |
| `.map()` con `key` | `basicos/SegundoComponente.jsx` | Listar habilidades, proyectos, experiencia |
| Renderizado condicional (`&&`, ternario) | `basicos/SegundoComponente.jsx`, `useState/HookUseState4.jsx` | Mostrar/ocultar secciones, errores de validación |
| Eventos (`onClick`, `onChange`, `onBlur`, `onSubmit`) | `basicos/CuartoComponente.jsx` | Toggle de tema, handlers del formulario |
| Template literals + className dinámico | `useState/HookUseState4.jsx` | Cambiar estilos según tema, marcar inputs inválidos |
| Fetch API con `async/await` | `components/fetch/` | Cargar proyectos desde JSON o API externa |
| Forms controlados con validación | `components/formularios/` | Formulario de contacto con validación |
| `useParams` (bonus) | `components/router/useParams.jsx` | Página de detalle de proyecto |

---

## Pasos a seguir

### Paso 1: Crear el proyecto con Vite

```bash
npm create vite@latest mi-portafolio -- --template react
cd mi-portafolio
npm install
```

### Paso 2: Instalar dependencias adicionales

```bash
npm install react-router-dom bootstrap
npm install --save-dev prop-types gh-pages
```

### Paso 3: Copiar la estructura del template

Copiá los archivos de la carpeta `template/` a tu proyecto nuevo. La estructura es:

```
src/
├── main.jsx                  # Entry point con HashRouter
├── App.jsx                   # Rutas
├── components/
│   ├── Navbar.jsx            # Barra de navegación
│   ├── ProjectCard.jsx       # Card de proyecto
│   └── SkillBadge.jsx        # Badge de habilidad
├── pages/
│   ├── HomePage.jsx           # Inicio
│   ├── AboutPage.jsx          # Sobre mí
│   ├── ProjectsPage.jsx       # Proyectos
│   └── ContactPage.jsx        # Contacto
├── hooks/
│   └── useLocalStorage.js     # Custom hook (vacío, lo implementás)
└── data/
    └── proyectos.json         # Datos de ejemplo
```

### Paso 4: Implementar `useLocalStorage.js`

Este hook se usa para persistir la preferencia de tema (dark/light). La plantilla tiene los pasos como comentarios. Referencia: `components/hooks-personalizados/useLocalStorage/useLocalStorage.jsx`.

```js
const useLocalStorage = (clave, valorInicial) => {
  const [valor, setValor] = useState(() => {
    const item = localStorage.getItem(clave);
    return item ? JSON.parse(item) : valorInicial;
  });

  useEffect(() => {
    localStorage.setItem(clave, JSON.stringify(valor));
  }, [clave, valor]);

  return [valor, setValor];
};
```

### Paso 5: Implementar el Navbar

1. Agregá los `<Link>` faltantes para `/about`, `/projects`, `/contact`
2. Agregá un botón de toggle de tema dark/light usando `useLocalStorage`
3. Validá las props con `PropTypes`
4. Pasá `tema` y `toggleTema` desde `App.jsx` usando `useLocalStorage`

### Paso 6: Implementar HomePage

1. Definí arrays con tus datos: nombre, título, skills principales
2. Mostrá tu nombre y título con `<h1>` y `<p>`
3. Mapeá un array de skills usando `SkillBadge`
4. Agregá un botón para cambiar el tema (dark/light)
5. Agregá un `<Link>` a `/contact`

### Paso 7: Implementar AboutPage

1. Creá arrays con tus datos: experiencia, educación, habilidades
2. Mostrá tu descripción personal
3. Mapeá el array de experiencia mostrando cada puesto/institución
4. Mapeá el array de habilidades usando `SkillBadge`
5. Usá renderizado condicional (`&&` o ternario) para mostrar/ocultar secciones

### Paso 8: Implementar ProjectsPage

1. Importá los datos desde `proyectos.json`
2. Usá `useState` para guardar los proyectos
3. Usá `useEffect` para cargar los datos (desde el JSON importado o con fetch a una API)
4. Agregá estados de `cargando` y `error` (como en `FetchEstadosCarga.jsx`)
5. Mapeá el array de proyectos y renderizá `ProjectCard` para cada uno
6. Completá `ProjectCard` para mostrar imagen, nombre, descripción y tecnologías

### Paso 9: Implementar ContactPage

1. Definí un reducer para el formulario con los campos: `nombre`, `email`, `mensaje`
2. Usá `useReducer` para manejar el estado del formulario
3. Implementá la función de validación (referencia: `FormulariosValidacionCompleta.jsx`)
4. Manejá el `onSubmit` con `e.preventDefault()`
5. Manejá el `onChange` con `dispatch({ type: 'ACTUALIZAR_CAMPO', campo, valor })`
6. Usá `onBlur` para validar al salir del input
7. Agregá `className` dinámico con template literals (`is-invalid` / `is-valid`)
8. Mostrá un mensaje de éxito con `setTimeout` automático (como en la clase de formularios)
9. Agregá un botón de reset que dispache `{ type: 'RESET' }`

### Paso 10: Agregar tema dark/light

1. Usá `useLocalStorage('tema', 'light')` en `App.jsx`
2. Pasá `tema` y `toggleTema` como props a `Navbar`
3. Usá template literals para cambiar `className` según el tema: `` `container ${tema === 'dark' ? 'bg-dark text-light' : 'bg-light'} ` ``

### Paso 11: Agregar tus datos reales

1. Editá `proyectos.json` con tus proyectos reales
2. Completá `HomePage` y `AboutPage` con tu información personal
3. Agregá imágenes si querés (podés usar URLs externas)

---

## Despliegue en GitHub Pages (gratuito)

### ¿Por qué HashRouter y no BrowserRouter?

GitHub Pages sirve archivos estáticos. Si usás `BrowserRouter`, al refrescar una ruta como `/about` GitHub devuelve 404 porque no encuentra ese archivo. `HashRouter` usa `/#/about` en la URL, lo cual funciona correctamente en GitHub Pages.

### Paso 1: Crear un repositorio en GitHub

1. Andá a [github.com/new](https://github.com/new)
2. Nombrá tu repo (ej: `mi-portafolio`)
3. Dejalo público
4. No inicialices con README
5. Creá el repositorio

### Paso 2: Subir tu proyecto a GitHub

```bash
cd mi-portafolio
git init
git add .
git commit -m "Primer commit: CV portafolio"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/mi-portafolio.git
git push -u origin main
```

### Paso 3: Configurar `vite.config.js`

En tu archivo `vite.config.js`, configurá la propiedad `base` con el nombre de tu repositorio:

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/mi-portafolio/',  // <-- Tu nombre de repo entre slashes
});
```

### Paso 4: Agregar script de deploy en `package.json`

Verificá que tu `package.json` tenga estos scripts:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Paso 5: Desplegar

```bash
npm run deploy
```

Esto va a:
1. Ejecutar `predeploy` → corre `npm run build` → genera la carpeta `dist/`
2. Ejecutar `deploy` → usa `gh-pages` para subir `dist/` a la rama `gh-pages`

### Paso 6: Activar GitHub Pages

1. Andá a tu repositorio en GitHub
2. Andá a **Settings** → **Pages**
3. En **Source**, seleccioná la rama `gh-pages` y la carpeta `/(root)`
4. Click en **Save**
5. Esperá unos minutos y tu sitio estará en:

```
https://TU-USUARIO.github.io/mi-portafolio/
```

### Paso 7: Actualizar el sitio

Cada vez que hagas cambios y quieras actualizar:

```bash
git add .
git commit -m "Actualización"
git push
npm run deploy
```

---

## Información de referencia

### React Router - Sintaxis rápida

```jsx
// En main.jsx - envolver la app
<HashRouter>
  <App />
</HashRouter>

// En App.jsx - definir rutas
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/about" element={<AboutPage />} />
  <Route path="/projects/:id" element={<ProjectDetail />} />
  <Route path="*" element={<NotFoundPage />} />
</Routes>

// En cualquier componente - navegar sin recargar
import { Link, useParams } from 'react-router-dom';

<Link to="/about">Sobre mí</Link>

// Leer parámetros de la URL
const { id } = useParams();
```

### Hooks - Sintaxis rápida

```jsx
// useState
const [valor, setValor] = useState(valorInicial);
setValor(nuevoValor);
setValor(prev => prev + 1); // actualización funcional

// useEffect
useEffect(() => { /* efecto */ });                    // cada render
useEffect(() => { /* efecto */ }, []);                // solo al montar
useEffect(() => { /* efecto */ }, [dependencia]);     // cuando cambia dependencia

// useReducer
const [state, dispatch] = useReducer(reducer, initialState);
dispatch({ type: 'ACCION', dato: valor });

// reducer:
const reducer = (state, action) => {
  switch (action.type) {
    case 'ACCION': return { ...state, campo: action.dato };
    default: return state;
  }
};

// useRef
const ref = useRef(null);
ref.current;           // acceder al elemento del DOM
ref.current.focus();    // hacer foco
ref.current.scrollIntoView(); // hacer scroll

// Custom hook (useLocalStorage)
const [tema, setTema] = useLocalStorage('tema', 'light');
// Funciona igual que useState pero persiste en localStorage
```

### Formularios - Sintaxis rápida

```jsx
// Formulario controlado con useReducer
const [form, dispatch] = useReducer(reducer, initialState);

const handleChange = (e) => {
  dispatch({ type: 'ACTUALIZAR_CAMPO', campo: e.target.name, valor: e.target.value });
};

const handleSubmit = (e) => {
  e.preventDefault();
  // validar y procesar
};

// Validación con className dinámico
<input
  className={`form-control ${errores.email ? 'is-invalid' : 'is-valid'}`}
  name="email"
  value={form.email}
  onChange={handleChange}
  onBlur={validar}
/>
{errores.email && <div className="invalid-feedback">{errores.email}</div>}
```

### Fetch API - Sintaxis rápida

```jsx
const [datos, setDatos] = useState([]);
const [cargando, setCargando] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  const fetchData = async () => {
    try {
      const resp = await fetch('https://api.example.com/data');
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      const json = await resp.json();
      setDatos(json);
    } catch (err) {
      setError(err.message);
    } finally {
      setCargando(false);
    }
  };
  fetchData();
}, []);

// Renderizado condicional
if (cargando) return <Spinner />;
if (error) return <div className="alert alert-danger">{error}</div>;
```

### PropTypes - Sintaxis rápida

```jsx
import PropTypes from 'prop-types';

Componente.propTypes = {
  nombre: PropTypes.string.isRequired,
  edad: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  objeto: PropTypes.shape({
    id: PropTypes.number.isRequired,
    titulo: PropTypes.string.isRequired,
  }).isRequired,
  callback: PropTypes.func,
};

Componente.defaultProps = {
  edad: 0,
};
```

### .map() con key

```jsx
{habilidades.map((hab, index) => (
  <SkillBadge key={index} nombre={hab} />
))}
```

---

## Estructura final esperada

```
mi-portafolio/
├── index.html
├── package.json
├── vite.config.js
├── public/
└── src/
    ├── main.jsx                    # HashRouter + Navbar + App
    ├── App.jsx                     # Rutas + tema con useLocalStorage
    ├── components/
    │   ├── Navbar.jsx              # Links + toggle tema
    │   ├── ProjectCard.jsx         # Card con PropTypes
    │   └── SkillBadge.jsx          # Badge con PropTypes
    ├── pages/
    │   ├── HomePage.jsx            # Presentación + skills
    │   ├── AboutPage.jsx           # Experiencia + educación + habilidades
    │   ├── ProjectsPage.jsx        # Lista de proyectos con fetch
    │   └── ContactPage.jsx         # Formulario con useReducer + validación
    ├── hooks/
    │   └── useLocalStorage.js       # Custom hook
    └── data/
        └── proyectos.json           # Tus proyectos
```

---

## Bonus (opcional)

- Usar `useParams` para una página de detalle de proyecto (`/projects/:id`)
- Fetch a la API de GitHub para mostrar tus repositorios reales
- Agregar una página 404 personalizada (`NotFoundPage`)
- Usar `useRef` para hacer scroll automático al top al cambiar de página

¡Éxitos con tu portafolio!
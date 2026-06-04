import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import { useLocalStorage } from './hooks/useLocalStorage';
import { personalData } from './data/portfolioData';

function App() {
  const [tema, setTema] = useLocalStorage('tema', 'light');

  useEffect(() => {
    document.documentElement.dataset.theme = tema;
    document.body.dataset.theme = tema;
  }, [tema]);

  const toggleTema = () => {
    setTema((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={`app-shell theme-${tema}`}>
      <Navbar tema={tema} toggleTema={toggleTema} personal={personalData} />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

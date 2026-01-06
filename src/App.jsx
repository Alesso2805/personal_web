import SmoothScroll from './components/SmoothScroll';
import Hero from './components/Hero';
import CVSection from './components/CVSection';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { LanguageProvider } from './context/LanguageContext';
import LanguageToggle from './components/LanguageToggle';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <SmoothScroll>
        <LanguageToggle />
        <main className="app-container">
          <Hero />
          <CVSection />
          <Projects />
          <Contact />
        </main>
      </SmoothScroll>
    </LanguageProvider>
  );
}

export default App;

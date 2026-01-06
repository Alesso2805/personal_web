import SmoothScroll from './components/SmoothScroll/SmoothScroll';
import Hero from './components/Hero/Hero';
import CVSection from './components/CVSection/CVSection';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import { LanguageProvider } from './context/LanguageContext';
import LanguageToggle from './components/LanguageToggle/LanguageToggle';
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

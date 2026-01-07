import SmoothScroll from './components/SmoothScroll/SmoothScroll';
import Hero from './components/Hero/Hero';
import AboutMe from './components/AboutMe/AboutMe';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import CVSection from './components/CVSection/CVSection';
import Projects from './components/Projects/Projects';
import Certifications from './components/Certifications/Certifications';
import Contact from './components/Contact/Contact';
import { LanguageProvider } from './context/LanguageContext';
import LanguageToggle from './components/LanguageToggle/LanguageToggle';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <SmoothScroll>
        <div className="scanlines"></div>
        <LanguageToggle />
        <main className="app-container">
          <Hero />
          <AboutMe />
          <Experience />
          <Education />
          <CVSection />
          <Certifications />
          <Projects />
          <Contact />
        </main>
      </SmoothScroll>
    </LanguageProvider>
  );
}

export default App;

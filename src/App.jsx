import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';

import './App.css';
function App() {
  return (
    <div className="App">
      {/* Background Animated Ambience */}
      <div className="ambient-glow-wrapper" aria-hidden="true">
        <div className="glow-orb-1" />
        <div className="glow-orb-2" />
      </div>

      {/* Your Normal Sections */}
      <Navbar />
      <Hero />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <ScrollToTop />
    </div>
  );
}

export default App;
import './App.css';
import AboutMe from './components/aboutme/AboutMe';
import Hero from './components/hero/Hero';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div className="App">
      <Hero />
      <AboutMe />
      <Skills />
    </div>
  );
}

export default App;
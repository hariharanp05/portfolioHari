import './App.css';
import './assets/style.css'
import About from './components/About';
import Certificate from './components/Certificate';
import Contact from './components/Contact';
import Hero from './components/Hero'
import Intern from './components/Intern';
import Navs from './components/Navs';
import Project from './components/Project';
import Skill from './components/Skill';

function App() {
  return (
    <>
   <Navs/>
   <Hero />
   <About/>
   <Skill/>
   <Certificate/>
   <Intern/>
   <Project/>
   <Contact/>
   </>
  );
}

export default App;

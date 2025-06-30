import Hero from './components/Hero';
import Nav from './components/Nav';
import { Contact } from './components/Contact';
import Services from './components/Services';
import Techstack from './components/Techstack';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <Techstack />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

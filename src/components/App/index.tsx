import AboutMe from '../../sections/AboutMe';
import Career from '../../sections/Career';
import Contact from '../../sections/Contact';
import Experience from '../../sections/Experience';
import Footer from '../../sections/Footer';
import Potfólio from '../../sections/Portfólio';
import Recomendations from '../../sections/Recomendations';
import Skills from '../../sections/Skills';
import '../../styles/main.css';
import Header from '../Header';

function App() {
  return (
    <>
      <div className="my-8 mx-6">
        <Header />
        <Experience />
        <AboutMe />
        <Potfólio />
        <Skills />
        <Career />
        <Recomendations />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;

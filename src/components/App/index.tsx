import AboutMe from '../../sections/AboutMe';
import Career from '../../sections/Career';
import Experience from '../../sections/Experience';
import Footer from '../../sections/Footer';
import Potfólio from '../../sections/Portfólio';
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
      </div>
      <Footer />
    </>
  );
}

export default App;

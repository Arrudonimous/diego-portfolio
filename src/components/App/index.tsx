import AboutMe from '../../sections/AboutMe';
import Experience from '../../sections/Experience';
import Footer from '../../sections/Footer';
import Potfólio from '../../sections/Portfólio';
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
      </div>
      <Footer />
    </>
  );
}

export default App;

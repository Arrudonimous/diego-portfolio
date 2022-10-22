import Experience from '../../sections/Experience';
import Footer from '../../sections/Footer';
import '../../styles/main.css';
import Header from '../Header';

function App() {
  return (
    <>
      <div className="my-8 mx-6">
        <Header />
        <Experience />
      </div>
      <Footer />
    </>
  );
}

export default App;

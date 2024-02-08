import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import './components/style.css';
import Hero from './components/Hero';
import Delivery from './components/Delivery';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Delivery />
      <Footer />
    </>
  );
}

export default App;

import React from 'react';
import './assets/css/App.css';

//  Importar componentes
import Navbar from './components/navbar/Navbar';
import Cover from './components/cover/Cover';
import About from './components/about/About';
import Slider from './components/slider/Slider';
import Info from './components/info/Info';
import Footer from './components/footer/Footer';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Cover />
      <About />
      <Slider />
      <Info />
      <Footer />
    </div>
  );
}

export default App;

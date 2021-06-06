import React from 'react';
import './App.css';
import About from './components/about/About.js';
import Portfolio from './components/portfolio/Portfolio.js';

function App() {
  return (
    <React.Fragment>
      <About />
      <Portfolio />
    </React.Fragment>
  );
}

export default App;

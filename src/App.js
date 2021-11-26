import React from 'react';
import './App.css';

//Importación de dependencias
import { Routes, Route } from "react-router-dom";

//Importación de componentes
import Home from "./components/Home/Home.js";
import Auth from './components/Auth/Auth';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
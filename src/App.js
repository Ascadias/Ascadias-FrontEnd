import React from "react";
import "./App.css";

//Importación de componentes
import Navbar from "./components/Navbar";
import Cover from "./components/Cover";
import About from "./components/About";
import Slider from "./components/Slider";
import Info from "./components/Info";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

//Importación de dependencias
import { Divider } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Cover />
      <Divider border="4px solid" width={{ base: "97.8%", md: "99.4%" }} />
      <About />
      <Divider border="4px solid" width={{ base: "97.8%", md: "99.4%" }} />
      <Slider />
      <Divider border="4px solid" width={{ base: "97.8%", md: "99.4%" }} />
      <Skills />
      <Divider border="4px solid" width={{ base: "97.8%", md: "99.4%" }} />
      <Info />
      <Divider border="4px solid" width={{ base: "97.8%", md: "99.4%" }} />
      <Footer />
    </div>
  );
}

export default App;

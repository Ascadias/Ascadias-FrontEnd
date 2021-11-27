import React from "react";

//Importación de componentes
import Navbar from "../navbar/Navbar";
import Cover from "../cover/Cover";
import About from "../about/About";
import Slider from "../slider/Slider";
import Info from "../info/Info";
import Skills from "../skills/Skills";
import { Divider } from "@chakra-ui/react";
import Footer from "../footer/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Cover />
      <Divider border="4px solid" width={{base:"97.8%", md:"99.4%"}}/>
      <About />
      <Divider border="4px solid" width={{base:"97.8%", md:"99.4%"}}/>
      <Slider />
      <Divider border="4px solid" width={{base:"97.8%", md:"99.4%"}}/>
      <Skills />
      <Divider border="4px solid" width={{base:"97.8%", md:"99.4%"}}/>
      <Info />
      <Divider border="4px solid" width={{base:"97.8%", md:"99.4%"}}/>
      <Footer />
    </div>
  );
}

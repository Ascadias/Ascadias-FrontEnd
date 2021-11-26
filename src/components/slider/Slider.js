import React, { useState } from "react";
import "./Slider.css";
// import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import Carousel from "react-elastic-carousel";

const Slider = () => {
  const [projects] = useState([
    {
      id: 1,
      name: "Portfolio",
      description: "Aplicación web para mostrar mis proyectos.",
      image:
        "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_960_720.jpg",
      link: "https://ascadias.site/",
      github: "https://github.com/jmarce99/Ascadias-FrontEnd",
    },
    {
      id: 2,
      name: "Countries App",
      description: "Aplicación web para mostrar mis proyectos.",
      image:
        "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_960_720.jpg",
      link: "https://ascadias.site/",
      github: "https://github.com/jmarce99/Ascadias-FrontEnd",
    },
    {
      id: 3,
      name: "Weather App",
      description: "Aplicación web para mostrar mis proyectos.",
      image:
        "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_960_720.jpg",
      link: "https://ascadias.site/",
      github: "https://github.com/jmarce99/Ascadias-FrontEnd",
    },
  ]);
  return (
    <div className="carousel-container">
      <div className="carousel-title">
        <h2>Mis Proyectos</h2>
      </div>
      <Carousel
        itemsToShow={1}
        pagination={false}
        itemPadding={[20]}
        enableAutoPlay={false}
        focusOnSelect={true}
        showArrows={true}
        autoPlaySpeed={5000}
      >
        {projects.map((project) => (
          <div className="slide-container" key={project.id}>
            <img src={project.image} alt={project.name} />
            <div className="slide-desc">
              <span>{project.name}</span>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;

import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import { Flex, Text, Heading, Image } from "@chakra-ui/react";

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
    <Flex
      boxShadow="inset 0 0 0 1000px rgb(0, 0, 0, 0.15)"
      bg="-webkit-radial-gradient(center, #222c30, #000000)"
      p={10}
      direction={{ base: "column", md: "row" }}
      height={{base: "70vh", md: "100vh"}}
    >
      <Flex alignItems="center" pr="30px">
        <Heading
          color="var(--cyan)"
          fontSize={{ base: "3xl", md: "5xl" }}
          letterSpacing={{ base: "0.4rem", md: "0.4rem" }}
          textAlign="center"
        >
          Mis Proyectos
        </Heading>
      </Flex>
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
          <Flex
            key={project.id}
            cursor="pointer"
            borderRadius="40px"
            position="relative"
            overflow="hidden"
          >
            <Image
              src={project.image}
              alt={project.name}
              objectFit="contain"
              transition="all 0.2s ease-in-out"
              _hover={{ transform: "scale(1.2)", opacity: "0.7" }}
            />
            <Flex
              className="slide-desc"
              boxShadow="inset 0 0 0 1000px rgb(0, 0, 0, 0.7)"
              bottom="0"
              width="100%"
              justifyContent="center"
              position="absolute"
            >
              <Text fontSize="2xl" p={15} color="var(--light)">
                {project.name}
              </Text>
            </Flex>
          </Flex>
        ))}
      </Carousel>
    </Flex>
  );
};

export default Slider;

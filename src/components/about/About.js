import React from "react";
//import CVPDF from "./../../assets/media/cv.pdf";
import { Flex, Text, Heading, Button, Icon } from "@chakra-ui/react";
import { BiShowAlt } from "react-icons/bi";

const About = () => {
  return (
    <Flex
      boxShadow="inset 0 0 0 1000px rgb(0, 0, 0, 0.1)"
      height="md"
      justifyContent="center"
    >
      <Flex mb="7px" direction="column" alignItems="center">
        <Heading
          color="var(--cyan)"
          fontSize={{ base: "3xl", md: "5xl" }}
          letterSpacing={{ base: "4px", md: "4px" }}
          mt={{ base: "4", md: "10" }}
          mb={{ base: "4", md: "14" }}
        >
          Sobre Mi
        </Heading>
        <Text
          textAlign={{ base: "left", md: "center" }}
          pl={{ base: "8", md: "20" }}
          pr={{ base: "8", md: "20" }}
          fontSize={{ base: "17.5px", md: "2xl" }}
        >
          Soy una persona Creativa y Proactiva que le encanta el mundo de la
          tecnología, enfrentarse a nuevos desafíos y mejorarse a si mismo cada
          día. Detallista, Perfeccionista y Autodidacta por naturaleza lo cual
          me llevo a incursionar en el sector de la Programación, el Diseño y la
          Creación de contenido, convirtiéndome en un apasionado Full Stack
          Developer
        </Text>

        <Button
          bg="var(--cyan)"
          fontSize="17.5px" 
          width="30vh"
          height="10vh"
          mt={{ base: "5", md: "14" }}
          _hover={{
            width: "33vh",
            transition: "all 0.5s ease-in-out",
            background: "var(--primary)",
            opacity: "0.9",
          }}
        >
          Mostrar CV
          <Icon ml="2" as={BiShowAlt} w={8} h={8} />
        </Button>
      </Flex>
    </Flex>
  );
};

export default About;

import React, { useState } from "react";
//import Carousel from "react-elastic-carousel";
import { Flex, Text, Heading, Image } from "@chakra-ui/react";

const Slider = () => {
  return (
    <Flex
      boxShadow="inset 0 0 0 1000px rgb(0, 0, 0, 0.15)"
      bg="-webkit-radial-gradient(center, #222c30, #000000)"
      p={8}
      direction={{ base: "column", md: "column" }}
      height={{ base: "70vh", md: "100vh" }}
    >
      <Flex alignItems="center">
        <Heading
          color="var(--cyan)"
          fontSize={{ base: "3xl", md: "5xl" }}
          letterSpacing={{ base: "0.4rem", md: "0.4rem" }}
          textAlign="center"
          justifyContent="center"
          alignItems="center"
          mb="15px"
          width="100%"
        >
          Mis Proyectos
        </Heading>
      </Flex>
      <Flex direction={{ base: "column", md: "row" }}></Flex>
    </Flex>
  );
};

export default Slider;

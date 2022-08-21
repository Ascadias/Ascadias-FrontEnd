import React from "react";
import logo from "../assets/images/selfie.png";
import { Flex, Image } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Flex
      boxSize={{ base: "20em", md: "md" }}
      p={8}
      rounded={6}
      justifyContent="center"
      alignItems="center"
      borderRadius="100%"
      position="relative"
      overflow="hidden"
      className="photo"
    >
      <Image
        src={logo}
        alt="Logo de Julio Fernandez"
        title="Julio Fernandez"
        width={{ base: "100%", md: "90%" }}
        opacity="0.970"
      ></Image>
    </Flex>
  );
};

export default Logo;

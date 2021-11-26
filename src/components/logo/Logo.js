import React from "react";
import logo1 from "../../assets/images/02.png";
import logo2 from "../../assets/images/logo.png";
import { Flex, Image } from "@chakra-ui/react";

const Logo = ({ id }) => {
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
      {id === 1 ? (
        <Image
          src={logo1}
          alt="Logo de Julio Fernandez"
          title="Julio Fernandez"
          width={{base:"100%", md:"90%"}}
          opacity="0.970"
        ></Image>
      ) : (
        <Image
          src={logo2}
          alt="Logo de Ascadias"
          title="Ascadias"
          width={{base:"100%", md:"90%"}}
          opacity="0.970"
        ></Image>
      )}
    </Flex>
  );
};

export default Logo;

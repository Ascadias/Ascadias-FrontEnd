import React from "react";
import Logo from "../logo/Logo";

import { Flex, Text, Heading } from "@chakra-ui/react";

const cover = () => {
  return (
    <Flex
      className="cover-container"
      height="100vh"
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Logo id={1} />
      <Flex direction="column" p={2} align="center">
        <Heading
          mb={2}
          fontSize={{ base: "3xl", md: "7xl" }}
          fontFamily="Roboto Mono"
          color="var(--lightcyan)"
          letterSpacing={{base:"3.5px", md:"4px"}}
        >
          Julio Fernandez
        </Heading>
        <Text fontSize={{ base: "17.5px", md: "2xl" }} fontFamily="Roboto Mono" letterSpacing={{base:"1.5px", md:"3px"}} textAlign="center" mt={{base:"1", md:"1"}}>
          Desarrollador Full Stack en JavaScript
        </Text>
      </Flex>
    </Flex>
  );
};

export default cover;

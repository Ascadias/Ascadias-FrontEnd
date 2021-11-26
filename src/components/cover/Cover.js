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
        <Heading mb={2} fontSize={{base: "xl", md: "4xl"}}>Julio Fernandez</Heading>
        <Text fontSize={{base: "xl", md: "4xl"}}>Desarrollador Full Stack en JavaScript</Text>
      </Flex>
    </Flex>
  );
};

export default cover;

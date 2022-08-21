import React from "react";
import { Flex, Text, Heading, useClipboard, Icon } from "@chakra-ui/react";
import { MdCopyAll } from "react-icons/md";

const Info = () => {
  const [value] = React.useState("marcelofernandez.dev@gmail.com");
  const { hasCopied, onCopy } = useClipboard(value);
  return (
    <Flex className="info-container" justifyContent="center" height="sm">
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        p="15"
      >
        <Heading
          fontSize={{ base: "3xl", md: "4xl" }}
          color="var(--light)"
          textAlign="center"
          mb={{ base: "9", md: "2" }}
        >
          ¡En busqueda de oportunidades de desarrollo web!
        </Heading>
        <Text fontSize={{ base: "17.5px", md: "2xl" }} textAlign="center">
          Si conoce algún puesto disponible o si tiene alguna pregunta, no dude
          en enviarme un correo electrónico a
        </Text>
        <Text
          fontSize={{ base: "17.5px", md: "2xl" }}
          textAlign="center"
          color="var(--warning)"
          onClick={onCopy}
          cursor="pointer"
        >
          marcelofernandez.dev@gmail.com
          <Icon as={MdCopyAll} ml="2" color="var(--dark)" />
        </Text>
        {hasCopied ? "Copiado" : ""}
      </Flex>
    </Flex>
  );
};

export default Info;

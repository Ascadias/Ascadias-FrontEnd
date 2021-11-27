import React from "react";
import { Flex, Heading, Box, Code , Icon } from "@chakra-ui/react";
import {
  SiLinkedin,
  SiGithub,
  SiYoutube,
  SiReact,
  SiChakraui,
} from "react-icons/si";
import { FaCode } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <Flex height={{ base: "40vh", md: "33vh" }} direction="column" p={{base:"5", md:"14"}} pt={{base:"20", md:"20" }} boxShadow="inset 0 0 0 1000px rgb(0, 0, 0, 0.1)">
        <Flex justifyContent="space-around" alignItems="center" pl={{base:"2", md:"14"}} pr={{base:"2", md:"14"}} pb={{base:"10", md:"10" }}>
          <Box>
            <a
              href="https://www.linkedin.com/in/jmarce99/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon as={SiLinkedin} h={8} w={8} />
            </a>
          </Box>
          <Box>
            <a
              href="https://github.com/jmarce99"
              tarket="_blank"
              rel="noreferrer"
            >
              <Icon as={SiGithub} h={8} w={8} />
            </a>
          </Box>
          <Box>
            <a
              href="https://www.youtube.com/channel/UCFs46VgslEUeGd1BGZTFwXg"
              target="_blank"
              rel="noreferrer"
            >
              <Icon as={SiYoutube} h={8} w={8} />
            </a>
          </Box>
        </Flex>
        <Flex justifyContent="center" alignItems="center" p={{base:"0", md:"6"}}>
          <Icon as={FaCode} h={5} w={5} mr={1.5} />
          <Heading
            fontSize={{ base: "md", md: "xl" }}
            textAlign="center"
            mb={1}
          >
            By <Code fontSize={{ base: "md", md: "xl" }} colorScheme="purple">Julio Fernandez</Code> using
          </Heading>
          <Icon as={SiReact} h={5} w={5} ml={1.5} mr={1.5} />
          <Heading
            fontSize={{ base: "md", md: "xl" }}
            textAlign="center"
            mb={1}
          >
            and
          </Heading>
          <Icon as={SiChakraui} h={5} w={5} ml={1.5} />
        </Flex>
      </Flex>
    </footer>
  );
};

export default Footer;

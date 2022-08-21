import React from "react";
import {
  SiJavascript,
  SiReact,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiSequelize,
  SiHtml5,
  SiSass,
  SiCss3,
} from "react-icons/si";
import {
  Flex,
  Text,
  Box,
  Heading,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Icon,
} from "@chakra-ui/react";

const Skills = () => {
  return (
    <Flex
      p="0"
      m="0"
      height="2xl"
      justifyContent="center"
      alignItems="center"
      lineHeight="1.5"
      direction="column"
    >
      <Flex p={{ base: "5vh", md: "40vh" }} width="100%" direction="column">
        <Heading
          color="var(--cyan)"
          fontSize={{ base: "3xl", md: "5xl" }}
          letterSpacing={{ base: "4px", md: "4px" }}
          textAlign="center"
          height="10%"
          mt={{ base: "4", md: "10" }}
          mb={{ base: "4", md: "14" }}
        >
          Habilidades
        </Heading>
        <Tabs isFitted variant="enclosed">
          <TabList mb="0">
            <Tab p="0.4375rem 0.875rem" mb="-1px">
              <Text
                mt="7px"
                mb="3.500px"
                fontWeight="400"
                fontSize={{ base: "17.5px", md: "2xl" }}
              >
                Técnicas
              </Text>
            </Tab>
            <Tab p="0.4375rem 0.875rem" mb="-1px">
              <Text
                mt="7px"
                mb="3.500px"
                fontWeight="400"
                fontSize={{ base: "17.5px", md: "2xl" }}
              >
                Blandas
              </Text>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Flex
                direction={{ base: "column", md: "row" }}
                pt={3}
                ml="-15"
                mr="-15"
                pl="3.500px"
                pr="3.500px"
                margin="0 -15"
              >
                <Box p="0 15px" width={{ base: "100%" }}>
                  <Text
                    mt="7px"
                    mb="3.500px"
                    fontWeight="300"
                    fontSize={{ base: "17.5px", md: "2xl" }}
                  >
                    JavaScript
                    <Icon position="absolute" mt="2" ml="2" as={SiJavascript} />
                  </Text>
                  <Text
                    mt="7px"
                    mb="3.500px"
                    fontWeight="300"
                    fontSize={{ base: "17.5px", md: "2xl" }}
                  >
                    React
                    <Icon position="absolute" mt="2" ml="2" as={SiReact} />
                  </Text>

                  <Text
                    mt="7px"
                    mb="3.500px"
                    fontWeight="300"
                    fontSize={{ base: "17.5px", md: "2xl" }}
                  >
                    Redux
                    <Icon position="absolute" mt="2" ml="2" as={SiRedux} />
                  </Text>
                  <Text
                    mt="7px"
                    mb="3.500px"
                    fontWeight="300"
                    fontSize={{ base: "17.5px", md: "2xl" }}
                  >
                    Node
                    <Icon position="absolute" mt="2" ml="2" as={SiNodedotjs} />
                  </Text>
                  <Text
                    mt="7px"
                    mb="3.500px"
                    fontWeight="300"
                    fontSize={{ base: "17.5px", md: "2xl" }}
                  >
                    Express
                    <Icon position="absolute" mt="2" ml="2" as={SiExpress} />
                  </Text>
                </Box>
                <Box p="0 15px" width={{ base: "100%", md: "50%" }}>
                  <Text
                    mt="7px"
                    mb="3.500px"
                    fontWeight="300"
                    fontSize={{ base: "17.5px", md: "2xl" }}
                  >
                    PostgreSQL
                    <Icon position="absolute" mt="2" ml="2" as={SiPostgresql} />
                  </Text>
                  <Text
                    mt="7px"
                    mb="3.500px"
                    fontWeight="300"
                    fontSize={{ base: "17.5px", md: "2xl" }}
                  >
                    Sequelize
                    <Icon position="absolute" mt="2" ml="2" as={SiSequelize} />
                  </Text>
                  <Text
                    mt="7px"
                    mb="3.500px"
                    fontWeight="300"
                    fontSize={{ base: "17.5px", md: "2xl" }}
                  >
                    HTML
                    <Icon position="absolute" mt="2" ml="2" as={SiHtml5} />
                  </Text>
                  <Text
                    mt="7px"
                    mb="3.500px"
                    fontWeight="300"
                    fontSize={{ base: "17.5px", md: "2xl" }}
                  >
                    Sass
                    <Icon position="absolute" mt="2" ml="2" as={SiSass} />
                  </Text>
                  <Text
                    mt="7px"
                    mb="3.500px"
                    fontWeight="300"
                    fontSize={{ base: "17.5px", md: "2xl" }}
                  >
                    CSS
                    <Icon position="absolute" mt="2" ml="2" as={SiCss3} />
                  </Text>
                </Box>
              </Flex>
            </TabPanel>
            <TabPanel>
              <Flex
                direction={{ base: "column", md: "row" }}
                pt={3}
                ml="-15"
                mr="-15"
                pl="3.500px"
                pr="3.500px"
                margin="0 -15"
              >
                <Box p="0 15px" width={{ base: "100%", md: "50%" }}>
                  <Text
                    mt="7px"
                    mb="3.500px"
                    fontWeight="300"
                    fontSize={{ base: "17.5px", md: "2xl" }}
                  >
                    Creatividad
                  </Text>
                  <Text
                    mt="7px"
                    mb="3.500px"
                    fontWeight="300"
                    fontSize={{ base: "17.5px", md: "2xl" }}
                  >
                    Autonomía
                  </Text>
                  <Text
                    mt="7px"
                    mb="3.500px"
                    fontWeight="300"
                    fontSize={{ base: "17.5px", md: "2xl" }}
                  >
                    Aprendizaje rápido
                  </Text>
                  <Text
                    mt="7px"
                    mb="3.500px"
                    fontWeight="300"
                    fontSize={{ base: "17.5px", md: "2xl" }}
                  >
                    Adaptabilidad
                  </Text>
                </Box>
                <Box p="0 15px" width={{ base: "100%", md: "50%" }}>
                  <Text
                    mt="7px"
                    mb="3.500px"
                    fontWeight="300"
                    fontSize={{ base: "17.5px", md: "2xl" }}
                  >
                    Resolución de problemas
                  </Text>
                  <Text
                    mt="7px"
                    mb="3.500px"
                    fontWeight="300"
                    fontSize={{ base: "17.5px", md: "2xl" }}
                  >
                    Trabajo en equipo
                  </Text>
                  <Text
                    mt="7px"
                    mb="3.500px"
                    fontWeight="300"
                    fontSize={{ base: "17.5px", md: "2xl" }}
                  >
                    Organización
                  </Text>
                  <Text
                    mt="7px"
                    mb="3.500px"
                    fontWeight="300"
                    fontSize={{ base: "17.5px", md: "2xl" }}
                  >
                    Mentalidad ágil
                  </Text>
                </Box>
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Flex>
  );
};

export default Skills;

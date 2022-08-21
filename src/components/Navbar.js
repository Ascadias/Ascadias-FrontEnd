import React from "react";

import { MdModeNight, MdLightMode } from "react-icons/md";
import { TiArrowUpThick } from "react-icons/ti";

import {
  Flex,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

const NavBar = ({ isScrolling }) => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100, gray.700");
  let colorModeInfo = useColorMode();
  const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const changeColorMode = (e) => {
    e.preventDefault();
    toggleColorMode();
  };
  return (
    <nav style={{ position: "absolute", width: "100%" }}>
      <Flex
        height="2vh"
        background={formBackground}
        p={8}
        rounded={6}
        justifyContent="space-between"
        alignItems="center"
        position="fixed"
        top="1px"
        left="0"
        right="0"
        z-index="1030"
      >
        <Button
          onClick={toTheTop}
          bg="transparent"
          position="relative"
          border="2px"
          ml={0}
          mr={0}
        >
          <TiArrowUpThick />
        </Button>
        <Button
          onClick={(e) => changeColorMode(e)}
          bg="transparent"
          position="relative"
          border="2px"
          ml={0}
          mr={0}
        >
          {colorModeInfo.colorMode === "light" ? (
            <MdModeNight />
          ) : (
            <MdLightMode />
          )}
        </Button>
      </Flex>
    </nav>
  );
};

export default NavBar;

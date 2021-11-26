import React from "react";
import { useNavigate } from "react-router-dom";

import { MdModeNight, MdLightMode } from "react-icons/md";
import { TiArrowDownThick } from "react-icons/ti";


import {
  Flex,
  Button,
  useColorMode,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";

const NavBar = ({ isScrolling }) => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100, gray.700");
  const navigate = useNavigate();
  let colorModeInfo = useColorMode();
  const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const changeColorMode = (e) => {
    e.preventDefault();
    toggleColorMode();
  };
  return (
    <nav style={{position: "absolute", width: "100%"}}>
      <Flex
        height="2vh"
        background={formBackground}
        p={8}
        rounded={6}
        justifyContent="space-between"
        alignItems="center"
      >
        <Button
          onClick={toTheTop}
          bg="transparent"
          position="relative"
          border="2px"
          ml={0}
          mr={0}
        >
          <TiArrowDownThick />
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

import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import theme from "./theme";

ReactDOM.render(
  <Suspense fallback={"Conectando la app..."}>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </Suspense>,
  document.getElementById("root")
);

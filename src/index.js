import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store";
import { FirebaseAppProvider } from "reactfire";
import { firebaseConfig } from "./firebase/firebase_config";
import theme from "./theme";


ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense fallback={"Conectando la app..."}>
      <Provider store={store}>
        <BrowserRouter>
          <ChakraProvider theme={theme}>
            <App />
          </ChakraProvider>
        </BrowserRouter>
      </Provider>
    </Suspense>
  </FirebaseAppProvider>,
  document.getElementById("root")
);

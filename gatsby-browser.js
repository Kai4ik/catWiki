import React from "react";
import Layout from "./src/components/layout";
import { ChakraProvider } from "@chakra-ui/react";
import customizedTheme from "./src/theme";

export function wrapPageElement({ element }) {
  return (
    <ChakraProvider theme={customizedTheme}>
      <Layout>{element}</Layout>
    </ChakraProvider>
  );
}

import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import customizedTheme from "../theme";

import Layout from "../components/layout";
import Hero from "../components/hero";

import { graphql } from "gatsby";

import { ContextProvider } from "../context/index";

const IndexPage = ({ data }) => {
  return (
    <ContextProvider data={data.allCatBreeds.edges}>
      <ChakraProvider theme={customizedTheme}>
        <Layout>
          <Hero />
        </Layout>
      </ChakraProvider>
    </ContextProvider>
  );
};

export const query = graphql`
  {
    allCatBreeds {
      edges {
        node {
          id
          image {
            url
          }
          name
        }
      }
    }
  }
`;

export default IndexPage;

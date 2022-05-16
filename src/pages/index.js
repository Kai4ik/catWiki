import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import customizedTheme from "../theme";

import Layout from "../components/layout";
import Hero from "../components/hero";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  console.log(data.allCatBreeds.edges);

  return (
    <ChakraProvider theme={customizedTheme}>
      <Layout>
        <Hero />
      </Layout>
    </ChakraProvider>
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

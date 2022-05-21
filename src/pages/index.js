import React from "react";
import Index from "../components/homePage/index";

import { graphql } from "gatsby";
import { ContextProvider } from "../context/index";

import Layout from "../components/layout";
import { ChakraProvider } from "@chakra-ui/react";
import customizedTheme from "../theme";

const IndexPage = ({ data }) => {
  return (
    <ContextProvider data={data.allCatBreeds.nodes}>
      <ChakraProvider theme={customizedTheme}>
        <Layout>
          <Index />
        </Layout>
      </ChakraProvider>
    </ContextProvider>
  );
};

export const query = graphql`
  {
    allCatBreeds {
      nodes {
        id
        name
        image {
          childImageSharp {
            gatsbyImageData(height: 280, aspectRatio: 1.2)
          }
        }
      }
    }
  }
`;

export default IndexPage;

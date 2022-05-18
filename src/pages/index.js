import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import customizedTheme from "../theme";

import Layout from "../components/layout";
import Hero from "../components/homePage/hero";
import Main from "../components/homePage/main";

import { graphql } from "gatsby";

import { ContextProvider } from "../context/index";

const IndexPage = ({ data }) => {
  return (
    <ChakraProvider theme={customizedTheme}>
      <ContextProvider data={data.allCatBreeds.nodes}>
        <Layout>
          <Hero />
          <Main />
        </Layout>
      </ContextProvider>
    </ChakraProvider>
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
            gatsbyImageData(height: 260, aspectRatio: 1.2)
          }
        }
      }
    }
  }
`;

export default IndexPage;

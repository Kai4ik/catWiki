import React from "react";
import { VStack, Text } from "@chakra-ui/react";
import BreedContainer from "../components/breedContainer";

import { graphql } from "gatsby";
import { ContextProvider } from "../context/index";

const AllBreeds = ({ data }) => {
  return (
    <ContextProvider data={data.allCatBreeds.nodes}>
      <Text fontSize="4xl" mt={8} mb={14} color="dark" fontWeight="700">
        All breeds
      </Text>
      <VStack align="flex-start" spacing={16} mb={40}>
        {data.allCatBreeds.nodes.map((el, index) => (
          <BreedContainer key={el.id} data={el} number={index} />
        ))}
      </VStack>
    </ContextProvider>
  );
};

export const query = graphql`
  {
    allCatBreeds {
      nodes {
        id
        name
        description
        image {
          childImageSharp {
            gatsbyImageData(height: 300, aspectRatio: 1.5)
          }
        }
      }
    }
  }
`;

export default AllBreeds;

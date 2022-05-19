import React from "react";
import { VStack, HStack, Text, Container } from "@chakra-ui/react";
import { GatsbyImage } from "gatsby-plugin-image";

const BreedContainer = ({ data, number }) => {
  return (
    <HStack align="flex-start" w="100%">
      <Container m={0} p={0} borderRadius="24px" overflow="hidden">
        <GatsbyImage
          alt={data.name}
          image={data.image.childImageSharp.gatsbyImageData}
          imgStyle={{ borderRadius: "24px" }}
        />
      </Container>
      <VStack align="flex-start" w="70%" spacing={8}>
        <Text fontSize="4xl" color="dark" fontWeight="600">
          {number + 1}.{"   "}
          {data.name}
        </Text>
        <Text fontSize="2xl"> {data.description} </Text>
      </VStack>
    </HStack>
  );
};

export default BreedContainer;

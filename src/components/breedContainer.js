import React from "react";
import { VStack, Text, Container, Stack } from "@chakra-ui/react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const BreedContainer = ({ data, number }) => {
  const linkSrc = `/breed-${data.id}`;

  return (
    <Link to={linkSrc}>
      <Stack
        direction={["column", "row"]}
        align="flex-start"
        w="100%"
        cursor="pointer"
      >
        <Container m={0} p={0} borderRadius="24px" overflow="hidden">
          <GatsbyImage
            alt={data.name}
            image={data.image.childImageSharp.gatsbyImageData}
            imgStyle={{ borderRadius: "24px" }}
          />
        </Container>
        <VStack align="flex-start" w={["100%", "70%"]} spacing={[2, 8]}>
          <Text fontSize="4xl" color="dark" fontWeight="600">
            {number + 1}.{"   "}
            {data.name}
          </Text>
          <Text fontSize="2xl"> {data.description} </Text>
        </VStack>
      </Stack>
    </Link>
  );
};

export default BreedContainer;

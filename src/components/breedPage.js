import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { VStack, HStack, Text, Container, Box, Stack } from "@chakra-ui/react";

const BreedPage = (props) => {
  const {
    name,
    description,
    temperament,
    origin,
    life_span,
    adaptability,
    grooming,
    affection_level,
    child_friendly,
    intelligence,
    health_issues,
    social_needs,
    stranger_friendly,
  } = props.pageContext.breedInfo;
  const imageData =
    props.pageContext.breedInfo.image.childImageSharp.gatsbyImageData;

  const primaryCharacteristics = [
    { characteristic: "Temperament", value: temperament },
    { characteristic: "Origin", value: origin },
    { characteristic: "Life Span", value: life_span },
  ];

  const numericCharacteristics = [
    { characteristic: "Adaptability", value: adaptability },
    { characteristic: "Affection Level", value: affection_level },
    { characteristic: "Child Friendly", value: child_friendly },
    { characteristic: "Grooming", value: grooming },
    { characteristic: "Intelligence", value: intelligence },
    { characteristic: "Health Issues", value: health_issues },
    { characteristic: "Social Needs", value: social_needs },
    { characteristic: "Stranger Friendly", value: stranger_friendly },
  ];

  return (
    <Stack
      direction={["column", "row"]}
      align="flex-start"
      w={["100vw", "100%"]}
      cursor="pointer"
      marginY={14}
    >
      <Container m={0} p={[4, 0]} borderRadius="24px" overflow="hidden">
        <GatsbyImage
          alt={name}
          image={imageData}
          imgStyle={{ borderRadius: "24px" }}
        />
      </Container>
      <VStack
        align="flex-start"
        w={["100%", "70%"]}
        spacing={8}
        paddingX={[4, 16]}
      >
        <Text fontSize="4xl" color="dark" fontWeight="600">
          {name}
        </Text>
        <Text fontSize="2xl">{description}</Text>
        {primaryCharacteristics.map((el, index) => (
          <Stack
            direction={["column", "row"]}
            fontSize="xl"
            w="100%"
            key={index}
          >
            <Text fontWeight="700" minW="16%">
              {el.characteristic}:
            </Text>
            <Text> {el.value} </Text>
          </Stack>
        ))}
        {numericCharacteristics.map((el, index) => (
          <Stack
            direction={["column", "row"]}
            fontSize="xl"
            w="100%"
            key={index}
          >
            <Text fontWeight="700" minW="16%">
              {el.characteristic}:
            </Text>
            <HStack spacing={4}>
              {Array.from([1, 2, 3, 4, 5], (v) => (
                <Box
                  h="12px"
                  w={["50px", "60px"]}
                  borderRadius="8px"
                  bg={v <= el.value ? "#544439" : "#E0E0E0"}
                ></Box>
              ))}
            </HStack>
          </Stack>
        ))}
      </VStack>
    </Stack>
  );
};

export default BreedPage;

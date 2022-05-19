import React from "react";
import { VStack, HStack, Text, Grid, GridItem } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Main = () => {
  return (
    <HStack w="100%" marginY="100px" paddingX="8%" align="flex-start">
      <VStack w="45%" align="flex-start" spacing={8} mt="10%" color="dark">
        <Text fontSize="4xl" fontWeight={700}>
          <span style={{ borderTop: "4px solid #4D270C", paddingTop: "10px" }}>
            Why{" "}
          </span>
          should you <br />
          have a cat?
        </Text>
        <Text fontSize="xl" maxW="80%">
          Having a cat around you actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety levels
        </Text>
        <Text
          fontSize="2xl"
          pt={10}
          cursor="pointer"
          _hover={{ borderBottom: "2px solid #291507" }}
        >
          <Link to="https://www.mentalfloss.com/article/51154/10-scientific-benefits-being-cat-owner">
            Read more <ArrowForwardIcon />
          </Link>
        </Text>
      </VStack>
      <Grid
        w="55%"
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={6}
      >
        <GridItem rowSpan={1} colSpan={2} justifySelf="flex-end">
          <StaticImage alt="" src="../../images/G2.png" />
        </GridItem>
        <GridItem
          colSpan={2}
          rowSpan={2}
          rowStart={2}
          colStart={1}
          justifySelf="flex-end"
        >
          <StaticImage alt="" src="../../images/G1.png" />
        </GridItem>
        <GridItem colSpan={2} rowSpan={3}>
          <StaticImage alt="" src="../../images/G3.png" />
        </GridItem>
      </Grid>
    </HStack>
  );
};

export default Main;

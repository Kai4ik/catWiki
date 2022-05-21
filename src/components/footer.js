import React from "react";
import { Flex, HStack, Text } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
  return (
    <footer style={{ marginTop: "auto" }}>
      <Flex
        flexDirection={["column", "row"]}
        justify="space-between"
        bg="bgDark"
        color="secondaryText"
        borderTopRadius="42px"
        p={8}
        pl={12}
        gridRowGap="14px"
        w="100%"
      >
        <StaticImage
          src="../images/CatwikiLogoWhite.svg"
          alt="catWiki logo"
          objectPosition="left"
          objectFit="contain"
        />
        <HStack spacing="6px">
          <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />
          <Text>created by</Text>
          <Text as="u">Kairat Orozobekov </Text>
        </HStack>
      </Flex>
    </footer>
  );
};

export default Footer;

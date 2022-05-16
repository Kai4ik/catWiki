import React from "react";
import {
  VStack,
  Container,
  Text,
  InputGroup,
  Input,
  InputRightElement,
  Flex,
} from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import { Search2Icon, ArrowForwardIcon } from "@chakra-ui/icons";

const Hero = ({ data }) => {
  const [searchValue, setSearchValue] = React.useState("");
  const handleChange = (event) => setSearchValue(event.target.value);

  return (
    <VStack w="100%" borderRadius="24px" overflow="hidden">
      <Container maxW="100%" pos="relative" p={0}>
        <StaticImage
          aspectRatio={3 / 1}
          alt=""
          src={"../images/HeroImage.png"}
        />
        <VStack
          pos="absolute"
          top="20%"
          left="12%"
          color="secondaryText"
          maxW="20%"
          align="flex-start"
        >
          <StaticImage
            width={220}
            src="../images/CatwikiLogoWhite.svg"
            alt="catWiki logo"
          />
          <Text fontSize="2xl" pb={6}>
            Get to know more about your cat breed
          </Text>
          <InputGroup color="dark">
            <Input
              type="tel"
              borderRadius="60px"
              bg="#fff"
              focusBorderColor="none"
              size="lg"
              value={searchValue}
              onChange={handleChange}
              placeholder="Enter your breed"
              _placeholder={{ color: "inherit" }}
            />
            <InputRightElement
              top="10%"
              pointerEvents="none"
              children={<Search2Icon />}
            />
          </InputGroup>
        </VStack>
      </Container>
      <VStack
        w="100%"
        bg="#E3E1DC"
        m="0px !important"
        paddingX="12%"
        paddingY={10}
        color="dark"
        align="flex-start"
        spacing={45}
      >
        <Text fontSize="xl" fontWeight={500}>
          <span style={{ borderBottom: "2px solid #291507" }}>Most </span>
          Searched Breeds
        </Text>
        <Flex justify="space-between" align="center" w="100%">
          <Text fontSize="4xl" fontWeight={700} maxW="25%">
            66+ Breeds For you to discover
          </Text>
          <Text fontSize="xl">
            See more <ArrowForwardIcon />
          </Text>
        </Flex>
      </VStack>
    </VStack>
  );
};

export default Hero;

import React, { useContext, useState, useEffect } from "react";
import {
  VStack,
  HStack,
  Container,
  Center,
  Text,
  InputGroup,
  Input,
  InputRightElement,
  Flex,
} from "@chakra-ui/react";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import { Search2Icon, ArrowForwardIcon } from "@chakra-ui/icons";

// app context pass to useContext hook
import { AppContext } from "../../context/index";

const Hero = () => {
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (event) => setSearchValue(event.target.value);

  const [dataToShow, setDataToShow] = useState([]);

  // fetching catData from app context
  const data = useContext(AppContext);

  useEffect(() => {
    const shuffledArray = data.sort(() => 0.5 - Math.random());
    const selected = shuffledArray.slice(0, 4);
    setDataToShow(selected);
    // eslint-disable-next-line no-use-before-define
  }, [data]);

  return (
    <VStack w="100%" borderRadius="24px" overflow="hidden" mt={6}>
      <Container maxW="100%" pos="relative" p={0}>
        <StaticImage
          aspectRatio={3 / 1}
          alt=""
          src={"../../images/HeroImage.png"}
        />
        <VStack
          pos="absolute"
          top="20%"
          left="12%"
          color="secondaryText"
          align="flex-start"
        >
          <Text fontSize="6xl" fontFamily="Mystery Quest">
            CatWiki
          </Text>
          <Text fontSize="2xl" pb={6}>
            Get to know more about your <br />
            cat breed
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
        <Text fontSize="xl" fontWeight={500} cursor="pointer">
          <span style={{ borderBottom: "2px solid #291507" }}>Most </span>
          Searched Breeds {"   "}
          <ArrowForwardIcon />
        </Text>
        <Flex justify="space-between" align="center" w="100%">
          <Text fontSize="4xl" fontWeight={700}>
            66+ Breeds For you <br /> to discover
          </Text>
          <Text fontSize="2xl" cursor="pointer">
            See more <ArrowForwardIcon />
          </Text>
        </Flex>
        <HStack justify="space-between" w="100%">
          {dataToShow.map((el) => (
            <VStack key={el.id} align="flex-start">
              <Center borderRadius="24px" overflow="hidden">
                <GatsbyImage
                  alt={el.name}
                  image={el.image.childImageSharp.gatsbyImageData}
                />
              </Center>
              <Text> {el.name} </Text>
            </VStack>
          ))}
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Hero;

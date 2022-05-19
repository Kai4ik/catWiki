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
import { Link } from "gatsby";

// app context pass to useContext hook
import { AppContext } from "../../context/index";

const Hero = () => {
  // value of user input
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (event) => setSearchValue(event.target.value);

  // 4 cat breeds that will be shown on the page (all time different ones - chosen randomly)
  const [dataToShow, setDataToShow] = useState([]);

  // determines whether to show container with available options or not
  const [showSelectionHelper, setShowSelectionHelper] = useState(false);

  // fetching catData from app context
  const data = useContext(AppContext);

  // all cat breeds
  const initialOptions = data.map((breed) => breed.name);

  // available options (cat breeds) that match entered by user value
  const [options, setOptions] = useState(initialOptions);

  useEffect(() => {
    const shuffledArray = data.sort(() => 0.5 - Math.random());
    const selected = shuffledArray.slice(0, 4);
    setDataToShow(selected);
    // eslint-disable-next-line no-use-before-define
  }, [data]);

  // whenever user changes value of input box, options updated
  useEffect(() => {
    const availableOptions = initialOptions.filter((option) =>
      option.toLowerCase().includes(searchValue.toLowerCase())
    );
    setOptions(searchValue.length > 0 ? availableOptions : initialOptions);
    // eslint-disable-next-line no-use-before-define
  }, [searchValue, initialOptions]);

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
          left="8%"
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
              type="text"
              borderRadius="60px"
              bg="#fff"
              focusBorderColor="none"
              size="lg"
              value={searchValue}
              onChange={handleChange}
              onFocus={() => setShowSelectionHelper(true)}
              onBlur={() => setShowSelectionHelper(false)}
              placeholder="Enter your breed"
              _placeholder={{ color: "inherit" }}
            />
            <InputRightElement
              top="10%"
              pointerEvents="none"
              children={<Search2Icon />}
            />
          </InputGroup>
          {showSelectionHelper && (
            <Flex
              bg="#fff"
              color="#000"
              flexDirection="column"
              w="100%"
              paddingY={2}
              paddingX={4}
              borderRadius="24px"
              cursor="pointer"
              h="120px"
              overflowY="scroll"
              css={{
                "&::-webkit-scrollbar": {
                  width: "20px",
                },

                "&::-webkit-scrollbar-track": {
                  boxShadow: "inset 0 0 40px 40px rgba(151, 151, 151, 0.1)",
                  borderTop: "solid 6px transparent",
                  borderBottom: "solid 6px transparent",
                  borderRight: "solid 14px transparent",
                },

                "&::-webkit-scrollbar-thumb": {
                  boxShadow: "inset 0 0 40px 40px #BDBDBD",
                  borderTop: "solid 6px transparent",
                  borderBottom: "solid 6px transparent",
                  borderRight: "solid 14px transparent",
                },
              }}
            >
              {options.sort().map((option) => (
                <Text
                  fontSize="lg"
                  borderRadius="6px"
                  paddingX={4}
                  _hover={{ backgroundColor: "rgba(151, 151, 151, 0.1)" }}
                >
                  {option}
                </Text>
              ))}
            </Flex>
          )}
        </VStack>
      </Container>
      <VStack
        w="100%"
        bg="#E3E1DC"
        m="0px !important"
        paddingX="8%"
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
            63+ Breeds For you <br /> to discover
          </Text>
          <Text
            fontSize="2xl"
            cursor="pointer"
            _hover={{ borderBottom: "2px solid #291507" }}
          >
            <Link to="/allBreeds">
              See more <ArrowForwardIcon />
            </Link>
          </Text>
        </Flex>
        <HStack justify="space-between" w="100%">
          {dataToShow.map((el) => (
            <VStack key={el.id} align="flex-start">
              <Center borderRadius="24px" overflow="hidden" cursor="pointer">
                <GatsbyImage
                  alt={el.name}
                  image={el.image.childImageSharp.gatsbyImageData}
                />
              </Center>
              <Text color="dark" fontWeight="600" fontSize="xl" pl="8px">
                {el.name}
              </Text>
            </VStack>
          ))}
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Hero;

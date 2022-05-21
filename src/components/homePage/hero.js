import React, { useContext, useState, useEffect, useMemo } from "react";
import {
  VStack,
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
import { Link, navigate } from "gatsby";

// app context pass to useContext hook
import { AppContext } from "../../context/index";

const Hero = () => {
  // value of user input
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (event) => setSearchValue(event.target.value);

  // determines whether to show container with available options or not
  const [showSelectionHelper, setShowSelectionHelper] = useState(false);

  // fetching catData from app context
  const data = useContext(AppContext);

  const generateCatData = (data) =>
    data.sort(() => 0.5 - Math.random()).slice(0, 4);

  // 4 cat breeds that will be shown on the page (all time different ones - chosen randomly)
  const dataToShow = useMemo(() => generateCatData(data), [data]);

  // all cat breeds
  const initialOptions = data.map((breed) => {
    return { id: breed.id, breedName: breed.name };
  });

  // available options (cat breeds) that match entered by user value
  const [options, setOptions] = useState(initialOptions);

  // whenever user changes value of input box, options updated
  useEffect(() => {
    const availableOptions = initialOptions.filter((option) =>
      option.breedName.toLowerCase().includes(searchValue.toLowerCase())
    );
    setOptions(searchValue.length > 0 ? availableOptions : initialOptions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  return (
    <VStack w="100%" borderRadius="24px" overflow="hidden" mt={6}>
      <Container maxW="100%" pos="relative" p={0} h={["400px", "600px"]}>
        <StaticImage
          aspectRatio={3 / 1}
          alt=""
          src={"../../images/HeroImage.png"}
          style={{ height: "100%" }}
        />
        <VStack
          pos="absolute"
          top="20%"
          left="8%"
          color="secondaryText"
          align="flex-start"
        >
          <Text fontSize={["3xl", "6xl"]} fontFamily="Mystery Quest">
            CatWiki
          </Text>
          <Text fontSize="2xl" pb={6}>
            Get to know more about your <br />
            cat breed
          </Text>
          <VStack
            spacing={4}
            w="100%"
            onMouseEnter={() => setShowSelectionHelper(true)}
            onMouseLeave={() => setShowSelectionHelper(false)}
          >
            <InputGroup color="dark">
              <Input
                type="text"
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
                {options
                  .sort((a, b) => a.breedName.localeCompare(b.breedName))
                  .map((option) => (
                    <Text
                      onClick={() => navigate(`/breed-${option.id}`)}
                      fontSize="lg"
                      borderRadius="6px"
                      paddingX={4}
                      _hover={{ backgroundColor: "rgba(151, 151, 151, 0.1)" }}
                      key={option.id}
                    >
                      {option.breedName}
                    </Text>
                  ))}
              </Flex>
            )}
          </VStack>
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
        <Flex
          justify="space-between"
          align={["flex-start", "center"]}
          w="100%"
          flexDirection={["column", "row"]}
        >
          <Text fontSize={["3xl", "4xl"]} fontWeight={700}>
            63+ Breeds For you to discover
          </Text>
          <Text
            fontSize={["xl", "2xl"]}
            cursor="pointer"
            _hover={{ borderBottom: "2px solid #291507" }}
          >
            <Link to="/allBreeds">
              See more <ArrowForwardIcon />
            </Link>
          </Text>
        </Flex>
        <Flex
          justify="space-between"
          w="100%"
          wrap={["wrap", "nowrap"]}
          gridRowGap="30px"
        >
          {dataToShow.map((el) => (
            <VStack key={el.id} align="flex-start" w={["48%", "24%"]}>
              <Link to={`/breed-${el.id}`}>
                <Center borderRadius="24px" overflow="hidden" cursor="pointer">
                  <GatsbyImage
                    alt={el.name}
                    image={el.image.childImageSharp.gatsbyImageData}
                  />
                </Center>
                <Text
                  color="dark"
                  fontWeight="600"
                  fontSize={["md", "xl"]}
                  pl="8px"
                >
                  {el.name}
                </Text>
              </Link>
            </VStack>
          ))}
        </Flex>
      </VStack>
    </VStack>
  );
};

export default Hero;

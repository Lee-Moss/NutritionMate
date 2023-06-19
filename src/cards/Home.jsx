import React from "react";
import { Flex, Box, Heading, Text, Link, Image } from "@chakra-ui/react";
import image1 from "../images/brooke.jpg";

export default function Home() {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      h="100vh"
      bg="gray.100"
    >
      <Box maxW="800px" p={4}>
        <Heading fontSize={["2xl", "3xl", "4xl", "5xl"]} mb={4}>
          Welcome to Nutrition Mate
        </Heading>
        <Text fontSize={["md", "lg", "xl"]} mb={8}>
          Your ultimate companion for fitness and wellness.
        </Text>

        <Flex
          direction={["column", "column", "row"]}
          align="center"
          justify="center"
          mb={8}
        ></Flex>

        <Box mr={[0, 0, 4]}>
          <Image
            src={image1}
            alt="Fitness Image 1"
            borderRadius="md"
            w="300px"
            h="200px"
            objectFit="cover"
          />
        </Box>

        {/* <Box>
            <Image
              src={}
              alt="Fitness Image 2"
              borderRadius="md"
              w="300px"
              h="200px"
              objectFit="cover"
            />
          </Box>
        </Flex>  */}

        <Text fontSize={["md", "lg", "xl"]}>
          Get started on your fitness journey today!
          <br />
          Explore our wide range of features, from tracking calories to
          searching for workout routines.
        </Text>

        <Link as={Link} to="/About" color="blue.500" mt={4}>
          Learn More
        </Link>
      </Box>
    </Flex>
  );
}

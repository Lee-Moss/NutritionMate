import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Flex, Box, Link as ChakraLink } from "@chakra-ui/react";
import {
  Home,
  About,
  SearchFood,
  SearchWorkouts,
} from "../components/CardComponents";

export default function Dashboard() {
  return (
    <Flex direction="column" align="center" bg="gray.100" p={4}>
      <Box as="nav" bg="white" p={4} shadow="md" rounded="md">
        <ChakraLink
          as={Link}
          to="/"
          fontSize={["md", "lg", "xl", "3xl"]}
          mr={20}
        >
          Home
        </ChakraLink>
        <ChakraLink
          as={Link}
          to="/About"
          fontSize={["md", "lg", "xl", "3xl"]}
          mr={20}
        >
          About
        </ChakraLink>
        <ChakraLink
          as={Link}
          to="/SearchFood"
          fontSize={["md", "lg", "xl", "3xl"]}
          mr={20}
        >
          Food
        </ChakraLink>
        <ChakraLink
          as={Link}
          to="/SearchWorkouts"
          fontSize={["md", "lg", "xl", "3xl"]}
        >
          Workout
        </ChakraLink>
      </Box>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/SearchFood" element={<SearchFood />} />
        <Route path="/SearchWorkouts" element={<SearchWorkouts />} />
      </Routes>
    </Flex>
  );
}

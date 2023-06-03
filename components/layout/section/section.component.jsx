import React from "react";
import { Box, Flex } from "@chakra-ui/react";

const Section = ({ children, id, minH }) => {
  return (
    <Flex
      id={id}
      alignItems="center"
      justifyContent="center"
      w="full"
      my="24"
      minH={minH}
    >
      {children}
    </Flex>
  );
};

export default Section;

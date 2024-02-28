import React from "react";
import { Box, Container, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  console.log(date);
  return (
    <Box w="full" py="6">
      <Container maxW="5xl">
        <Flex w="full" justifyContent="center">
          <Text fontFamily="primary">{`${year} Mark Marasigan`}</Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;

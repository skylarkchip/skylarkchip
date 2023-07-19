import React from "react";
import { Box, Container, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box w="full" py="6">
      <Container maxW="5xl">
        <Flex w="full" justifyContent="center">
          <Text fontFamily="primary">&copy; 2023 Mark Marasigan.</Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;

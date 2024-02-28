import React from "react";
import { Box, Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const onNavigateHandler = (id) => {
    const target = document.querySelector(id);
    target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box w="full" py="8">
      <Container maxW="5xl">
        <Flex
          justifyContent={{
            base: `${router.pathname === "/" ? "space-between" : "center"}`,
            md: "space-between",
          }}
          alignItems="center"
        >
          <Box>
            <Link
              href="/"
              _hover={{ textDecoration: "none" }}
              textAlign={{
                base: `${router.pathname === "/projects" && "center"}`,
                md: "left",
              }}
            >
              <Text
                color="gray.800"
                fontFamily="primary"
                fontSize="2xl"
                fontWeight="bold"
                textTransform="lowercase"
                _hover={{ color: "gray.400" }}
              >
                markmarasigan
              </Text>
            </Link>
          </Box>
          <Flex gap="10" alignItems="center">
            <HStack spacing="4" display={{ base: "none", md: "flex" }}>
              <Link
                href="/projects"
                color="gray.800"
                fontFamily="primary"
                fontSize="lg"
                fontWeight="medium"
                letterSpacing="tight"
                _hover={{ color: "gray.400" }}
              >
                Projects
              </Link>
            </HStack>
            {router.pathname === "/" && (
              <Button
                variant="solid"
                borderRadius="md"
                bgColor="gray.800"
                border="none"
                color="white"
                fontFamily="primary"
                fontWeight="normal"
                letterSpacing="tight"
                onClick={() => onNavigateHandler("#contact")}
                _hover={{ bgColor: "gray.400" }}
              >
                Let&rsquo;s Collab
              </Button>
            )}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;

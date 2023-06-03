import React from "react";
import dynamic from "next/dynamic";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  IconButton,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { useRouter } from "next/router";
import { Link } from "@chakra-ui/next-js";
import { motion } from "framer-motion";

// Components
const Layout = dynamic(() => import("@/components/layout/layout.component"));
const Section = dynamic(() =>
  import("@/components/layout/section/section.component")
);

const HomePage = () => {
  const router = useRouter();
  return (
    <Layout>
      <Container maxW="5xl">
        <Section minH={{ base: "70vh", md: "80vh", lg: "70vh" }}>
          <Heading
            as="h1"
            fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
            fontFamily="primary"
            textTransform="capitalize"
            textAlign="center"
          >
            Hi, I&rsquo;m a Front-end developer based in{" "}
            <Text as="span" fontStyle="italic" color="red.400">
              Manila.
            </Text>
          </Heading>
        </Section>
        <Section id="about" minH={{ base: "30vh", md: "50vh" }}>
          <VStack spacing="16" align="center" w="full">
            <Heading as="h2" fontFamily="primary">
              About{" "}
              <Text as="span" fontStyle="italic">
                me
              </Text>
            </Heading>
            <Box
              w={{ base: "150px", md: "300px" }}
              h={{ base: "150px", md: "300px" }}
            >
              <Avatar
                size="full"
                src="/pang.jpg"
                objectFit="cover"
                w="full"
                h="full"
              />
            </Box>
            <VStack spacing="4">
              <Text
                fontFamily="primary"
                fontSize={{ base: "lg", md: "2xl" }}
                fontWeight="medium"
                flex="1"
                textAlign="center"
              >
                I&rsquo;m a Frontend Developer where I specialize in creating
                engaging and responsive websites using HTML, CSS and Javascript.
                I also have experience working with popular frontend frameworks
                such as React / Next.js.
              </Text>
              <Text
                fontFamily="primary"
                fontSize={{ base: "lg", md: "2xl" }}
                fontWeight="medium"
                flex="1"
                textAlign="center"
              >
                In addition, I have expertise in theme development for CMS
                platforms such as WordPress and Shopify, including creating
                custom themes from scratch and customizing existing themes to
                meet specific client needs. I am also familiar in CSS libraries
                such as Tailwind CSS, Chakra UI and Bootstrap to speed up the
                development and enhance the look and feel of the website.
              </Text>
            </VStack>
            <Button
              variant="solid"
              borderRadius="md"
              bgColor="gray.800"
              border="none"
              color="white"
              fontSize="xl"
              fontFamily="primary"
              fontWeight="normal"
              px="8"
              size="lg"
              _hover={{ bgColor: "gray.400" }}
              onClick={() => router.push("/works")}
            >
              My Portfolio
            </Button>
          </VStack>
        </Section>
        <Section id="contact" minH={{ base: "30vh", md: "70vh" }}>
          <VStack spacing="16" align="center" w="full">
            <Heading as="h2" fontFamily="primary" textAlign="center">
              Let&rsquo;s talk about that{" "}
              <Text as="span" fontStyle="italic">
                collab
              </Text>
            </Heading>
            <IconButton
              icon={<Icon as={BsGithub} color="white" />}
              bgColor="black"
              borderRadius="full"
              size="lg"
              _hover={{ bgColor: "blackAlpha.600" }}
              onClick={() => {
                router.push("https://github.com/skylarkchip");
              }}
            />
            <Text
              fontFamily="primary"
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="medium"
              flex="1"
              textAlign="center"
            >
              You may contact me here{" "}
              <Link href="mailto:markmarasigandev@gmail.com" color="red.400">
                markmarasigandev@gmail.com
              </Link>
            </Text>
          </VStack>
        </Section>
      </Container>
    </Layout>
  );
};

export default HomePage;

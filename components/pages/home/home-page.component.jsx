import React from "react";
import dynamic from "next/dynamic";
import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  Icon,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import { useRouter } from "next/router";
import { Link } from "@chakra-ui/next-js";

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
            <Text as="span" fontStyle="italic" color="teal.300">
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
                src="/pang-2.jpeg"
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
                meet specific client needs. I am also familiar with CSS
                libraries such as Tailwind CSS, Chakra UI and Bootstrap to speed
                up the development and enhance the look and feel of the website.
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
              onClick={() => router.push("/projects")}
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
            <Link href="https://github.com/skylarkchip" target="_blank">
              <Icon as={BsGithub} color="gray.800" boxSize="10" />
            </Link>
            <Text
              fontFamily="primary"
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="medium"
              flex="1"
              textAlign="center"
            >
              You may contact me here{" "}
              <Link href="mailto:markmarasigandev@gmail.com" color="teal.300">
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

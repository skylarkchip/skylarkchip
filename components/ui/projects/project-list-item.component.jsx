import React from "react";
import {
  Badge,
  Box,
  Flex,
  Heading,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { Image } from "@chakra-ui/next-js";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

const ProjectListItem = ({ project, idx }) => {
  return (
    <Flex
      key={project.id}
      justifyContent="space-between"
      flexDirection={{
        base: "column-reverse",
        md: `${idx % 2 === 0 ? "row" : "row-reverse"}`,
      }}
      w="full"
    >
      <VStack
        w="full"
        align="left"
        spacing="10"
        py="4"
        px="10"
        justifyContent="center"
      >
        <Heading as="h3" fontFamily="primary" fontSize="2xl" color="red.400">
          {project.properties.Name.title[0].text.content}
        </Heading>
        {project.properties.Description.rich_text.length > 0 && (
          <Box w="full">
            <Text
              fontFamily="primary"
              fontSize="lg"
              fontWeight="normal"
              color="black"
            >
              {project.properties.Description.rich_text[0].plain_text}
            </Text>
          </Box>
        )}
        <Flex w="full" gap="4">
          {project.properties.Link.url && (
            <Link
              color="white"
              fontFamily="primary"
              fontWeight="medium"
              px="4"
              py="2"
              href={project.properties.Link.url}
              target="_blank"
              _hover={{ bgColor: "gray.400" }}
            >
              <Flex alignItems="center" gap="2">
                <Text>Link</Text>
                <Icon as={BsArrowUpRight} />
              </Flex>
            </Link>
          )}
          {project.properties.Repo.url && (
            <Link
              color="white"
              fontFamily="primary"
              fontWeight="medium"
              px="4"
              py="2"
              href={project.properties.Repo.url}
              target="_blank"
              _hover={{ bgColor: "gray.400" }}
            >
              <Flex alignItems="center" gap="2">
                <Text>Repo</Text>
                <Icon as={BsGithub} />
              </Flex>
            </Link>
          )}
        </Flex>
        <Flex gap="2" flexWrap="wrap" w="full">
          {project.properties.Stack.multi_select.map((p) => (
            <Badge
              key={p.id}
              bgColor={`${p.color}.300`}
              color={p.color === "default" ? "black" : "white"}
              px="4"
              py="1"
              fontFamily="primary"
              fontWeight="medium"
            >
              {p.name}
            </Badge>
          ))}
        </Flex>
      </VStack>
      <Box w="full" px="4" py="6">
        {project.properties.Images.files.length > 0 ? (
          <Image
            src={project.properties.Images.files[0].file.url}
            alt={project.properties.Name.title[0].text.content}
            width={1800}
            height={1000}
            h="full"
            w="full"
            style={{ objectFit: "cover" }}
          />
        ) : (
          <Image
            fallbackSrc="https://via.placeholder.com/1000"
            alt={project.properties.Name.title[0].text.content}
          />
        )}
      </Box>
    </Flex>
  );
};

export default ProjectListItem;

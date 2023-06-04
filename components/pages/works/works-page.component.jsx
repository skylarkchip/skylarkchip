import React from "react";
import dynamic from "next/dynamic";
import { Container, Heading, Text, VStack } from "@chakra-ui/react";

// Components
const Layout = dynamic(() => import("@/components/layout/layout.component"));
const Section = dynamic(() =>
  import("@/components/layout/section/section.component")
);
const ProjectList = dynamic(() =>
  import("@/components/ui/projects/project-list.component")
);

const WorksPage = ({ projects }) => {
  return (
    <Layout>
      <Container maxW="5xl">
        <Section minH={{ base: "30vh", md: "50vh" }}>
          <VStack spacing="16" align="center" w="full">
            <Heading as="h2" fontFamily="primary">
              My
              <Text as="span" fontStyle="italic" color="red.400">
                works
              </Text>
            </Heading>
            <ProjectList projects={projects} />
          </VStack>
        </Section>
      </Container>
    </Layout>
  );
};

export default WorksPage;

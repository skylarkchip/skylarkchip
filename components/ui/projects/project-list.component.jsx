import React from "react";
import dynamic from "next/dynamic";
import { VStack } from "@chakra-ui/react";

// Components
const ProjectListItem = dynamic(() => import("./project-list-item.component"));

const ProjectList = ({ projects }) => {
  return (
    <VStack spacing="16" w="full">
      {projects.map((project, idx) => (
        <ProjectListItem key={project.id} idx={idx} project={project} />
      ))}
    </VStack>
  );
};

export default ProjectList;

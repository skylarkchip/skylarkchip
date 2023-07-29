import React from "react";
import dynamic from "next/dynamic";
import { Client } from "@notionhq/client";

// Components
const WorksPage = dynamic(() =>
  import("@/components/pages/works/works-page.component")
);

const Works = (props) => {
  return <WorksPage projects={props.results} />;
};

export default Works;

export async function getStaticProps() {
  const notion = new Client({ auth: process.env.notionKey });

  const response = await notion.databases.query({
    database_id: process.env.databaseId,
  });

  const activeProjects = response.results.filter(
    (result) => result.properties.Hidden.checkbox === false
  );

  return {
    props: {
      results: activeProjects,
    },
    revalidate: 30,
  };
}

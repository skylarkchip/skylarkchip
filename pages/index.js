import React from "react";
import dynamic from "next/dynamic";

// Components
const HomePage = dynamic(() =>
  import("@/components/pages/home/home-page.component")
);

const Home = () => {
  return <HomePage />;
};

export default Home;

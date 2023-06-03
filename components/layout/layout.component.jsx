import React from "react";
import dynamic from "next/dynamic";
import { Box } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

// Components
const Header = dynamic(() => import("./header/header.component"));
const Footer = dynamic(() => import("./footer/footer.component"));

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <Box w="full" h="100vh">
      <Header />
      <AnimatePresence mode="wait" initial={true}>
        <motion.div
          key={router.asPath}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: -50 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
      <Footer />
    </Box>
  );
};

export default Layout;

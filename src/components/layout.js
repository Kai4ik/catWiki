import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Container } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Container
      maxW={["100vw", "container.xl"]}
      paddingX={[5, 35]}
      pt={8}
      minHeight="100vh"
      display="flex"
      flexDirection="column"
    >
      <Header />
      <main> {children}</main>
      <Footer />
    </Container>
  );
};

export default Layout;

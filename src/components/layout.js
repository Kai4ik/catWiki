import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Container } from "@chakra-ui/react";
import favicon from "../images/favicon.ico";
import Helmet from "react-helmet";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Helmet>
        <link rel="icon" href={favicon} />
        <title> CatWiki Home Page</title>
      </Helmet>
      <Container
        maxW={["100%", "container.xl"]}
        paddingX={[5, 35]}
        pt={8}
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        overflowX="hidden"
      >
        <Header />
        <main> {children}</main>
        <Footer />
      </Container>
    </React.Fragment>
  );
};

export default Layout;

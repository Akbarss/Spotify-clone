import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
  return (
    <>
      <Header />
      <Container maxWidth={"xl"}>
        <Box minHeight={"100vh"}>{props.children}</Box>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;

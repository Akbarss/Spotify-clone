import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Footer from "./Footer";
import SideBar from "./SideBar";

const Layout = (props) => {
  return (
    <>
      <SideBar />
      <Container maxWidth={"lg"}>
        <Box minHeight={"100vh"} component="main">
          {props.children}
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;

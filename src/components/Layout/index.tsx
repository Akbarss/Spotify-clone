import { Container, CssBaseline, Drawer } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AppBarSide from "./AppBar";
import Footer from "./Footer";
import SideBar from "./SideBar";

interface Props {
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Box display={"flex"}>
      <CssBaseline />
      <AppBarSide open={open} handleDrawerOpen={handleDrawerOpen} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <SideBar open={open} handleDrawerClose={handleDrawerClose} />
      </Box>
      <Box width={"100%"} sx={{ marginTop: 12, marginRight: 5 }}>
        {props.children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;

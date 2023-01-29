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
    <>
      <Box display={"flex"}>
        <CssBaseline />
        <AppBarSide open={open} handleDrawerOpen={handleDrawerOpen} />
        <Box component="main" >
          <SideBar open={open} handleDrawerClose={handleDrawerClose} />
        </Box>
        <Box className='contaent-bg' width={'100%'} display='flex' justifyContent={'right'}>
          <Box width={"100%"} sx={{ marginTop: 12, marginRight: 5, pl: 3 }} minHeight={'100vh'}>
            {props.children}
          </Box>
        </Box>
      </Box>
      <Box position={'fixed'} bottom={2} width='100%' zIndex={90}>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;

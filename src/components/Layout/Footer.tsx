import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <Box zIndex={90}>
      <Box width={'100%'} height='10vh' zIndex={9} sx={{ backgroundColor: 'rgb(24, 24, 24)' }}>
      </Box>
    </Box>
  )
};

export default Footer;

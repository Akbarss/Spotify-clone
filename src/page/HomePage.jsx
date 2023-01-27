import { Stack } from "@mui/system";
import React, { Suspense } from "react";
import { useResource } from "../api/resource";
import Posts from "../components/Cards/Posts/Posts";
import Layout from "../components/Layout";
import { CircularProgress, Box } from "@mui/material";
import Grid from "@mui/material/Grid";

let resource = useResource();

const HomePage = () => {
  return (
    <>
      <Layout>
        <Suspense
          fallback={
            <Box
              display={"flex"}
              alignItems="center"
              justifyContent={"center"}
              width="100%"
              height={"100vh"}
            >
              <CircularProgress size={"50px"} />
            </Box>
          }
        >
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
            <Grid item xs={12}>
              <Posts resource={resource} />
            </Grid>
          </Grid>
        </Suspense>
      </Layout>
    </>
  );
};

export default HomePage;

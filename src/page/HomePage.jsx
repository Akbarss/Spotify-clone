import { Stack } from "@mui/system";
import React, { Suspense } from "react";
import { useResource } from "../api/resource";
import Posts from "../components/Cards/Posts/Posts";
import Layout from "../components/Layout";
import { CircularProgress, Box } from "@mui/material";

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
          <Stack direction={"row"} flexWrap={"wrap"} gap={3} mt={15} justifyContent={"center"}>
            <Posts resource={resource} />
          </Stack>
        </Suspense>
      </Layout>
    </>
  );
};

export default HomePage;

import { Stack } from "@mui/system";
import React from "react";
import { useResource } from "../api/resource";
import Posts from "../components/Cards/Posts/Posts";
import Layout from "../components/Layout";

let resource = useResource();

const HomePage = () => {
  return (
    <>
      <Layout>
        <Stack direction={"row"} flexWrap={"wrap"} gap={3} mt={7} justifyContent={"center"}>
          <Posts resource={resource} />
        </Stack>
      </Layout>
    </>
  );
};

export default HomePage;

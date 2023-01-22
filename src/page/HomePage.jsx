import { Stack } from "@mui/system";
import React, { Suspense } from "react";
import { useResource } from "../api/resource";
import Posts from "../components/Cards/Posts/Posts";
import Layout from "../components/Layout";

let resource = useResource();

const HomePage = () => {
  return (
    <>
      <Layout>
        <Suspense fallback={<p style={{ color: "#fff", fontSize: "60px" }}>Loading</p>}>
          <Stack direction={"row"} flexWrap={"wrap"} gap={3} mt={7} justifyContent={"center"}>
            <Posts resource={resource} />
          </Stack>
        </Suspense>
      </Layout>
    </>
  );
};

export default HomePage;

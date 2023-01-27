import React, { Suspense, lazy } from "react";
import { useResource } from "../api/resource";
import Layout from "../components/Layout";
import Grid from "@mui/material/Grid";
import SkeletonCards from "../components/Cards/Skeleton/SkeletonCards";
const Posts = React.lazy(() => import('../components/Cards/Posts/Posts'));

let resource = useResource();

const HomePage = () => {
  return (
    <>
      <Layout>
        <Suspense
          fallback={<SkeletonCards />}
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

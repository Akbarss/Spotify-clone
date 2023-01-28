import { Card, Stack, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";

const Posts = ({ resource }) => {
  let posts = resource.posts.read();
  return (
    <>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 1, lg: 12 }}>
        {posts.map((post) => (
          <Grid item xs={2} sm={4} md={4}>
            <Card key={post.id} sx={{ height: 400, width: { xs: "100%", sm: 400 } }}>
              <Typography textAlign={"center"} variant=" subtitle1">
                {post.title}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Posts;

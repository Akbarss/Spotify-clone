import { Card, Stack, Typography } from "@mui/material";
import React from "react";

const Posts = ({ resource }) => {
  let posts = resource.posts.read();
  return (
    <>
      {posts.map((post) => (
        <Stack direction={"row"}>
          <Card key={post.id} sx={{ height: 400, width: { xs: "100%", sm: 400 } }}>
            <Typography textAlign={"center"}>{post.title}</Typography>
          </Card>
        </Stack>
      ))}
    </>
  );
};

export default Posts;

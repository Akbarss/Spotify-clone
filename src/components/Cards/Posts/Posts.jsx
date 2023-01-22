import React from "react";

const Posts = ({ resource }) => {
  let posts = resource.posts.read();
  return (
    <>
      <h1>Shit</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Posts;

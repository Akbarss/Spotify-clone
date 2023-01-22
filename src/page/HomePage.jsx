import React from "react";
import { useResource } from "../api/resource";
import Posts from "../components/Cards/Posts/Posts";

let resource = useResource();

const HomePage = () => {
  return (
    <>
      <Posts resource={resource} />
    </>
  );
};

export default HomePage;

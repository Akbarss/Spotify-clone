import React from "react";
// import HomePage from "./page/HomePage";
import "./App.css";
// import { Route, Routes, Link } from "react-router-dom";
// import UsersPage from "./page/UsersPage";
import Router from "./router/router";

const App = () => {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes> */}
      <Router />
    </>
  );
};

export default App;

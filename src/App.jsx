import React from "react";
import HomePage from "./page/HomePage";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import UsersPage from "./page/UsersPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </>
  );
};

export default App;

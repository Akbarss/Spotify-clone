import React from "react";
import "./App.css";
import Router from "./router/router";
import ThemeProvider from "./theme";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </>
  );
};

export default App;

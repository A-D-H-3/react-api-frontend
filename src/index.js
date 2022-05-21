import React from "react";
import ReactDOM from "react-dom/client";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
    >
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

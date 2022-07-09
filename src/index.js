import React from "react";
import ReactDOM from "react-dom";

// Import App
import { People } from "./app";

// Import CSS
import "./index.css";

// Main App
const MainApp = () => {
  return <People></People>;
};

ReactDOM.render(<MainApp></MainApp>, document.getElementById("root"));

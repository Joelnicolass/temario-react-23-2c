import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

const fn = (value, cb = (value) => {}) => {
  return cb(value);
};

fn(5, (value) => {
  console.log(value);
});

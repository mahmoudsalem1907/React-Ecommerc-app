import React from "react";
import ReactDom from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDom.createRoot(document.querySelector("#root"));
root.render(<App />);

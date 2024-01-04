import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import Nav from "./components/Nav";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
const nav = ReactDOM.createRoot(document.getElementById("nav"));
nav.render(<Nav />);

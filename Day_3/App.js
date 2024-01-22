import React from "react";
import ReactDom from "react-dom";

const heading = React.createElement("h1", { id: "heading" }, "Hello React");
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(heading);

const head = React.createElement("h5", { id: "head" }, "Hello React");
const root1 = ReactDom.createRoot(document.getElementById("root1"));
root.render(head);
import React from "react";
import ReactDOM from "react-dom";

//const jsx = <h1>Heading</h1>

const Title = () => {
  return <h1>React Course</h1>;
};

const Container = () => {
  return (
    <div id="container">
      {100-100}
      <Title />
      <Title></Title>
      <p>Hello how r u??</p>
    </div>
  );
};

//const heading = React.createElement("h1", { id: "heading" }, "Hello React world");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container />);

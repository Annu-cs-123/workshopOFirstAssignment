import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "Hello World")
//   );
// };
const Greeting = () => {
  return (
    <div>
      <h1 className="text-center"> Books </h1>
      <App />
    </div>
  );
};

ReactDOM.render(<Greeting />, document.getElementById("root"));

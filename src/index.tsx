import React from "react";
import ReactDOM from "react-dom";
import Canvas from "./canvas";

ReactDOM.render(
  <React.StrictMode>
    <Canvas length={800}></Canvas>
  </React.StrictMode>,
  document.getElementById("root")
);

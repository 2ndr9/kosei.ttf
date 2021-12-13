import React from "react";
import ReactDOM from "react-dom";
import Canvas from "./canvas";

ReactDOM.render(
  <React.StrictMode>
    <Canvas width={800} height={600}></Canvas>
  </React.StrictMode>,
  document.getElementById("root")
);

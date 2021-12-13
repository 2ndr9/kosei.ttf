import React from "react";
import ReactDOM from "react-dom";
import Canvas from "./canvas";
import View from "./view";

ReactDOM.render(
  <React.StrictMode>
    <Canvas length={800}></Canvas>
    <View />
  </React.StrictMode>,
  document.getElementById("root")
);

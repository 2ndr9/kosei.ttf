import React from "react";
import ReactDOM from "react-dom";
import Canvas from "./canvas";
import View from "./view";

ReactDOM.render(
  <React.StrictMode>
    <div style={{ display: "inline" }}>
      <Canvas></Canvas>
      <View></View>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

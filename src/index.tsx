import React from "react";
import ReactDOM from "react-dom";
import Canvas from "./canvas";
import View from "./view";
import App from "./rescanvas";

ReactDOM.render(
  <React.StrictMode>
    <Canvas></Canvas>
    {/* <View /> */}
    {/* <App></App> */}
  </React.StrictMode>,
  document.getElementById("root")
);

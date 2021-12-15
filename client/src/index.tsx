import React from "react";
import ReactDOM from "react-dom";
import Canvas from "./canvas";
import View from "./view";
import FontFace from "./FontFace";

ReactDOM.render(
  <React.StrictMode>
    <FontFace></FontFace>
    <Canvas></Canvas>
    <View></View>
  </React.StrictMode>,
  document.getElementById("root")
);

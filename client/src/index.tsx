import React from "react";
import ReactDOM from "react-dom";
import Canvas from "./canvas";
import View from "./view";
import FontFace from "./FontFace";

import { isMobile } from "react-device-detect";
import Header from "./Header";

if (isMobile) {
  alert("PCでChromeで開いてください");
}

ReactDOM.render(
  <React.StrictMode>
    <Header></Header>
    <FontFace></FontFace>
    <Canvas></Canvas>
    <View></View>
  </React.StrictMode>,
  document.getElementById("root")
);

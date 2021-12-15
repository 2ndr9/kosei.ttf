import React from "react";
import ReactDOM from "react-dom";
import Canvas from "./canvas";
import View from "./view";
import FontFace from "./FontFace";

import { isChrome, isMobile } from "react-device-detect";

if (!isChrome || isMobile) {
  alert("Google Chromeで開いてください");
}

ReactDOM.render(
  <React.StrictMode>
    <FontFace></FontFace>
    <Canvas></Canvas>
    <View></View>
  </React.StrictMode>,
  document.getElementById("root")
);

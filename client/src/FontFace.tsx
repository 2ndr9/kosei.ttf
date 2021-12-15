import { createGlobalStyle } from "styled-components";

const FontFace = createGlobalStyle`
@font-face {
  font-family: "tsuno";
  src: url("https://font-a.s3.ap-northeast-1.amazonaws.com/a.ttf?${new Date().getTime()}")
    format("opentype");
}
`;

export default FontFace;

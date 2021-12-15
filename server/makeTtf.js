const webfont = require("webfont").default;
const fs = require("fs");

webfont({
  files: "./svg/*.svg",
  fontName: "everyoneFont",
  fontHeight: 512,
  descent: 64,
  formats: ["ttf"],
})
  .then((result) => {
    // fs.writeFileSync("a.ttf", result.ttf);
    fs.writeFileSync("../client/src/a.ttf", result.ttf);
  })
  .catch((error) => {
    throw error;
  });

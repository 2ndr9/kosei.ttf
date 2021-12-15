const webfont = require("webfont").default;
// const fs = require("fs");

const AWS = require("aws-sdk");
const s3 = new AWS.S3();

webfont({
  files: "./svg/*.svg",
  fontName: "everyoneFont",
  fontHeight: 512,
  descent: 64,
  formats: ["ttf"],
})
  .then((result) => {
    // fs.writeFileSync("a.ttf", result.ttf);
    // fs.writeFileSync("../client/src/a.ttf", result.ttf);

    s3.upload(
      {
        Bucket: "font-a",
        Key: "a.ttf",
        Body: result.ttf,
      },
      (err, data) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(data);
      }
    );
  })
  .catch((error) => {
    throw error;
  });

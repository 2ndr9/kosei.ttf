const webfont = require("webfont").default;
// const fs = require("fs");

const AWS = require("aws-sdk");
const s3 = new AWS.S3();

webfont({
  files: "./svg/*.svg",
  fontName: "everyoneFont",
  formats: ["ttf"],
})
  .then((result) => {
    // fs.writeFileSync("a.ttf", result.ttf);
    // fs.writeFileSync("../client/src/a.ttf", result.ttf);

    s3.upload(
      {
        Bucket: "font-a",
        Key: "個性.ttf",
        Body: result.ttf,
        ACL: "public-read",
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

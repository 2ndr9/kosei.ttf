"use strict";
const SVGIcons2SVGFontStream = require("svgicons2svgfont");
const fs = require("fs");
const svg2ttf = require("svg2ttf");
const AWS = require("aws-sdk");
const s3 = new AWS.S3();

const uploadToS3 = (body, key) => {
  return s3
    .upload(
      {
        Bucket: "kosei.ttf",
        Key: key,
        Body: body,
        ACL: "public-read",
      },
      (err, data) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(data);
      }
    )
    .promise();
};

const downloadFromS3AndMakeSvgFont = () => {
  const fontStream = new SVGIcons2SVGFontStream({
    fontName: "個性",
    normalize: true,
    centerHorizontally: true,
  });

  return new Promise(async (resolve) => {
    fontStream
      .pipe(fs.createWriteStream("/tmp/個性.svg"))
      .on("finish", function () {
        console.log("Font successfully created!");
        resolve();
      })
      .on("error", function (err) {
        console.log(err);
      });

    const list = await s3
      .listObjectsV2({ Bucket: "kosei.ttf", Prefix: "svgs/" })
      .promise();
    list.Contents.forEach((c) => {
      const key = c.Key;
      // "svgs/a.svg"から"a"だけを切り取る
      const targetCharacterName = key.slice(5, 6);

      // ディレクトリにもヒットしてしまうため、回避
      if (key == "svgs/") return;

      const stream = s3
        .getObject({ Bucket: "kosei.ttf", Key: key })
        .createReadStream();
      stream.metadata = {
        unicode: [targetCharacterName],
        name: targetCharacterName,
      };
      fontStream.write(stream);
    });

    fontStream.end();
  });
};

const makeTtfAndUpload = async () => {
  const ttf = svg2ttf(fs.readFileSync("/tmp/個性.svg", "utf8"), {});
  await uploadToS3(Buffer.from(ttf.buffer), "個性.ttf");
};

exports.handler = async (event) => {
  try {
    const svgXML = event.svgXML;
    const targetCharacter = event.targetCharacter;

    await uploadToS3(svgXML, `svgs/${targetCharacter}.svg`);
    await downloadFromS3AndMakeSvgFont();
    await makeTtfAndUpload();
    fs.unlink("/tmp/個性.svg", (err) => {
      if (err) throw err;
      console.log("delete /tmp/個性.svg");
    });

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
      body: "OK",
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
      body: "bad request",
    };
  }
};

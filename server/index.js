"use strict";
const SVGIcons2SVGFontStream = require("svgicons2svgfont");
const fs = require("fs");
const svg2ttf = require("svg2ttf");
const AWS = require("aws-sdk");
const s3 = new AWS.S3();

const uploadToS3 = async (body, key) => {
  await s3
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

const downloadFromS3AndMakeSvgFontAndMakeTtfAndUpload = async () => {
  const fontStream = new SVGIcons2SVGFontStream({
    fontName: "個性",
    normalize: true,
    centerHorizontally: true,
    centerVertically: true,
  });

  return new Promise(async () => {
    fontStream
      .pipe(fs.createWriteStream("/tmp/個性.svg"))
      .on("finish", function () {
        console.log("Font successfully created!");
        makeTtfAndUpload();
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
    // const svgXML =
    //   '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="720" width="720"><path d="M 296.25 234.25 C 296.25 236.49 296.47 235.13 296.25 245.45 C 296.04 255.76 295.51 264.28 295.18 285.8 C 294.85 307.33 293.73 326.27 294.6 353.08 C 295.48 379.89 295.58 394.32 299.55 419.86 C 303.53 445.39 307.42 459.29 314.46 480.74 C 321.5 502.19 326.82 513.6 334.74 527.11 C 342.67 540.62 346.28 542.43 354.08 548.28 C 361.88 554.12 364.33 556.08 373.74 556.34 C 383.14 556.6 389.18 555.86 401.1 549.56 C 413.02 543.27 420.71 538.18 433.35 524.88 C 446 511.57 452.73 501.39 464.32 483.02 C 475.91 464.66 482.94 450.36 491.31 433.07 C 499.68 415.77 501.92 408.07 506.18 396.53 C 510.45 385 510.67 382.01 512.63 375.39 C 514.59 368.76 515.18 366.78 516 363.4 C 516.82 360.01 516.61 359.45 516.73 358.46 C 516.86 357.47 516.66 358.46 516.61 358.46 C 516.56 358.46 516.51 358.46 516.48 358.46" fill="black" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path></svg>';
    // const targetCharacter = "c";

    await uploadToS3(svgXML, `svgs/${targetCharacter}.svg`);
    await downloadFromS3AndMakeSvgFontAndMakeTtfAndUpload();

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
      statusCode: 400,
      headers: {
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
      body: "bad request",
    };
  }
};

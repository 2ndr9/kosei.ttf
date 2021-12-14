const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.post("/auth/", (req, res) => {
  console.log(req.body);
  res.send("Received POST Data!");
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

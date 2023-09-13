const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// app.use(middleWare1);

// function middleWare1(req, res, next) {
//   console.log("Hello from the middleware 1");
//   next();
// }

app.use(bodyParser.json());

function calculateSum(n) {
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

app.get("/", (req, res) => {
  // res.send("hello world");
  res.sendFile(__dirname + "/index.html");
});

app.get("/sum", (req, res) => {
  var n = req.query.n;
  var result = calculateSum(n);
  // res.send(`Sum of 1-${n} is ${result}`);
  res.send({ sum: result });
});

app.post("/createUser", (req, res) => {
  res.send("user created successfully...");
});

app.post("/sum", (req, res) => {
  // var n = Number(req.headers.n);
  var n = req.body.n;
  var result = calculateSum(n);
  var obj = {
    sum: result,
  };
  res.status(200).send(obj);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

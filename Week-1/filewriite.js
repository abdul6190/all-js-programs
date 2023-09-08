const fs = require("fs");

const content = "this is a sample content";

fs.writeFile("./test.txt", content, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully written...");
  }
});

for (let i = 0; i <= 100000000000; i++) {}

console.log("Done...");

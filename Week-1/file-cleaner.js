const fs = require('fs');

function cleanFile(err, data){
  var regExp = /\s+/g;
  var result = data.replace(regExp, " ");
  fs.writeFile('./spaces.txt', result, err => console.log(err));
  console.log('File cleaned successfully..');
}

fs.readFile('./spaces.txt', 'utf8', cleanFile);
const fs = require('fs')


fs.readFile('./sample.txt','utf8', (err, data) => console.log(data));

for(let i =0; i<=100000000000; i++){

}

console.log('Done...');

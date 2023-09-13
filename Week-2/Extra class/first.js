/* 1 - Write a function 'higherOrder' that takes a callback function as an argument
 Inside 'higherOrder' function call the callback function synchronously
 
 2- Write a function 'higherOrderAsync' that takes a callback function as an argument.
 Inside 'higherOrderAsync' call the callback function asynchronously using setTimeOut after 
 a delay of n seconds where n is the current day of the month according to the UTC time (1<=n<=31) 
 
 3- Implement a function 'mapArray' that takes an array and a callback function as arguments.
   'mapArray' should apply the callback function to each element of the array and return a new array with the modified values.
 
 4- Write a function 'readFileCallback' that takes a filename and a callback function.
   'readFileCallback' should read the contents of the file asynchronously and pass the data to the callback function.
 */

// function higherOrder(callbackFn) {
//   callbackFn();
// }

// function callback() {
//   console.log("Success......");
// }

// function higherOrderAsync(callback) {
//   let currentDay = new Date().getDate();
//   setTimeout(callback, currentDay * 1000);
// }

// higherOrderAsync(callback);

// first method
/* function mapArray(arr, callback) {
  return callback(arr);
}

function doubleArray(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i] * 2);
  }
  return newArray;
}

console.log(mapArray([1, 2, 3, 4, 5], doubleArray)); */

// let arr = [1, 2, 3, 4];

// console.log(arr.map((element) => element * 2));

// console.log(arr.filter((element) => element % 2 == 0));

const fs = require("fs");

function readFileCallback(filename, callback) {
  fs.readFile(filename, "utf-8", callback);
}

function callback(err, data) {
  console.log(data);
}

readFileCallback("./a.txt", callback);

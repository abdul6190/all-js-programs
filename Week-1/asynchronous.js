console.log("Hello world");

function print() {
  console.log("Inside print function");
}

setTimeout(print, 7000);

let ctr = 0;
for (let i = 1; i <= 10; i++) {
  ctr++;
}

function getMedicineOne() {
  console.log("Medicine 1 received...");
}

function getMedicineTwo() {
  console.log("Medicine 2 received...");
}

setTimeout(getMedicineOne, 1000);

setTimeout(getMedicineTwo, 2000);

// v2

function getMedicineOne() {
  console.log("Medicine 1 received...");
  setTimeout(getMedicineTwo, 4000);
}

function getMedicineTwo() {
  console.log("Medicine 2 received...");
}

setTimeout(getMedicineOne, 2000);

// v3

setTimeout(function getMedicineOne() {
  console.log("Medicine 1 received...");
  setTimeout(function getMedicineTwo() {
    console.log("Medicine 2 received...");
  }, 4000);
}, 2000);

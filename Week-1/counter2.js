let count = 1;
function printCounter(){
    console.clear();
    console.log(count);
    count++;
    setTimeout(printCounter, 1000);

}

setTimeout(printCounter, 1000);
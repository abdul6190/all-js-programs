function sum(num1, num2){
    return num1 + num2;
}

function sub(num1, num2){
    return num1 - num2;
}

function mul(num1, num2){
    return num1 * num2;
}

function div(num1, num2){
    return num1 / num2;
}

function doArithmetic(num1, num2, arithmeticFn){
    return arithmeticFn(num1, num2);
}

var result = doArithmetic(3, 4, sum);
var result2 = doArithmetic(10, 4, sub);
var result3 = doArithmetic(6, 4, mul);
var result4 = doArithmetic(30, 4, div);

console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);

// In a Fibonacci series, every term is the sum of the preceding two terms, starting from 0 and 1 as the first and second terms.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . .
// Fn = Fn-1 + Fn-2.
// if n=10 then f10=55

function fibonacci(n) {
  let fibonacciSequence = [];
  if (n <= 0) {
    console.log("Enter the number greater than 0");
    return [];
  } else if (n === 1) return [0];
  else if (n === 2) return [0, 1];
  else {
    fibonacciSequence.push(0, 1);

    for (let i = 0; i < n - 2; i++) {
      let newTerm = fibonacciSequence[i] + fibonacciSequence[i + 1];
      fibonacciSequence.push(newTerm);
    }
    return fibonacciSequence.join(" ");
  }
}

console.log(fibonacci(10));

const sum = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const log = (value) => console.log(value);

console.log(divide(multiply(sum(2,4),subtract(sum(5,2),2)),5))
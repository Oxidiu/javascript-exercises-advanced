function sum(...nums) {
  return nums.reduce((acc, cur) => acc + cur, 0);
}

console.log(sum(1, 2, 3));
function sum(a, b, c) {
  console.log(arguments);
  const args=[...arguments];
  console.log(args);
}

const total = sum(45, 32, 56, 12);
console.log(sum.length);

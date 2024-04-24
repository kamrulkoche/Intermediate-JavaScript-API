function display1(num1, num2) {
  let sum = num1 + num2;
  console.log("Display1:", sum);
  return sum;
}

function display2(num1, num2) {
  const sub = num2 - num1;
  console.log("Display2:", sub);
  return sub;
}

function calculator(num1, num2, callback) {
  const result = callback(num1, num2);
  console.log("Result:", result);
  return result;
}

const totalResult = calculator(10, 20, display1);
console.log("TotalResult:", totalResult);
console.log("----------------------------");
const totalResult2 = calculator(10, 20, display2);
console.log("totalResult2:", totalResult2);
calculator(100, 500, display2);
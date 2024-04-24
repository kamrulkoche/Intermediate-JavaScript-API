function display1(num1, num2) {
  let sum = num1 + num2;
  console.log("Display1:", sum);
  return sum;
}

function display2(num1, num2) {
  const sub = num2 - num1;
  console.log("Display2:", sub);
}

function calculator(num1, num2, callback) {
  callback(num1, num2);
}

const result = calculator(10, 20, display1);
//console.log(result);

function display(some) {
  console.log("Display:", some);
}

function calculator(num1, num2, callback) {
  let sum = num1 + num2;
  //   if (callback) callback(sum);
  if (callback) {
    callback(sum);
  }
  return sum;
}

const result = calculator(10, 20, display);
console.log(result);

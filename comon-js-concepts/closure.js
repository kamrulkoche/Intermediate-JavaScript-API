function kitchen() {
  let roast = 0;
  return function () {
    roast++;
    return roast;
  };
}

const firstServe = kitchen();
const secondServe = kitchen();
console.log("FirstServe:",firstServe());
console.log("SecondServe:",secondServe());

console.log("------------");

console.log("FirstServe:",firstServe());
console.log("SecondServe:",secondServe());

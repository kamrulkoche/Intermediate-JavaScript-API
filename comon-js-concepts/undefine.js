/*
8 ways to get undefine
1.variable that is not initialized will give undefine
2.function with no return
3.parameter that is not passed will be undefine
4.if return has nothing on the right side will return undefine
5.property that doesn't exits on and object will give you undefined
6.accessing array elements outside of the index range
7.deleting an element inside an array
8.set a value directly to undefined
*/

let first;
function second(a, b) {
  const total = a + b;
}
const result = second();
// console.log(result);
// console.log(first);

function third(a, b, c, d) {
  const total = a + b + c + d;
  console.log(a, b, c, d);
}

//third(1,3);

function noNegative(a, b) {
  if (a < 0 || b < 0) {
    return;
  }
  return a + b;
}

const total = noNegative(2, 4);
//console.log(total);

const fifth = { id: 2, name: "ponchom", age: 40 };
//console.log(fifth.age,fifth.salary);

const sixth = [4, 89, 83, 32, 35];
//you should not do it.Instead use splice
delete sixth[1];
//console.log(sixth[1],sixth[100]);

const eighth = undefined;
const ninth = null;
const data = { result: [], updated: null };
// console.log(typeof null);
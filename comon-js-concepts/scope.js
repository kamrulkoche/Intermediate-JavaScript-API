function add(a, b) {
  const total = a + b;
  //console.log(a, b);
  if (b > 5) {
    const sum = 25 + a + b;
  } else {
    const sum = 5 + a + b;
    var current = sum;
  }
  //   console.log(sum);
  console.log(current);
  return total;
}

// console.log(a, b);
//console.log(total);
add(10, 3);

/*
1.Global Scope: Variables declared outside of any function or block have global scope. They can be accessed from anywhere within the script, including within functions and other blocks.

var globalVariable = "I am global";

function myFunction() {
    console.log(globalVariable); // Accessible
}

myFunction(); // Outputs: "I am global"


2.Local Scope (Function Scope): Variables declared inside a function have local scope. They are only accessible within that function.

function myFunction() {
    var localVar = "I am local";
    console.log(localVar); // Accessible
}

myFunction(); // Outputs: "I am local"
console.log(localVar); // Error: localVar is not defined


3.Block Scope (let and const): Variables declared with let and const inside a block, such as within loops or conditional statements, are only accessible within that block.

if (true) {
    let blockVar = "I am block scoped";
    console.log(blockVar); // Accessible
}

console.log(blockVar); // Error: blockVar is not defined


*/

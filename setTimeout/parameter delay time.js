// function delayedGreeting(name, delay) {
//   setTimeout(() => {
//     // console.log(`Hello  ${name}!`);
//     console.log("Hello", name);
//   }, delay);
// }

// delayedGreeting("Alice", 2000);
// delayedGreeting("John", 3000);

function delayedGreeting(name, delayTime) {
  setTimeout(function () {
    console.log(`Hello, ${name}!`);
  }, delayTime);
}

// Example usage:
delayedGreeting("John", 3000); // Logs "Hello, John!" after 3 seconds (3000 milliseconds)
delayedGreeting("Alice", 5000); // Logs "Hello, Alice!" after 5 seconds (5000 milliseconds)

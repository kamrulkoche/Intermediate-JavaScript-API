const person = { name: "Kamrul", age: 25, favoriteFood: "Rice" };
const { name, ...x } = person;
console.log(name);
console.log(x);
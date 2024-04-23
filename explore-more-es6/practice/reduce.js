const people = [
  { name: "Meena", age: 20 },
  { name: "Rina", age: 15 },
  { name: "Riya", age: 22 },
];

// const peopleOut = people.map((x) => x);
// console.log(peopleOut);

// const peopleAge = peopleOut.reduce((acum, current) => acum + current.age, 0);
// console.log(peopleAge);


const peopleOut = people.map((x) => x.age);
console.log(peopleOut);

const peopleAge = peopleOut.reduce((acum, current) => acum + current, 0);
console.log(peopleAge);

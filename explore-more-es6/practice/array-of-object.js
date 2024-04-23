const instructor = [
  { name: "Nodi", age: 28, position: "Senior" },
  { name: "Akil", age: 26, position: "Junior" },
  { name: "Sabuj", age: 30, position: "Senior" },
];

const result = instructor.filter((x) => x.position === "Senior");
console.log(result);

const positionResult = result.map((x) => x.position);
console.log(positionResult);

const max = Math.max(6, 23, 45, 1, 89, 23);
const numbers = [3, 5, 2, 45, 5, 43, 90, 32, 15];
const arrayMax = Math.max(...numbers);
console.log(arrayMax);

//use spread operator to copy
const friends = [4, 5, 84, 9];
const bondhu = friends;
const dosto=[...friends];
dosto.push(100);
console.log(dosto);

//advance
const sonkha=[...friends,999];
console.log(sonkha);
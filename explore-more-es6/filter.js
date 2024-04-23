//filter selects elements based on a condition and return an array with the elements that fulfilled the condition
const numbers = [4, 7, 9, 10];
const players = [4, 75, 65, 57, 69, 74];
const selected = players.filter((p) => p > 70);
const selected1 = players.filter((p) => p > 80);
const selected3 = players.filter((p) => p % 2 === 1);
console.log(selected3);

const friends = ["Tom", "Asik", "Reyad", "Alif","Koche"];
const lengths = friends.filter((friend) => friend.length > 4);
console.log(lengths);
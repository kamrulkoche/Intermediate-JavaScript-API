/**
 * 1.var let const
 * 2.default parameter
 * 3.template
 * 4.arrow function
 * 5.destructuring and spread
 * 6.object.keys, object.values,object.entries
 * 7.fpr of used in array and string,
 * 8.for in loop used in object
 */

const a = 56;
const numbers = [56, 7, 8];
const person = {
    name: 'Sakib Khan'
}

const message = `Hi, ${person.name} has a: ${a} access to ${numbers[2]}`;
console.log(message);

const square = x => x * x;
const result = square(2);
console.log(result);


const sum = (a, b) => a + b;
const result1 = sum(2, 5);
console.log(result1);

//destructuring and spread
const { age, z, ...others } = { x: 2, y: 5, z: 3, name: 'ovijeet', age: 55 };

console.log(others);

const [first, second, ...remaining] = ['ram', 'sam', 'jodu', 'modhu'];
console.log(first);
console.log(remaining);
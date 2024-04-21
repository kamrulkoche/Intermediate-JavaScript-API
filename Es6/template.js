const a = 10;
const b = 20;
const result = 'The sum of ' + a + ' and ' + b + ' is ' + (a + b);
console.log(result);

const total = `The sum of ${a} and ${b} is ${a + b}`;
console.log(total);

const email = 'Hi john \n' +
    'cena cena lage';
console.log(email);

const gmail = `hi john 
abc
xyz`;
console.log(gmail);

const numbers = [45, 48, 98, 78];
const student = { name: 'john ochena', age: 50 }
const math = `The sum of ${numbers[0]} and ${student.age} is ${numbers[0] + student.age}`;
console.log(math);
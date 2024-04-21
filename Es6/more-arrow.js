const difference = (x, y) => x - y;
const multiply = (first, second, third) => first * second * third;

//single parameter or one parameter
const getAge = (person) => person.age;
const student = { name: 'Kamrul', age: 45 };
const output = getAge(student);
//console.log(output);

const getThird = numbers => numbers[2];
const third = getThird([5, 9, 88, 2, 13]);
console.log(third);

//no parameter
const getPI = () => Math.PI
console.log(getPI());

//large arrow function
const doMath = (x, y, z) => {
    const sum = x + y + z;
    const mult = x * y * z;
    const add = sum + mult;
    return add;
}

const result=doMath(10,20,30);
console.log(result);
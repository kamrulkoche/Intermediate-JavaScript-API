const actor = {
    name: 'Kamrul',
    age: 25,
    phone: '01712545454',
    money: 1225454
}

//if right side is an object left side of destructuring will be object as well
//use property name as a variable that contains the property value 

const { phone, age: boyos } = actor;

// const name = actor.name;
// const phone = actor.phone;
// const age = actor.age;

console.log(phone);
console.log(boyos);

//array destructuring 
const numbers = [45, 99];
const num = [first, second] = numbers;
const [x, y] = [12, 66];
console.log(num);

//advance 
function doubleThem(a, b) {
    return [a * 2, b * 2];
}

const l = [p, q] = doubleThem(40, 52);
console.log(...l);
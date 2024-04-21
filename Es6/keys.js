const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
};

console.log(glass);

const keys = Object.keys(glass);
//console.log(keys);
const values = Object.values(glass);
//console.log(values);

//array of array , two dimensional array
const entries = Object.entries(glass);
//console.log(entries);
// [
//     ['name', 'glass'],
//     ['color', 'golden'],
//     ['price', 12],
//     ['isCleaned', true]
// ]

//delete option
// delete glass.isCleaned;
// console.log(glass);

const { isCleaned, ...shortGlass } = glass;
console.log(shortGlass);

//Object.freeze(glass);
glass.source='Bangladesh',
glass.price=5000,
delete glass.name;
console.log(glass);

Object.seal(glass);
glass.source='Bangladesh',
glass.price=500043,
delete glass.name;
console.log(glass);

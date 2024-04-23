//map
const products = [
  { id: 1, name: "Hp", price: 12000 },
  { id: 2, name: "Dell", price: 11000 },
  { id: 3, name: "Asus", price: 15000 },
  { id: 4, name: "Lenovo", price: 1204350 },
];

const names = products.map((product) => product.name);
//console.log(names);

const prices = products.map((p) => p.price);
//console.log(prices);

//forEach
//products.forEach((p) => console.log(p.id));

//filter

const expensive = products.filter((p) => p.price > 12000);
// console.log(expensive);

const Pnames = expensive.map((name) => name.id);
const num = expensive[0].id;
// console.log(expensive);
// console.log(num);
// console.log(Pnames);

//find
const affordable = products.find((p) => p.price > 12000);
console.log(affordable);

//reduce
const total = products.reduce((acum, current) => acum + current.price, 0);
console.log(total);

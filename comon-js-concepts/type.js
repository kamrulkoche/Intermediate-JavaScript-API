//dynamic type Language

//primitive type
const a = 5;
const b = "Samsu kopai na ekhon er";
const d = true;

//non-primitive type
const ages = [45, 65, 48];
const student = { id: 23, class: 7 };
console.log(typeof a, typeof b, typeof d, typeof ages, typeof student);

let x = 5;
let y = x;
console.log(x, y);
y = 7;
console.log(x, y);

let p = { job: "web developer" };
let q=p;
// console.log(p,q);
// q={job:"Back end"}
// console.log(p,q);

q.job="front end developer";
console.log(p,q);
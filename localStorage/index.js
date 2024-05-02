const setAge = () => {
  localStorage.setItem("Mamun", "27");
  window.localStorage.setItem("Asik", "25");
};

const person = { name: "Lal miya", age: 13, profession: "painter" };

console.log(person);

const personString = JSON.stringify(person);
console.log(personString);

console.log(JSON.parse(personString));

localStorage.setItem("Koche", "23");

const clearData = () => {
  localStorage.clear();
  // console.log("Hello");
};

const removeData = () => {
  localStorage.removeItem("Mamun", 27);
};


const showItem=localStorage.getItem("Koche");

console.log(showItem);
const products = [
  { id: 1, name: "Hp", price: 12000 },
  { id: 2, name: "Dell", price: 11000 },
  { id: 3, name: "Asus", price: 15000 },
  { id: 4, name: "Lenovo", price: 1204350 },
];

//has some properties,method
class Product {
  country = "Bangladesh";
  constructor(name) {
    this.name = name;
  }
  speak(talk) {
    console.log(`talking about ${talk}`);
  }
}

const lenovo = new Product("Le le lenovo");
// console.log(lenovo);
// lenovo.speak("Hello");


class Teacher{
    constructor(name,subject){
        this.name=name;
        this.subject=subject;
    }
    lecture(year){
        console.log(`Sir is teaching Math ${year}`);
    }
}

const tapan=new Teacher ("Tapan Sir","Physics");
console.log(tapan);
tapan.lecture("2023");

const rashed=new Teacher ("rashed Sir","English");
console.log(rashed);
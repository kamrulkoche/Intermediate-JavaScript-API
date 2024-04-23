class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    sleep(){
        console.log(`Sleeping now ${this.name}`);
    }
}

const kadom=new Person("Kadom",30);
console.log(kadom);
kadom.sleep();

const badam=new Person("Badam",26);
badam.sleep();
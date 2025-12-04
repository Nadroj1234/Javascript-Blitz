const car1 = {
  make: "Ford",
  model: "Mustang",
  year: 2024,
  color: "red",
};

const car2 = {
  make: "Chevy",
  model: "Camaro",
  year: 2025,
  color: "blue",
};

const car3 = {
  make: "Dodge",
  model: "Charger",
  year: 2026,
  color: "silver",
};

// this works but its not super eficient when you have a lot

//constructor function
function Car(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.drive = function () {
    console.log(`Taking the ${this.model} for a drive.`);
  };
}
// notice the NEW keyword
const car4 = new Car("ford", "mustang", 2024, "red");
const car5 = new Car("Chevy", "Andrecziak", 2023, "blue");

console.log(car4.make);
console.log(car5.make);
car4.drive();

//create a constructor for a person object. That has the following:
// name
//age
//job
// introduce (method that logs "Hello, my name is ____ and I work as a ___ ")
// create an object from that and call the introduce method.

function Person(name, age, job) {
  (this.name = name),
    (this.age = age),
    (this.job = job),
    (this.introduce = function () {
      console.log(
        `Hello, my name is ${this.name} and I work as a ${this.job} `
      );
    });
}

const person1 = new Person("Jordan", 17, "Programmer");

console.log(person1.name);
console.log(person1.age);
console.log(person1.job);

person1.introduce();

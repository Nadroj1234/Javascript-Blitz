// reminder: Constructor Functions:
// function Product(name, price) {
//     this.name = name;
//     this.price = price;
//     this.displayProduct = function () {
//         console.log(`Product: ${this.name}, Price: $${this.price}`);
//     };
// }

// let prod = new Product("shoe", 315.78);
// prod.displayProduct();

//constructor functions work fine, but they can feel messy.

class Product {
  //this is what is automatically called when you say "new"
  // someVar = new Product()
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  //add a METHOD - methods are functions within a class
  displayProduct() {
    console.log(`Product: ${this.name}, Price: $${this.price}`);
  }
  calculateTotal(salesTax) {
    return this.price * (1 + salesTax);
  }
}

let myProd = new Product("A lock of Brooks' hair", 0.02);
myProd.displayProduct();

const prod1 = new Product("Thomas' boots", 20.03);
const prod2 = new Product("Keanus' boots", 20.01);
const prod3 = new Product("James' cookware", 12.78);

let products = [prod1, prod2, prod3, new Product("Noah's socks", 1)];

console.log("Welcome to CMP's store of magical and unwanted items!");
console.log("Check out our products!");
for (prod of products) {
  prod.displayProduct();
  console.log(
    "This product, with tax, costs: $" + prod.calculateTotal(0.06).toFixed(2)
  );
}
//update the class to have a method called CalculateTotal that accepts a tax amount and
// and returns the total cost for the item (including tax)

// Why classes are good:
// reusable
// help organization
// easy to add new methods
// leads to advanced features such as composition and inheritance.

// Practice:
/*
Try making your own class called Car that has:

A constructor with make, model, and year
A method called displayInfo() that prints all three properties
A method called startEngine() that prints "The engine of the [make] [model] has started."
*/

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  displayInfo() {
    console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
  }

  startEngine() {
    console.log(`The engine of the ${this.make} ${this.model} has started.`);
  }
}

let car1 = new Car("Ford", "Bronco", 2014);

car1.displayInfo();
car1.startEngine();

// in JS the super keyword is used is a child class to call the constructor,methods, or properties of its parent class.

// "this" refers to this current object
// "super" refers to the parent of this object

// it can be important to call a parent's constructor

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  print() {
    console.log(`Hi my name is ${this.name}, I am ${this.age} years old.`);
  }
  move(speed) {
    console.log(`${this.name} moves at a speed of ${speed}`);
  }
}

class Rabbit extends Animal {
  constructor(name, age, runSpeed) {
    super(name, age); //call the parent constructor
    this.runSpeed = runSpeed;
  }
  run() {
    console.log(`${this.name} can run `);
    super.move(this.runSpeed);
  }
}

class Fish extends Animal {
  constructor(name, age, swimSpeed) {
    super(name, age);
    this.swimSpeed = swimSpeed;
  }
  swim() {
    console.log(`${this.name} can swim `);
    super.move(this.swimSpeed);
  }
}

let r = new Rabbit("bunny", 3, 10);
r.print();
r.run();

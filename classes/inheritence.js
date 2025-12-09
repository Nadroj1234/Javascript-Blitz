// Inheritence - one of the most important concepts in OOP. (Object Oriented Programming)
// Inheritence allows one class (the child class) to inherit properties and methods from another class (parent or superclass)

// A parent class will contain general properties and methods
// A child class can use those properties and methods as well as add some that are more specific.

class Animal {
  alive = true;
  eat() {
    console.log(`${this.name} is eating.`);
  }
  sleep() {
    console.log(`${this.name} is sleeping.`); // we will define name later
  }
}

class Rabbit extends Animal {
  name = "Rabbit";
  run() {
    if (this.alive) {
      console.log(`${this.name} is running!`);
    } else {
      console.error(`Sorry, ${this.name} is dead`);
    }
  }
}

class Fish extends Animal {
  name = "Fish";
  swim() {
    if (this.alive) {
      console.log(`${this.name} is swimming!`);
    } else {
      console.error(`Sorry, ${this.name} is dead`);
    }
  }
}

const r = new Rabbit();
const f = new Fish();

r.eat();
f.sleep();

r.alive = false;
console.log(r.alive);
console.log(f.alive);

r.run();
f.swim();

//r.swim()

// why inheritence - it helps with the DRY principle -

// Practice:
// Create a class called vehicle
// - Give it a property called wheels and set it to 4
// - Give it start and stop methods that print messages saying what they did

// create 2 child classes - Car, Motorcycle
// - Car should have a method called honk() and logs "beep, beep"
// - Motorcycle should set wheels to 2 and has a method ca;;ed putOnHelmet that just logs "helmet is on"

// Test it all

class Vehicle {
  wheels = 4;
  start() {
    console.log(`${this.name} is running.`);
  }
  stop() {
    console.log(`${this.name} has stopped.`);
  }
}

class Car extends Vehicle {
  name = "Car";
  honk() {
    console.log("beep, beep");
  }
}

class Motorcycle extends Vehicle {
  wheels = 2;
  name = "Motorcycle";
  putOnHelmet() {
    console.log("helmet is on");
  }
}

const c = new Car();
const m = new Motorcycle();

c.start();
m.stop();

c.honk();
m.putOnHelmet();

// most times, you want properties and methods to belong to the objects of a class
// reminer: objects are instances of a class
// sometimes you want a property or method to be shared by all objects of the class.
// this is where static comes in:

class CandyBar {
  static totalCandyBars = 0;
  constructor(desc, calories) {
    this.desc = desc;
    this.calories = calories;
    CandyBar.totalCandyBars += 1;
  }

  //comparison method (static)
  static healthier(candybar1, candybar2) {
    if (candybar1.calories < candybar2.calories) {
      return candybar1;
    } else {
      return candybar2;
    }
  }
}

let cb = new CandyBar("snickers", 300);
let cb2 = new CandyBar("milky way", 270);

console.log(cb);
console.log(cb2);

console.log('"healthier');
console.log(CandyBar.healthier(cb, cb2));

// you use the class name for this

console.log(CandyBar.totalCandyBars + " <- total CB");

class MathUtilities {
  static PI = 3.14159;
  static getDiameter(radius) {
    return radius * 2;
  }
}

console.log(MathUtilities.PI); //I ca use this without ever instatiating an object.
console.log(MathUtilities.getDiameter(4));

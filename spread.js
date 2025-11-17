// The spread operator allows you to expand or unpack an iterable (arrays, lists, collections)
// It is done with ...
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
let maximum = Math.max(numbers); // (NaN) it just wanted 1,2,3,4,5
console.log(maximum);
let betterMax = Math.max(...numbers); // use the spread operator
console.log(betterMax);
console.log(...numbers);

// make a string into an array of characters
// use spread operator AND []
let fname = "Thomax";
let characters = [...fname];
console.log(characters);
let lname = "Carpentax";
// combine strings
characters = [...fname, " ", ...lname];
console.log(characters);

// put array elements together
console.log(characters.join("-"));

let myArray = ["dogs", "cats", "hamsters"];
let myOtherArray = ["chickens", "bunnies", "snakes"];
let allAnimals = [myArray, myOtherArray]; //makes it a 2d array
console.log(allAnimals);
allAnimals = [...myArray, ...myOtherArray]; // a 1d array
console.log(allAnimals);

//make a copy of an array
arrCopy = myArray;
console.log(myArray);
arrCopy[0] = "Fish";
console.log(myArray); // shows fish as the value at index 0

arrCopy = [...myArray];
arrCopy[0] = "Dog";
console.log(myArray); // shows fish as STILL the value at index 0

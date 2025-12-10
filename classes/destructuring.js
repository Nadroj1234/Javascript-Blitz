// destructuring - is a quick and convenient way to extract values
// from arrays and objects and assign them to variables
// use square brackets [] for array destructuring
// use curly brackets {} for object destructuring

// example:
const colors = ["red", "orange", "green", "yellow", "blue"];
// imagine a scenario where we want these is their own variables
/* our goal:
// NOT DESTRUCTURING
let c1 = colors[0];
let c2 = colors[1];
let c3 = colors[2];
let c3 = colors[3];
let c3 = colors[4];

*/
// Destructuring!
const [c1, c2, c3, c4, c5] = colors;
console.log(c1);
console.log(c2);
console.log(c3);

//simple example
// swap

let a = 5;
let b = 9;
// write code to put the value of a into b and the value of b into a
// Theres a catch
// you get no other variables

[b, a] = [a, b];

console.log(b);

const [col1, col2] = colors;
console.log(col1);
const [clr1, clr2, ...clrs] = colors;
console.log(clr1);
console.log(clr2);
console.log(clrs);

//destructuring objects:
const Ed = {
  firstName: "Ed",
  lastName: "Sheeran",
  age: 34,
  job: "Artist",
};

const elton = {
  firstName: "Elton",
  lastName: "John",
  job: "Artist",
};

//to destructure an object, use {} and specify the property names
// const { firstName, lastName, age, job } = Ed;
// console.log(firstName);
const { firstName, lastName, age = 78, job } = elton;
console.log(firstName);
console.log(age);

// destructuring in function parameters
// Old way:
function displayperson(person) {
  console.log(`Name; ${person.firstName} ${person.lastName}`);
  console.log(`Name; ${person.age}`);
  console.log(`Name; ${person.job}`);
}

displayperson(Ed);

function displayPersonDestructured({
  firstName,
  lastName,
  age = 50,
  job = "unemployed",
}) {
  console.log(`Name: ${firstName} ${lastName}`);
  console.log(`Name: ${age}`);
  console.log(`Name: ${job}`);
}
displayPersonDestructured(Ed);

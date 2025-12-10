//nested objects are simply objects inside other objects:
/* From the course content site - bro code style: */

const person = {
  fullName: "SpongeBob SquarePants",
  age: 30,
  isStudent: true,
  hobbies: ["karate", "jellyfishing", "cooking"],
  address: {
    street: "124 Conch Street",
    city: "Bikini Bottom",
    country: "International Waters",
  },
};
console.log(person.address.city);

//"for of" vs "for in"
const colors = ["red", "orange", "yellow", "green", "blue"];
for (color of colors) {
  // of is giving values
  console.log(color); // "red", "orange", "yellow", "green", "blue"
}
for (color in colors) {
  // in is giving keys
  console.log(color); //0,1,2,3,4
}

// looping through object properties:
for (prop in person) {
  console.log(prop, ":");
  console.log("".padEnd(4), person[prop]);
}

console.log(`${"Christmas".padEnd(15, "-")}Party`);

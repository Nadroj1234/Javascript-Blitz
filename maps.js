// use the map method to transform arrays
// use callback function to modify the elements
//returns a new array (does not change the existing one)

// the map() method loops through an array and applies a function to each element

const numbers = [1, 2, 3, 4, 5];

function square(element) {
  return Math.pow(element, 2);
}

let squares = numbers.map(square);
console.log(numbers);
console.log(squares);

let cubed = numbers.map((e) => {
  return Math.pow(e, 3);
});
console.log(cubed);

// Note: works similar to foreach:
/*
array.map(function,index,array){
    code
})
*/

const dates = ["2024-01-10", "2025-02-20", "2026-03-30"];

function merica(element) {
  // split up a date like 2024-01-20 into parts
  const parts = element.split("-");
  //part[0] is the year, part1[1] is the month, part[2] is the day

  return `${parts[1]}/${parts[2]}/${parts[0]}`;
}

const themDates = dates.map(merica);
console.log(dates);
console.log(themDates);

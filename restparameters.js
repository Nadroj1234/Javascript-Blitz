// rest parameters allow a funcion to accept a variable number of arguments.
function myfunction(name, ...values) {
  // notice the ... (this actually packs up the REST)
  //values is stored in an array
  console.log(`Hello ${name}`);
  console.log(`Heres the info I have on you: `);
  for (val of values) {
    console.log(val);
  }
}

myfunction(
  "Mr. Klins",
  "spaced out",
  "balding",
  "tries...but often fails,",
  "cocomelon voice actor"
);

//write a function that accepts a variable number of arguments and returns the average
// you may assume all arguments are numbers.
// example call"
//getAverage(5,6); getAverage(5,6,7,8,9);

function getAverage(...values) {
  sum = 0;
  for (val in values) {
    sum += val;
  }
  let avg = sum / values.length;
  console.log(avg);
}

getAverage(1, 2, 3, 4, 5);

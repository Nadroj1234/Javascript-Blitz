/* foreach works with arrays. Just a conveniant wat to loop through a list */
/* You pass a callback function to process each element */

let numbers = [2, 4, 6, 8, 14];

function display(element, index, array) {
  console.log(
    `the element: ${element} \nThe Index ${index} \nThe array ${array}`
  );
}

numbers.forEach(display);

/* How it works */
/* 
    three arguments are provided to the callback

    array.foreach(function(element, index, array){
        // some code
    })
*/

/* modify the array in our callback */
function double(e, i, a) {
  a[i] = e * 2;
}

numbers.forEach(double);
console.log(numbers);

// anonymous
numbers.forEach(function (e, i, a) {
  a[i] = e / 2;
});

console.log(numbers);

let foods = ["acid", "tacos", "cats"];

foods.forEach((e, i, a) => {
  console.log(e.toUpperCase());
});

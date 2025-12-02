// use filter to pick certain elements from an array
//uses a boolean callback

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function isEven(num) {
  return num % 2 == 0;
}

let evens = nums.filter(isEven); // this list is based on elements that resolve to true in the callback
console.log(evens);

// same structure as the other array methods:
/*
let newArr = array.filter(function(element, index, array){
    cde that eventually return true/false
})
*/

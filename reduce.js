/* reduce can combine all elements in an array to a single value */
// accepts a callback just like the others.
// array.reduce(callback)

function sum(accumulator, element) {
  return accumulator + element;
}

const prices = [2.99, 5.49, 10000.01];

let total = prices.reduce(sum);

console.log(total);

let minimum = prices.reduce((a, e) => {
  return a > e ? e : a;
});

console.log(minimum);

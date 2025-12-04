// arrow functions are just a shorter way to write function expressions.
const getToWork = (who, onWhat) => {
  for (let i = 0; i < 1000; i++) {
    console.log(`${who}, get to work on ${onWhat}`);
  }
};

getToWork("Alex", "bringing up a card");

let count = 0;
let interval = setInterval(() => {
  console.log(Math.floor(Math.random() * 6) + 1);
  if (count == 10) {
    clearInterval(interval);
  }
  count += 1;
}, 500);

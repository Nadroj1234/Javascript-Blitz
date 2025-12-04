// JS can create function sin two ways.
// 1. Function declalrations
/*
function something(){
    ...code
    return someValue
}
*/
// 2. Function expressions:
// treats a function as a value

const getToWork = function () {
  for (let i = 0; i < 1000; i++) {
    console.log("get to work");
  }
};

getToWork();

// this function was hoisted - its is avaliable above
/*function getToWork() {
  for (let i = 0; i < 1000; i++) {
    console.log("get to work");
  }
};*/

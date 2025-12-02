/* what is a callback? */
/* 
    A callback is a function that is passed as an argument to another function. The receiving function then calls it when appropriated.
*/

function adios() {
  console.log("adios");
}

hola();
adios();

// imagine that hola is a function that takes time to run (like making a request to a server or loading a file)

function hola(callbackFunction) {
  // simulate taking time
  setTimeout(() => {
    console.log("hola");
    callbackFunction();
  }, 2000);
}

hola(adios);
console.log("passed hola");

function sum(x, y, callback) {
  let result = x + y;
  callback(result);
}

function printValue(value) {
  console.log(`The result is ${value}`);
}

sum(5, 6, printValue);

function sum(num1, num2) {
  return num1 + num2;
}

function split(num1, num2) {
  return num1 / num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}
console.log(calc(1, 2, split));

/* OTRO EJERCICIO */

function greeting(name) {
  console.log(`Hola!! ${name}, como estas?`);
}

setTimeout(greeting, 3000, "juan");

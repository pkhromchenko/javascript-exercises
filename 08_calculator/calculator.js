const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  let sum = 0;
  for (var i of array) {
    sum += i;
  }
  return sum;
};

const multiply = function (array) {
  let total = 1;
  for (var i = 0; i < array.length; i++) {
    total = array[i] * total;
  }
  return total;
};

const power = function () {};

const factorial = function () {};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};

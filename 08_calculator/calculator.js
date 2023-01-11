const add = function (num1, num2) {
  let result = num1 + num2
  return result
};

const subtract = function (num1, num2) {
  let result = num1 - num2
  return result
};

const sum = function (arr) {
  let result = 0
  for (let i = 0; i < arr.length; i++) {
    result = result + arr[i]
  }
  return result
};

const multiply = function (arr) {
  let result = 1
  for (let i = 0; i < arr.length; i++) {
    result = result * arr[i]
  }
  return result
};

const power = function (number, power) {
  let result = 1
  for (i = 0; i < power; i++) {
    result = result * number
  }
  return result
};

const factorial = function () {

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

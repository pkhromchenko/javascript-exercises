const fibonacci = function (nthValue) {
  if (nthValue < 0) {
    return "OOPS";
  }
  var fib = [0, 1];
  for (let i = 2; i < 30; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib[parseInt(nthValue)];
};

// Do not edit below this line
module.exports = fibonacci;

const palindromes = function (potentialPali) {
  const removePunc = potentialPali.replace(/[^\w]|_/g, "");
  const lower = removePunc.toLowerCase();
  revLower = lower.split("").reverse().join("");
  if (revLower == lower) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;

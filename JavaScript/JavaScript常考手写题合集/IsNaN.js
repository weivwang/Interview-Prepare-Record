function isNaN(test) {
  if (test.constructor === Number && test !== test) return true;
  return false;
}
console.log(isNaN({}));
